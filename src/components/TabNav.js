import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {

    const panes = [
        {
            menuItem: { key: 'home', icon: 'home', content: 'Home Page'},
            render: () => <Tab.Pane> <NavLink exact to="/" activeClassName="activeNavButton"/></Tab.Pane>
        },
        {
            menuItem: { key: 'characters', icon: 'users', content: 'Characters'},
            render: () => <Tab.Pane><NavLink to='/characters' activeClassName="activeNavButton"/></Tab.Pane>
        }
        
    ]

    return(
        <Menu>
            <Tab panes = {panes}/>
            <Tab.Pane>
                <NavLink to="/locations" activeClassName="activeNavButton">
                    <Icon name='map outline'/>
                    Locations
                </NavLink>
            </Tab.Pane>
            <Tab.Pane>
                <NavLink to="Episodes" activeClassName="activeNavButton">
                    <Icon name='video'/>
                    Episodes
                </NavLink>
            </Tab.Pane>
        </Menu>
    );
};
