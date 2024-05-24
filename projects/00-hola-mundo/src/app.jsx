import React from 'react';
import './App.css'; 
import {TwitterFollowCard} from './TwitterFollowCard';
export function App(){
    const formatUserName = (username) => `@${username}`;
    return(
        <div className = "App">
            <TwitterFollowCard formatUserName={formatUserName} username="luchoaquinopla" name="Lucho Aquino" isfollowing />
            <TwitterFollowCard formatUserName={formatUserName} username="gonza.mata.xd.2003" name="Gonzalo Mata" isfollowing/>
            <TwitterFollowCard formatUserName={formatUserName} username="GuglielMORE.debora.hermanas" name="Santiago Guglielmone" isfollowing={false    } />
            
        </div>
    )
}

