import { Container, Toolbar } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLazyGetSingleProductsQuery } from '../store/redusers/dummApi'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Swiper from '../components/Swiper';

const SigneProduct = () => {

  const { id } = useParams<string>()
  const navigate = useNavigate()
  const [fetch, { data: product }] = useLazyGetSingleProductsQuery()

  useEffect(() => {

    fetch(id)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (

    <Container sx={{ mt: '80px', justifyContent: 'center', display: 'flex' }} maxWidth="sm" >

      <Card sx={{
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Swiper
          product={product}
        />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography gutterBottom variant="h5" component="div">
            {product?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            {product?.description}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product?.price} $
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Button size="small">Share</Button>
          <Button size="small" onClick={() => navigate(-1)}
          >Back</Button>
        </CardActions>
      </Card>
    </Container>
  )
}

export default SigneProduct