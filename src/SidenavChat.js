import React, {useEffect,useState} from 'react';
import { Avatar } from '@material-ui/core';
import './SidenavChat.css' ;


function SidenavChat({ addnewchat }) {

const [randomava,setrandomava] = useState("");
    
useEffect(() => {
      setrandomava(Math.floor(Math.random() * 5000));
    }, []);

    const createchat = () => {
        const name = prompt("Please enter name for chat");
        if (name){
            //database
        }
    };

    return !addnewchat ? (
        <div className="sidenavchat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${randomava}.svg`}/>
            <div className="sidenavchatinfo">
                <h2>
                    Room name
                </h2>
                <p>
                    Last message...
                </p>
            </div>
        </div>
    ):(
        <div onClick={createchat} className="sidenavchat">
            <h2>Add new chat</h2>
        </div>
    )
}

export default SidenavChat
