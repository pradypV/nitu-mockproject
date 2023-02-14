import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AdminPageContainer, AdminBreadcrumbContainer, BreadcrumbTitle, ProductImage, FormPagePaper } from '../../styles/adminpage';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Button, TablePagination, Typography, Grid, TextField } from '@mui/material';
import { useProducContext } from '../../context/productContext';

const AdminPage = () => {
  const { products, addNewProduct, editProduct, deleteProduct } = useProducContext();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [showEdit, setShowEdit] = React.useState(false);
  const initialState = {
    id:'',
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
  }
  const [state, setState] = useState(initialState)
  const handleInputChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };
  const handleAddNewProduct = (data) => {
    addNewProduct(data)
    setState(initialState);
  }

  const handleEdit = (id) => {
    (products.map((data)=> {
      if(data.id === id){
        return(
          setShowEdit(true),
          setState(data)
        )
      }
    }))
  }
 


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <AdminPageContainer>
      <AdminBreadcrumbContainer>
        <BreadcrumbTitle>
          List of Products
        </BreadcrumbTitle>
      </AdminBreadcrumbContainer>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ fontWeight: 'bold' }}>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price&nbsp;(per)</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell><Paper>
                    <ProductImage src={row.image} />
                  </Paper></TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell><EditIcon onClick={() => handleEdit(row.id)}/></TableCell>
                  <TableCell><DeleteForeverIcon onClick={() => deleteProduct(row.id)} /></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Typography variant='h6'> ADD New Product</Typography>
      <Grid>
        <FormPagePaper elevation={10} >
          <TextField
            variant='standard'
            label='Title'
            placeholder='ADD Title'
            fullWidth
            required
            name='title'
            value={state.title}
            onChange={handleInputChange}
          ></TextField>
          <TextField
            variant='standard'
            label='Price'
            placeholder='ADD Price'
            fullWidth required
            name='price'
            value={state.price}
            onChange={handleInputChange}
          ></TextField>
          <TextField
            variant='standard'
            label='Description'
            placeholder='ADD Description'
            fullWidth required
            name='description'
            value={state.description}
            onChange={handleInputChange}
          ></TextField>
          <TextField
            variant='standard'
            label='Image'
            placeholder='ADD Image URl'
            fullWidth required
            name='image'
            value={state.image}
            onChange={handleInputChange}
          ></TextField>
          <TextField
            variant='standard'
            label='Category'
            placeholder='ADD Product Category'
            fullWidth required
            name='category'
            value={state.category}
            onChange={handleInputChange}
          ></TextField>
        </FormPagePaper>
      </Grid>
      {showEdit ? 
        <Button variant='contained' onClick={() => (editProduct(state), setState(initialState), setShowEdit(false))}> Edit Product</Button>
        :
        <Button variant='contained' onClick={() => handleAddNewProduct(state)}> Add New Product</Button>
      }
    </AdminPageContainer>
  )
}

export default AdminPage