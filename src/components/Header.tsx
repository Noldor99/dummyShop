import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import ButtonHeader from './UI/ButtonAdd/ButtonHeader';
import { useTypedSelector } from '../hook/useTypedSelector';



const drawerWidth = 240;

const navItems = [{ nameLink: 'Home', link: '' }, { nameLink: 'About', link: 'about' }];

const Header = (props: any) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const isMounted = React.useRef(false);

  const { items } = useTypedSelector((state) => state.cart)

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  if (pathname === '/auth' || pathname === '/userdetails/:id') return

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.nameLink} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate(item.link)}>
              <ListItemText primary={item.nameLink} />
            </ListItemButton>
          </ListItem>
        ))}
        {pathname !== '/basket' && items.length !== 0 && <ButtonHeader />}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map((item) => (
              <Button key={item.nameLink} sx={{ color: '#ffffff' }}
                onClick={() => navigate(item.link)}>
                {item.nameLink}
              </Button>
            ))}
            {pathname !== '/basket' && items.length !== 0 && <ButtonHeader />}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header