import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './SideNav.css';
import { SearchOutlined } from '@material-ui/icons';
import SidenavChat from './SidenavChat';
function SideNav() {
    return (
        <div className="sidenav">
            <div className="sidenavheader">
                <Avatar/>
                <div className="sidenavheaderright">
                    <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                 
                    <IconButton>
                <ChatIcon/>
                    </IconButton>

                    <IconButton>
                <MoreVertIcon />
                    </IconButton>
               


                </div>
            </div>
        
            <div className="sidenavsearch">
            <SearchOutlined/>
            <div className="sidenavsearchcontainer">

            <input placeholder="Search or start new chat" type="text"/>
            </div>
            </div>

            <div className="sidenavchats">
            <SidenavChat addnewchat/>
            <SidenavChat/>
            <SidenavChat/>
      
            
            </div>
        </div>
    );
}

export default SideNav
