import styled from "@emotion/styled";
import {Typography, Paper} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../theme";

export const AdminPageContainer = styled(Box)(({ theme }) => ({
    marginTop: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "3rem",
  }));
  
  export const AdminBreadcrumbContainer = styled(Box)(({ theme }) => ({
    width:'100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:Colors.primary, 
    flexDirection: "column",
    marginBottom: "2rem",
  }));
  
  export const BreadcrumbTitle = styled(Typography)(() => ({
    padding: "8px",
    flexGrow: 1,
    fontSize: "2rem",
    fontWeight:'300px',
    color: Colors.secondary,
  }));

  export const ProductImage = styled("img")(({ src}) => ({
    src: `url(${src})`,
    width: "100px",
    height:"100px",
  }));

  export const FormPagePaper = styled(Paper)(() => ({
    padding:'20px',
    height:'30vh',
    width:'380px',
    margin:'20px auto'
  }));