import logo from '../Images/Лого.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const menuItems = [
        { text: 'Как покупать', path: '/HowToBuy' },
        { text: 'Распродажи', path: '/Sales'},
        { text: 'Цены'},
        { text: 'Помощь'},
        { text: 'Бонусы'},
        { text: 'Блог'},
        { text: 'Магазины'},
    ];

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {menuItems.map((text, index) => (
                    <ListItem key={text.text} disablePadding>
                        <ListItemButton component={Link} to={text.path} onClick={toggleDrawer(false)}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div className='p-5 flex justify-between items-center'>
            <img src={logo} alt="" className='w-[150px] md:w-auto' />
            <div className='hidden md:flex items-center'>
                <Link to={"/HowToBuy"}>
                    <Button sx={{ color: "#1F2428", fontSize: "13px", fontWeight: "600" }}>Как покупать</Button>
                </Link>
                <Link to={"/Sales"}>
                <Button sx={{ color: "#1F2428", fontSize: "13px", fontWeight: "600" }}>Распродажи</Button>
                </Link>
                <Button sx={{ color: "#1F2428", fontSize: "13px", fontWeight: "600" }}>Цены</Button>
                <Button sx={{ color: "#1F2428", fontSize: "13px", fontWeight: "600" }}>Помощь</Button>
                <Button sx={{ color: "#1F2428", fontSize: "13px", fontWeight: "600" }}>Бонусы</Button>
                <Button sx={{ color: "#1F2428", fontSize: "13px", fontWeight: "600" }}>Блог</Button>
                <Button sx={{ color: "#1F2428", fontSize: "13px", fontWeight: "600" }}>Магазины</Button>
            </div>
            <div className='hidden md:flex items-center'>
                <div>
                    <PersonOutlineOutlinedIcon />
                    <Button sx={{ color: "#1F2428", fontSize: "13px", fontWeight: "600" }}>Вход</Button>
                </div>
                <Button variant='contained' sx={{ backgroundColor: "#00D981", color: "white", fontSize: "13px", fontWeight: "700", borderRadius: "36px" }}>Связаться с нами</Button>
            </div>
            <div className='md:hidden'>
                <Button onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </Button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </div>
        </div>
    )
}
