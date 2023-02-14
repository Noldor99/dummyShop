
import { Container, Grid, Toolbar } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {
  useGetCategoriesAllQuery,
  useLazyGetCategoriesQuery,
  useLazyGetProductsReposQuery,
  useLazyGetSearchQuery
} from '../store/redusers/dummApi'
import Pagination from '@mui/material/Pagination';
import { setCurrentPageAction } from '../store/redusers/filterSlice';
import Cart from '../components/Cart';
import CategorySelect from '../components/CategorySelect';
import MySearch from '../components/MySearch';
import { useTypedSelector } from '../hook/useTypedSelector';
import { IProduct } from '../models/models';
import Skeleton from '../components/Skeleton';
import useWindowDimensions from '../hook/useWindowDimensions';


const Home = () => {

  const { products, totalPage } = useTypedSelector(state => state.product);
  const { currentPage, currentСategory, searchValue } = useTypedSelector(state => state.filter);

  const dispatch = useDispatch()
  useGetCategoriesAllQuery(null)

  const { width } = useWindowDimensions();


  const [fetchReposAll, { isLoading }] = useLazyGetProductsReposQuery()
  const [fetchCategory] = useLazyGetCategoriesQuery()
  const [fetchSearch] = useLazyGetSearchQuery()



  useEffect(() => {
    if (!searchValue) {
      if (currentСategory !== 'All' && currentСategory) {
        fetchCategory({ category: currentСategory, page: currentPage })
      }
      if (currentСategory === 'All' || !currentСategory)
        fetchReposAll(currentPage)
    }
    if (searchValue)
      fetchSearch({ search: searchValue, page: currentPage })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, currentСategory, searchValue]);

  return (
    <Container sx={{ pt: '30px', pb: '30px' }}>
      <Toolbar />
      <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 3 }} sx={{ pb: '30px' }}>
        <Grid item xs={12} sm={8} sx={{ width: '100%' }} >
          <MySearch />
        </Grid>

        <Grid item xs={12} sm={4} sx={{ width: '100%' }}
          justifyContent="flex-end" display="flex">
          <CategorySelect />
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ pb: '30px' }}>
        {isLoading ? [...new Array(4)].map(() => <Skeleton />)
          : products?.map((product: IProduct) =>
            <Grid
              item xs={12} sm={6} md={3}
              sx={{ display: 'flex', justifyContent: 'center' }}
              key={product.id}
            >
              <Cart
                product={product}
              />
            </Grid>
          )}
      </Grid>
      <Pagination
        size={width < 768 ? 'small' : 'medium'}
        page={currentPage}
        onChange={(e, p) => dispatch(setCurrentPageAction(p))}
        count={totalPage}
        color="primary" />
    </Container >
  )
}

export default Home