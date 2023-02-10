import { LayoutContainer, NavbarHeader } from "../../../styles/layout";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useUIContext } from "../../../context/ui";

export default function NavbarMobile() {
  const { setDrawerOpen } = useUIContext();

  return (
    <LayoutContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <NavbarHeader textAlign={"center"} variant="h4">
      logo      
      </NavbarHeader>
    </LayoutContainer>
  );
}
