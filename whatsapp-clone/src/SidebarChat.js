import React from 'react'
import {Avatar} from '@material-ui/core'
import "./SidebarChat.css"

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_info">
                <h2>Room Name</h2>
                <p>Last message from Room</p>
            </div>
        </div>
    )
}

export default SidebarChat
