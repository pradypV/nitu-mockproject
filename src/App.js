import { ThemeProvider } from "@mui/material"
import theme from "./styles/theme";
import Layout from "./Components/common/Layout";
import HomePage from "./Pages/Home"
import ProductList from "./Pages/ProductList";
import CartPage from "./Pages/CartPage"
import AdminPage from "./Pages/AdminPage"
import SlugPage from "./Pages/ProductList/SlugPage";
import Login from './Pages/Login'
import { UIProvider } from "./context/ui";
import { CartProvider } from "./context/cartContext";
import { ProductProvider } from "./context/productContext";
import NavDrawer from "./Components/common/drawer";
import Container from '@mui/material/Container';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import React from "react";

function App() {
  const [auth, setAuth] = React.useState(sessionStorage.getItem("userToken"))
  return (
  <ThemeProvider theme={theme}>
  <Container maxWidth='xl'>
  <UIProvider>
  <ProductProvider>
  <CartProvider>
  <BrowserRouter>
  <Layout>
  <Routes>
  <Route index element={<HomePage />} />
  <Route path="/products" element={<ProductList />}/>
  <Route path="/products">
    <Route path=":slug" element={<SlugPage/>}/>
  </Route>
  <Route path="/cart" element={<CartPage />} />
  {/* <Route  path="/admin" element={auth ? <AdminPage />: <Login/>} /> */}
  <Route  path={sessionStorage.getItem("userToken") ? "/admin": "/login"} element={auth ? <AdminPage/>: <Login setAuth={setAuth}/>} />  
  </Routes>
  <NavDrawer/>
  </Layout>
  </BrowserRouter>
  </CartProvider>
  </ProductProvider>
  </UIProvider>
  </Container>
  </ThemeProvider>
  );
}

export default App;
