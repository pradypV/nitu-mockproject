import React from 'react'
import { ListItemText, Divider, ListItemButton, ListItemIcon, Typography} from "@mui/material";
import { LayoutContainer, NavbarHeader, MyList } from "../../../styles/layout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from 'react-router';
import { useCartContext } from '../../../context/cartContext';
  
  export default function NavbarDesktop() {  
    const {total_item} =  useCartContext();
    let auth = sessionStorage.getItem("userToken");
    const navigate = useNavigate();
    return (
      <LayoutContainer>
      <NavbarHeader variant="h4">Logo</NavbarHeader>
        <MyList type="row">
          <ListItemButton  onClick={()=> navigate("/")}>
          <ListItemText primary="Home"/>
          </ListItemButton>
          <Divider orientation="vertical" flexItem />
          <ListItemButton onClick={()=> navigate("products")}> 
          <ListItemText primary="Products"/>
          </ListItemButton>
          <Divider orientation="vertical" flexItem />
          <ListItemButton onClick={()=> navigate("cart")}>
            <ListItemIcon>
              <ShoppingCartIcon/>
              <Typography>({total_item})</Typography>
            </ListItemIcon>
          </ListItemButton>
          <Divider orientation="vertical" flexItem />
          <ListItemButton onClick={()=> navigate( auth ? "admin" : "login")}>
            <ListItemIcon>
              <PersonIcon/>
            </ListItemIcon>
          </ListItemButton>
          <Divider orientation="vertical" flexItem />
        </MyList>
      </LayoutContainer>
    );
  }
