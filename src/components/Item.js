import React,{useState}  from "react"; 

function Item({ name, category }) {
  const [cart, setCart] = useState(false);
  const itemClass = cart ? "in-cart": ""
  const btnClass = cart ? "remove" : "add"
  

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={() => setCart(!cart)}>{cart ? 'Remove From Cart':'Add to Cart'}</button>
    </li>
  );
}
export default Item;
