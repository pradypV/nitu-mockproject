import React from 'react'
import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import { BannerContainer, BannerImage, BannerContent,BannerTitle,BannerDescription} from "../../../styles/banner";
const Banner = () => {
const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <BannerContainer>
    <BannerImage src="/images/banner1.png" />
    <BannerContent>
    <Typography variant='h6'>Shopping Collection</Typography>
    <BannerTitle variant='h2'>
    New Product</BannerTitle>
    <BannerDescription variant="subtitle">
    Up to 50% off. Sale day makes you happy.
    Deals made especially for you.
    Limited-time offer – Hurry up!
    </BannerDescription>
    </BannerContent>
    </BannerContainer>
  )
}

export default Banner