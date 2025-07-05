import React, { useState, useEffect } from "react";
function Page1(){
     const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect runs"); 

        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval); 
    }, []); 
    return(<>
      <p>HELLO FORM THE PAGE1</p>
    </>);
}
export default Page1;
// setTimeout(() => {
    
// }, timeout);