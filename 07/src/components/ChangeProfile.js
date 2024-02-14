import { useContext, useState } from "react";
import { AppContext } from "../App"


export const ChangeProfile = (props) => {
    const {setUsername} = useContext(AppContext);
    const [newUsername,setnewUsername] = useState("");
    return (
        <div>
            <input onChange={(event) => {setnewUsername(event.target.value)}}/>
            <button
             onClick={()=>
                {setUsername(newUsername);
             }}
            > 
             Change Username 
            </button>
        </div>
    )
};