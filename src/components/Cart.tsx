import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import ButtonAdd from './UI/ButtonAdd/ButtonAdd';
import { IProduct } from '../models/models';


interface CartProps {
  product: IProduct
}

const Cart: React.FC<CartProps> = ({ product }: CartProps) => {

  const navigate = useNavigate()

  return (
    <Card sx={{
      maxWidth: 345,
      display: 'flex',
      flexDirection: 'column',

    }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={product.thumbnail}
      />
      <CardContent sx={{ flex: '1 0 auto', maxHeight: '200px', overflow: 'auto' }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          {product.description}
        </Typography>
      </CardContent>
      <CardContent sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.price} $
        </Typography>
        <ButtonAdd product={product} />
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button size="small">Share</Button>
        <Button size="small"
          onClick={() => navigate(`signeproduct/${product.id}`)
          }
        >Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default Cart