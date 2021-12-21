import React,{useState} from "react";
import {Link} from 'react-router-dom'

const initialProfile = {
  username: "",
  file:'',
  profilePicture:'',
  isEditing: false
};

const EditProfile = () => {
  const [values,setValues] = useState(initialProfile);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleEdit = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      isEditing:!values.isEditing
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      isEditing: false
    })
    console.log(values)
  }

  const handleUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setValues({
        ...values,
        file: file,
        profilePicture: reader.result
      });
    }
    reader.readAsDataURL(file);
    
  }
  
  return (
    <div>
      <h2>Username: {values.username}</h2>
      <img className="ui medium circular image" src={values.profilePicture}/>
      <button className="btn" onClick={handleEdit}>Edit Profile</button>

      {
        values.isEditing && <form onSubmit={handleSubmit}>
          <label>Edit username:</label>
          <input
            name="username"
            type="text"
            value={values.username}
            onChange={handleChange}
          />

          <label>Edit Profile picture</label>
          <input
            type="file"
            name="profilePicture"
            onChange={handleUpload}
          />
          <button className="btn">Submit</button>
        </form>
      }
    </div>
  )
};

export default EditProfile;
