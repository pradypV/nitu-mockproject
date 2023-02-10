import React from 'react'
import { LayoutContainer, MyList} from "../../styles/layout";
import { Divider, ListItemButton,ListItemText, ListItemIcon, Typography} from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {

  return (
    <React.Fragment>
    <LayoutContainer >
    <MyList>
    <ListItemIcon>
        <Divider orientation="vertical" flexItem />
        &nbsp;
        <a href='https://youtube.com/' target='_blabk'><YouTubeIcon/></a>
        &nbsp;
        <Divider orientation="vertical" flexItem />
        &nbsp;
        <a href='https://facebook.com/' target='_blabk'><FacebookIcon/></a>
        &nbsp;
        <Divider orientation="vertical" flexItem />
        &nbsp;
        <a href='https://instagram.com/' target='_blabk'> <InstagramIcon/></a>
        &nbsp;
        <Divider orientation="vertical" flexItem />
        &nbsp;
        <a href='https://twiter.com/' target='_blabk'><TwitterIcon/></a>
        &nbsp;
        <Divider orientation="vertical" flexItem />
        &nbsp;
        <a href='https://linkedin.com/' target='_blabk'><LinkedInIcon/></a>
        &nbsp;
        <Divider orientation="vertical" flexItem />
    </ListItemIcon>
    <Typography sx={{textAlign:'center'}}> © 2022 Copyright: <a href='https://mui.com/' target='_blank'>mui.com</a></Typography>
    </MyList>
    </LayoutContainer>
    </React.Fragment>
  )
}

export default Footer