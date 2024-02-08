import { AppBar, Box, Toolbar, Typography, BottomNavigation } from '@mui/material';
import { FaPizzaSlice } from "react-icons/fa";
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import CartWidget from '../common/CartWidget';


export default function Navbar() {

  return (
    <Box>
      <AppBar>
        <Toolbar className='Navbar'>
        <Typography variant="h6">
        <FaPizzaSlice /> Pizza Logo
          </Typography>
          <BottomNavigation className='Options' showLabels sx={{ flexGrow: 1, backgroundColor: 'transparent' }}>
            <BottomNavigationAction label="Pizza" icon={<LocalPizzaIcon />} />
            <BottomNavigationAction label="Drinks" icon={<LocalDrinkIcon />} />
          </BottomNavigation>
          <CartWidget/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
