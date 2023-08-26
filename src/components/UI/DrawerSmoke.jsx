import React from 'react';
import {Drawer, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button} from '../../../node_modules/@mui/material/index';
// @ts-ignore
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
// @ts-ignore
import HomeIcon from '@mui/icons-material/Home';

const DrawerSmoke = () => {

    return (
        <Drawer
        sx={{
        width: 240 ,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 240 ,
            boxSizing: 'border-box',
        },
        }}
        variant="permanent"
        anchor="left"
        >
        <Toolbar />
        <Divider />
        <List>
            <ListItem key="ListItemHome" disablePadding>
            <ListItemButton>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary='Главная'/>
            </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem key="ListItemSmoke1" disablePadding>
            <ListItemButton>
                <ListItemIcon><AirOutlinedIcon/></ListItemIcon>
                <ListItemText primary='Расчет ДУ коридора'/>
            </ListItemButton>
            </ListItem>
            <ListItem key="ListItemSmoke2" disablePadding>
            <ListItemButton>
                <ListItemIcon><AirOutlinedIcon/></ListItemIcon>
                <ListItemText primary='Расчет ДУ помещения'/>
            </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem key="ListItemSmoke3" disablePadding>
            <ListItemButton>
                <ListItemIcon><AirOutlinedIcon/></ListItemIcon>
                <ListItemText primary='Расчет ПДУ ЛК'/>
            </ListItemButton>
            </ListItem>
            <ListItem key="ListItemSmoke4" disablePadding>
            <ListItemButton>
                <ListItemIcon><AirOutlinedIcon/></ListItemIcon>
                <ListItemText primary='Расчет ПДУ лифтовой шахты'/>
            </ListItemButton>
            </ListItem>
            <Divider/>

        </List>
        </Drawer>
    );
};

export default DrawerSmoke;