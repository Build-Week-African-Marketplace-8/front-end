import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import Item from './Item';

const ItemsList = () => {
  const [items,setItems] = useState([]);
  useEffect(()=> {
    axios.get('https://fakerapi.it/api/v1/products')
    .then(res =>{
      console.log(res.data.data)
      setItems(res.data.data)
    })
    .catch(err => console.log(err))
  },[])

  

  return(
    <div>
    <div className="ui grid container">
      {items.map(item=> <div className="four wide column"><Item key={item.ean} item={item}/></div>)}
    </div>
    <Link to="/additem"><button className="btn">Add Item</button></Link>
    
    </div>
  ) 
};

export default ItemsList;
