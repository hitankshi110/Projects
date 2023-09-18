import React, { useState } from "react";
//Stateful
//const FirstFnCompont = ()=><div><h2><center>My Function Component</center></h2></div>
const Stateful = ()=>{
    const [Name, setName] = useState('')
   
    return(
        <div>
            <center>

            <h2>Onchange Event (Stateful)</h2>
            Name : <input type="text" onChange={(e)=>{setName(e.target.value)}} /> <br />

            My Name is :{Name} <br />

            

            </center>
        </div>
    )


}
export default Stateful;