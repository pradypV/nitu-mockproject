import React, { useState } from 'react'
import { Grid, TextField, Button} from '@mui/material'
import { LoginPagePaper, TextIconWrapper, AvatarC} from '../../styles/login'
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props,ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = ({setAuth}) => {
    const  naviagte = useNavigate();
    const initialState = {
        username:'',
        password:'',
    }

    const [state, setState] = useState(initialState)
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState(false);


    const handleInputChange = event => {
        setState({
          ...state,
          [event.target.name]: event.target.value
        });
      };
    
    

    const handleSubmit = async() => {
        try {
        const res = await axios.post("https://fakestoreapi.com/auth/login", state);
        setAuth(res.data.token);
        sessionStorage.setItem("userToken", res.data.token)
        naviagte(res.data.token ? '/admin':'')
        }
        catch(err){
          setError("Invalid Credential")
          setOpen(true)
        }
    }
  
    const handleClose = () =>{
      setOpen(false);
      }  
  return (
    <Grid>
    <LoginPagePaper elevation={10} >
        <TextIconWrapper>
        <AvatarC ><LockIcon/></AvatarC>
        <h2>Sign In</h2>
        </TextIconWrapper>
        <TextField  
            variant='standard' 
            label = 'Username' 
            placeholder='Enter Username' 
            fullWidth 
            required
            name='username'
            value={state.username}
            onChange={handleInputChange}
        ></TextField>
        &nbsp;
        &nbsp;
        <TextField 
            variant='standard' 
            label = 'Password' 
            type='password' 
            placeholder='Enter Password' 
            fullWidth required
            name='password'
            value={state.password}
            onChange={handleInputChange}
        ></TextField>
        <TextIconWrapper>
        <Button variant='contained' onClick={()=> handleSubmit()}>SIGN IN</Button>
        </TextIconWrapper>
    </LoginPagePaper>
    <Snackbar open={open} autoHideDuration={6000}  anchorOrigin={{vertical:'top', horizontal:'right'}} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Grid>
  )
}

export default Login