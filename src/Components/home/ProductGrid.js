import React,{useState} from 'react'
import { useTheme } from "@mui/material/styles";
import {Grid, Paper, useMediaQuery , Button} from "@mui/material";
import {Product,ProductTop, ProductImage, ButtonLink, ProductTitle, ProductPrice} from '../../styles/product';
import { useCartContext } from '../../context/cartContext';
import { useProducContext } from '../../context/productContext';
const ProductGrid = ({pageslug}) => {
  const {products} = useProducContext();
  const {addToCart} = useCartContext();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
  
    const [productData, setproductData] = useState(products.slice(0,12));

    const  handleAddToCart = (index) => {
      addToCart(products[index])
    }

  return (
    <Product>
    <ProductTop>Our Products 
    &nbsp;
    {pageslug === "home"?
    <ButtonLink href='/products'>
    <Button variant='contained' color='primary'>View All</Button>
    </ButtonLink>
    :''}
    </ProductTop>
    <Grid container spacing={5}>
    {pageslug === "products" ?
    <React.Fragment>
    {productData? productData.map((products,index)=>{
      return(
      <Grid item xs={3} key={index}>
      <Paper elevation={3}>
      <ProductImage src={products.image?products.image:'/images/banner.png'} />
      <ProductTitle>{products.title}</ProductTitle>
      <ProductPrice>Price: Rs.{products.price}</ProductPrice>
      <Button variant='contained' color='secondary' onClick={()=>handleAddToCart(index)}>Add To Cart</Button>
      <ButtonLink href={"/products/"+products.id}>
      <Button variant='contained' color='primary'>View Detail</Button>
      </ButtonLink>
      </Paper>
      </Grid>
      )
    }):null}
    </React.Fragment>
    :
    <React.Fragment>
    {productData? productData.slice(0,4).map((products,index)=>{
      return(
      <Grid item xs={3} key={index}>
      <Paper elevation={3}>
      <ProductImage src={products.image?products.image:'/images/banner.png'} />
      <ProductTitle>{products.title}</ProductTitle>
      <ProductPrice>Price: Rs.{products.price}</ProductPrice>
      <Button variant='contained' color='secondary' onClick={()=>handleAddToCart(index)}>Add To Cart</Button>
      <ButtonLink href={"/products/"+products.id}>
      <Button variant='contained' color='primary'>View Detail</Button>
      </ButtonLink>
      </Paper>
      </Grid>
      )
    }):null}
    </React.Fragment>
    }
    </Grid>
    {pageslug === "products"?
    <ButtonLink>
    <Button variant='contained' color='primary' onClick={()=> setproductData(products)}>View More</Button>
    </ButtonLink>
    :''}
    </Product>  )
}

export default ProductGrid