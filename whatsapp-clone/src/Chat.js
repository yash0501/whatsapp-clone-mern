import React from 'react'
import "./Chat.css"
import {Avatar, IconButton} from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFile from '@material-ui/icons/AttachFile'
import { InsertEmoticon } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic'

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">Motiiii....</span>
                    This is a message
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat_receiver chat_message">
                    <span className="chat_name">Motiiii....</span>
                    This is a message
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat_message">
                    <span className="chat_name">Motiiii....</span>
                    This is a message
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>

            <div className="chat_footer">
                <InsertEmoticon />
                <form action="">
                    <input type="text" placeholder="Type a message..."/>
                    <button type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
