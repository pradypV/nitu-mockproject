import styled from "@emotion/styled";
import { Grid ,Paper, Avatar} from "@mui/material";
import { Colors } from "../theme";

export const LoginPagePaper = styled(Paper)(() => ({
    padding:'20px',
    height:'50vh',
    width:'380px',
    margin:'20px auto'
  }));

  export const TextIconWrapper = styled(Grid)(() => ({
    marginTop:'1rem',
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginBottom:'1rem',  
}));

export const AvatarC = styled(Avatar)(() => ({
    background: Colors.primary
}));
