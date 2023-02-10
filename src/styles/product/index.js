import styled from "@emotion/styled";
import {Typography, Link} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../theme";


export const Product = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: "3rem",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
  
}));
export const ProductTop = styled(Typography)(() => ({
  padding: "8px",
  flexGrow: 1,
  fontSize: "3rem",
  fontWeight:'300px',
  marginBottom:'20px',
  color: Colors.secondary,
}));

export const ButtonLink = styled(Link)(({ href, theme }) => ({
  href: `url(${href})`,
  margin:'5px',
  textDecoration:'none'
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "300px",
  height:"300px",
  [theme.breakpoints.down("md")]: {
    width: "200px",
    height: "200px",

  },
  [theme.breakpoints.down("sm")]: {
    width: "200px",
    height: "200px",
  },
}));

export const ProductTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "1rem",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "0.5em",
  },
}));

export const ProductPrice = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "1rem",
  fontStyle:'italic',
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "0.5em",
  },
}));


export const ProductDetailContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: "3rem",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
  
}));

export const ProductDetailTitleWrapper = styled(Box)(({ theme }) => ({
  width:'100%',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:Colors.primary, 
  flexDirection: "column",
  marginBottom: "2rem",
}));
export const ProductDetailTitle = styled(Typography)(() => ({
  padding: "8px",
  flexGrow: 1,
  fontSize: "2rem",
  fontWeight:'300px',
  color: Colors.secondary,
}));

export const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  width:'100%',
  display: "flex",
}));


export const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5,
  margin:'20px'
}));

export const ProductDetailButtonWrapper = styled(Box)(() => ({
  marginTop:'4px',
  display: "flex",
  alignItems:"center",
}));