import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage";

// TODO: Add missing tabs below
export default function TabNav() {

    const panes = [
        {
            menuItem: { key: 'home', icon: 'home', content: 'Home Page'},
            render: () => <Tab.Pane> <NavLink exact to="/" activeClassName="activeNavButton"/><WelcomePage/></Tab.Pane>
        },
        {
            menuItem: { key: 'characters', icon: 'users', content: 'Characters'},
            render: () => <Tab.Pane><NavLink exact to='/characters' activeClassName="activeNavButton"/></Tab.Pane>
        },
        {
            menuItem: { key: 'locations', icon: 'map outline', content: 'Locations'},
            render: () => <Tab.Pane><NavLink exact to='/locations' activeClassName="activeNavButton"/></Tab.Pane>
        },
        {
            menuItem: { key: 'episodes', icon: 'video', content: 'Episodes'},
            render: () => <Tab.Pane><NavLink exact to='/episodes' activeClassName="activeNavButton"/></Tab.Pane>
        }  
    ]

    return(
        <Menu><Tab panes = {panes}/></Menu>
        
    );
};
