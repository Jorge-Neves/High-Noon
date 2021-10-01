import React, {useEffect, useState} from "react";
import axios from "axios"
import AffirmationJSON from "../seeds/Affirmation.json"
import { LoggedUserConsumer} from "../context/loggedUser"

function Affirmations(){
    const [affirm, setAffirm] = useState(AffirmationJSON);
    
    useEffect(() => {
        async function randomAfirm() {
            const index = Math.floor(Math.random() * AffirmationJSON.length);
            const newRandomAffirm = AffirmationJSON[index];
            
         
          setAffirm(newRandomAffirm);
        };
          randomAfirm();

    },[])

    return(
    <>
        <h1>Affirmations</h1>
        <h2>{affirm.name}</h2>
    </>
    )
}

export default Affirmations;