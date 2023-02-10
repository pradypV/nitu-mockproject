import { createTheme } from "@mui/material/styles";
import "@fontsource/open-sans";

export const DrawerWidth = 250;

export const Colors = {
  primary: "#D23F57",
  primaryhover:'#E3364E',
  secondary: "#0F3460",
  secondaryhover:'#0F2860',
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dim_grey: "#696969",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_gray: "rgb(230,230,230)",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    
  },
  
  typography: {
    allVariants: {
      fontFamily: 'Open Sans,sans-serif'
    },
  },  

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },

    MuiListItemButton:{
      styleOverrides: {
        root: {
          justifyContent: "center",
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          color: Colors.secondary,
        }
      }
    },

    MuiListItemIcon:{
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          color: Colors.secondary,
        }
    }
  },

    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
      styleOverrides: {
        tooltip: {
          background: Colors.primary,
        },
        arrow: {
          color: Colors.primary,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: DrawerWidth,          
          color: Colors.secondary,
          borderRadius: '0px 100px 0px 0px',
          borderRight: `0.2px solid ${Colors.primary}`
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: Colors.primaryhover
        }
      }
    },
    MyShopButton: {
      styleOverrides: {
        root: {
          color: Colors.white,
        },
        primary: {
          background: Colors.primary,
          "&:hover": {
            background: Colors.primaryhover
          },
        },
        secondary: {
          background: `${Colors.secondary}`,
          "&:hover": {
            background: Colors.primaryhover
          },
        },
      },
    },
  },
});

export default theme;

