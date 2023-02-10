import React, {useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Typography, Box, Button, Grid, Paper} from "@mui/material";
import { ProductDetailContainer ,ProductDetailTitleWrapper,ProductDetailTitle,ProductDetailWrapper, Product, ProductImage, ProductDetailInfoWrapper,
  ProductDetailButtonWrapper, ButtonLink} from "../../styles/product";
  import { useCartContext } from "../../context/cartContext";
function SlugPage(){
  const {addToCart} = useCartContext();
    let { slug } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${slug}`).then((response) => {
          setProduct(response.data);
        });
      }, []);
    
      if (!product) return null;

  const  handleAddToCart = () => {
    addToCart(product)
  }
  console.log('slug', slug)
  console.log('product Detail', product)
      return(
          <ProductDetailContainer>
          <ProductDetailTitleWrapper>
          <ProductDetailTitle>{product.title}</ProductDetailTitle>
          </ProductDetailTitleWrapper>
        <ProductDetailWrapper>
          <Product>
          <Grid container spacing={5}>
          <Grid item>
          <Paper elevation={3}>
          <ProductImage src={product.image?product.image:'/images/banner.png'}/>
          </Paper>
          </Grid>
          </Grid>
          </Product>
          <ProductDetailInfoWrapper>
            <Typography variant="h4">
            {product.title}
            </Typography>
            <Typography variant="body">
            {product.description}
            </Typography>
            <Typography variant="body">
            Price: Rs.{product.price}
            </Typography>
            <ProductDetailButtonWrapper>
              <Button variant="contained" color='secondary' onClick={()=>handleAddToCart()}>Add to Cart</Button>
              <ButtonLink href="/products">
              <Button variant="contained" color='primary'>View All</Button>
              </ButtonLink>
              </ProductDetailButtonWrapper>
            </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
        </ProductDetailContainer>
      );
}
export default SlugPage;