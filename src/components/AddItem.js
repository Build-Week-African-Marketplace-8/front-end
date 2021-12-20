import React, { useState } from "react";

const initialValues = {
  name: "",
  description: "",
  price: "",
  commoditycat: "",
  subcategory: "",
  commoditycountry: "",
  commoditymarket: "",
};

const AddItem = () => {
  const [item, setItem] = useState(initialValues);

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Add Item</h1>
      <form>
        <h2>
          <label>Name:</label>
        </h2>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
        />
        <h2>
          {" "}
          <label>Description:</label>
        </h2>
        <input
          type="text"
          name="description"
          value={item.description}
          onChange={handleChange}
        />
        <h2>
          <label>Price:</label>
        </h2>
        <input
          type="text"
          name="price"
          value={item.price}
          onChange={handleChange}
        />
        <h2>
          <label>Commidity Category:</label>
        </h2>
        <select name="commoditycat">
          <option value=""></option>
          <option value="Animal Products">Animal Products</option>
          <option value="Fruits">Fruits</option>
          <option value="Seeds and Nuts">Seeds and Nuts</option>
          <option value="Vegetables">Vegetables</option>
        </select>
        <h2>
          <label>Subcategory:</label>
        </h2>
        <select name="subcategory">
          <option value=""></option>
          <option value="Animal Products - Other">
            Animal Products - Other
          </option>
          <option value="Livestock">Livestock</option>
          <option value="Poultry">Poultry</option>
          <option value="Avocado">Avocado</option>
          <option value="Oranges">Oranges</option>
          <option value="Sunflowers">Sunflowers</option>
          <option value="Brinjals">Brinjals</option>
          <option value="Cabbages">Cabbages</option>
          <option value="Capsicums">Capsicums</option>
        </select>
        <h2>
          <label>Commidity Country:</label>
        </h2>
        <select name="commoditycountry">
          <option value=""></option>
          <option value="Kenya">Kenya</option>
          <option value="Uganda">Uganda</option>
        </select>

        <h2>
          <label>Commidity Market:</label>
        </h2>
        <select name="commoditymarket">
          <option value=""></option>
          <option value="Eldoret">Eldoret</option>
          <option value="Embu">Embu</option>
          <option value="Kisii">Kisii</option>
          <option value="Loitoktok">Loitoktok</option>
          <option value="Kampala">Kampala</option>
          <option value="Jinja">Jinja</option>
        </select>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddItem;
