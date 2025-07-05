import React from "react";
import "./Urls.css";
 import { useState } from "react";
function Urls() {
    const [url,setUrl]=useState();
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User entered URL:", url);
  };
    return(<>
       <p id="first">Welcome to all the pages of url</p>
       <form action="">
        <label htmlFor="">Enter URl:
      <input type="url" name="url" placeholder="Type..Url"  value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          style={{ padding: "8px", width: "300px", marginRight: "10px" }}/></label>
      <button type="submit">Submit</button>
      </form>
          <p>Current Url:{url}</p>
    </>);
}
export default Urls;
