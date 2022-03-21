import { createTheme } from '@mui/material/styles'

const primary = '#401B60' // Violet
const secondary = '#FBB03B' // Golden
const background = '#ffffff' // White
const background2 = '#2D323F' // Timeline Background
const error = '#FF0000'
const black = '#000'

const breakpoints = {
  // for responsiveness
  values: {
    xs: 0,
    xms: 380,
    sm: 600, // Phone
    md: 900, // Tablet/Laptop
    lg: 1200, // Desktop
    xl: 1536
  }
}

const theme = createTheme({
  breakpoints: breakpoints,
  palette: {
    primary: {
      main: primary,
      contrastText: background
    },
    secondary: {
      main: secondary,
      contrastText: background
    },
    white: {
      main: background,
      contrastText: primary
    },
    background: {
      default: background2,
      contrastText: background
    },
    background2: {
      main: background,
      contrastText: background2
    },
    badge: {
      main: background,
      contrastText: error
    },
    black: {
      main: black,
      contrastText: background
    }
  },
  components: {
    MuiBadge: {
      styleOverrides: {
        badge: {
          borderRadius: '4px',
          // padding: "5px 10px",
          // color: error,
          fontWeight: 'bold'
          // background: background,
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          marginLeft: '0px'
        }
      }
    }
  },
  typography: {
    fontFamily: "'Rajdhani', sans-serif"
  }
})

theme.typography.header1 = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: black,
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px'
  }
}

theme.typography.login1 = {
  fontSize: '36px',
  fontWeight: '700',
  color: primary,
  [theme.breakpoints.down('md')]: {
    fontSize: '24px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px'
  }
}
theme.typography.legend = {
  fontSize: '16px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px'
  }
}
theme.typography.tileTime = {
  fontSize: '0.7rem',
  fontWeight: 'lighter',
  lineHeight: '0.7rem'
}

theme.typography.normal = {
  fontSize: '16px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px'
  }
}

theme.typography.cardHeader = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: black,
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px'
  }
}

theme.typography.cardLocation = {
  fontSize: '12px',
  // color: ,
  [theme.breakpoints.down('sm')]: {
    fontSize: '8px'
  }
}
// theme.typography.cardLocation1 = {
//   fontSize: "12px",
//   fontWeight: "bold",
//   // color: ,
//   [theme.breakpoints.down("sm")]: {
//     fontSize: "8px",
//   },
// };
theme.typography.tabText = {
  fontSize: '18px',
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px'
  }
}

export default theme

/**
 * Theme component for whole application.
 *
 * createed by noman :)
 *
 */
