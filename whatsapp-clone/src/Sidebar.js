import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton} from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Emoji_u263a.svg/1200px-Emoji_u263a.svg.png"/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
