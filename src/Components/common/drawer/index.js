import React from "react";
import {Divider,Drawer,List,ListItemButton,ListItemText,styled} from "@mui/material";
import { useUIContext } from "../../../context/ui";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerCloseButton } from "../../../styles/layout";
import { Colors } from "../../../styles/theme";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;


export default function NavDrawer() {
  const { drawerOpen, setDrawerOpen } = useUIContext();

  return (
    <React.Fragment>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "2rem",
              color: Colors.secondary,
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <MiddleDivider />
        </List>
      </Drawer>
    </React.Fragment>
  );
}
