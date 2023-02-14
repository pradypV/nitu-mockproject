import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CartPageContainer, CartBreadcrumbContainer, BreadcrumbTitle, ProductImage, GrandTotalContainer, TextContainer} from '../../styles/cartpage';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useCartContext } from '../../context/cartContext'
import CartAmountToggle from '../../Components/cart/CartAmountToggle';
import { Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props,ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CartPage = () => {
const {cart, removeItem, handleDec, handleInc, total_price, total_item, clearCart} = useCartContext();
const discount = total_item>1 ? total_price*10/100 : 0 ;
const [open, setOpen] = React.useState(false);
const handleCheckout = () => {
  setOpen(true);
  clearCart()
}

const handleClose = () =>{
setOpen(false);
}
  return (
    <CartPageContainer>
    <CartBreadcrumbContainer>
    <BreadcrumbTitle>
    List of items added to cart
    </BreadcrumbTitle>
    </CartBreadcrumbContainer>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{fontWeight:'bold'}}>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price&nbsp;(per)</TableCell>
            <TableCell>Total Price</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell><Paper>
              <ProductImage src={row.image?row.image:'/images/banner.png'}/>
              </Paper></TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>
              <CartAmountToggle 
                amount={row.amount}
                handleInc={()=>handleInc(row.id)} 
                handleDec={()=>handleDec(row.id)} /></TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.amount * row.price}</TableCell>
              <TableCell><DeleteForeverIcon onClick={() => removeItem(row.id)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <GrandTotalContainer>
    <TextContainer>Sub-total: Rs.{parseFloat(total_price).toFixed(2)}</TextContainer> 
    <TextContainer>Discount: Rs.{Number((discount).toFixed(2))}</TextContainer>
    <TextContainer>Grand Total: Rs.{Number((total_price - discount).toFixed(2))}</TextContainer>
    </GrandTotalContainer>
    <Button variant='contained' onClick={handleCheckout}> Check Out</Button>
    <Snackbar open={open} autoHideDuration={6000}  anchorOrigin={{vertical:'top', horizontal:'right'}} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Checkout Success!
        </Alert>
      </Snackbar>
    </CartPageContainer>
  )
}

export default CartPage