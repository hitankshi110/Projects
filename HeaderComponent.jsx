import React, { useState } from "react";

const HeaderComponents = ()=>{
    const [Name, setName] = useState('AMAZON')
    
    return(
        <div>
        <header>
            <center>
            
            {Name}<br />
            </center>
            </header>
            </div>
       
    )

}

export default HeaderComponents;