import React from 'react'
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";
import { Colors } from "../../styles/theme";
const CartAmountToggle = ({amount, handleInc, handleDec}) => {
  return (
    <Box display="flex">
        <IconButton
          sx={{
            borderRadius: 0,
            background: `${Colors.secondary}`,
          }}
          onClick={() => handleDec()}
        >
          <RemoveIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            border: `1px solid ${Colors.secondary}`,
            p: 2,
          }}
        >
          {amount}
        </Typography>
        <IconButton
          sx={{
            borderRadius: 0,
            background: `${Colors.secondary}`,
          }}
          onClick={() => handleInc()}
        >
          <AddIcon />
        </IconButton>
      </Box>
  )
}

export default CartAmountToggle