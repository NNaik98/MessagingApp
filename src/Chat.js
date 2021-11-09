import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import MoreVert from '@material-ui/icons/MoreVert';
import React,{useEffect,useState} from 'react';
import "./Chat.css";

function Chat() {
    
const [randomava,setrandomava] = useState("");
    
useEffect(() => {
      setrandomava(Math.floor(Math.random() * 5000));
    }, []);
    
    return (
        <div className="chat">
            <div className="chatheader">
            <Avatar src={`https://avatars.dicebear.com/api/human/${randomava}.svg`}/>
           

            <div className="chatheaderinfo">
                <h3>Room Name</h3>
                <p>Last seen at...</p>
            </div>

<div className="chatheaderright">
<IconButton>
<SearchOutlined/>
</IconButton>
<IconButton>
<AttachFile/>
</IconButton>
<IconButton>
   <MoreVert/> 
</IconButton>
</div>
</div>
            <div className="chatbody">
            <p className="chatmessage"><span className="chatname">Naik</span>Hello
            </p>
        
        </div>
        <div className="chatfooter">
            
        
        </div>
        
        </div>
    )
}

export default Chat
