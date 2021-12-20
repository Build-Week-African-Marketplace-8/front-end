import React from "react";
import {Link} from 'react-router-dom'

const initialProfile = {
  username: "",
};

const EditProfile = () => {
  return <div>
    <h1>Profile Component</h1>
    <p>$username</p>
    <Link to='/'> 
      <button id='edit-info'>Edit info</button> 
    </Link>
    links to home- not sure how to render edit username/upload photo
    <form>
  <label>
    Update username:
    <input type="text" name="new username" />
  </label>
  <input type="submit" value="Submit" />
</form>
  </div>;
};

export default EditProfile;
