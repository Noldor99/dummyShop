import { useDispatch } from 'react-redux'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Box, Container } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {
  addItemAction,
  clearItemsAction,
  minusItemAction,
  removeItemAction
} from '../store/redusers/cartSlice';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import { Divider, Toolbar, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useTypedSelector } from '../hook/useTypedSelector';
import CartEmpty from '../components/CartEmpty';

const Basket = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { items, totalPrice } = useTypedSelector((state) => state.cart)
  console.log(items)

  const totalCount = items.reduce((sum, item) => {
    return sum + item.count;
  }, 0);

  if (!items.length) return <CartEmpty />

  return (
    <Container sx={{ minHeight: '600px' }}>
      <Toolbar />
      <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', margin: '0 auto' }}>
        {items.map((item) =>
          <>
            <Typography variant="h6" component="div"
              sx={{ display: 'flex', justifyContent: 'center' }}
            > {item.title}</Typography>
            <ListItem key={item.id} sx={{ mb: '60px' }}
              secondaryAction={
                <>

                  <IconButton aria-label="Add"
                    onClick={() => dispatch(addItemAction(item))}
                  >
                    <ControlPointIcon />
                  </IconButton>
                  <span>{item.count}</span>
                  <IconButton aria-label="Remove"
                    onClick={() => dispatch(minusItemAction(item.id))}
                  >
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon
                      onClick={() => dispatch(removeItemAction(item.id))}
                    />
                  </IconButton>
                </>
              }
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={item.thumbnail} />
              </ListItemAvatar>
              <ListItemText secondary={`${item.price} $`} />
            </ListItem>
          </>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '60px' }}>
          <Typography>Total basket: {totalCount}</Typography>
          <Typography>Order prise: {totalPrice} $</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button size="small" onClick={() => dispatch(clearItemsAction())}
          ><DeleteOutlineIcon /> Clear cart</Button>
          <Button size="small" onClick={() => navigate(-1)}
          >Back</Button>
        </Box>
      </List>
    </Container>
  )
}

export default Basket