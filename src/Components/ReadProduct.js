import React, { useEffect, useState } from "react";
import "./../Styles/ReadProduct.css";

function ReadProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7028/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  

  return (
    <div className="read-container">
      <h2>Products List</h2>
      {/* <div class="product">
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}{" "}
            <a href={`/update/${p.id}`}>Edit</a> |{" "}
            <a href={`/delete/${p.id}`}>Delete</a>
          </li>
        ))}
      </ul>
      </div> */}

       <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {products.map((p) => (
      <tr key={p.id}>
        <td>{p.name}</td>
        <td>${p.price}</td>

        <td>
         <a href={`/update/${p.id}`}>Edit</a> |{" "}
          <a href={`/delete/${p.id}`}>Delete</a>
        </td>
      </tr>
       ))}
    </tbody>
  </table>

    </div>
  );
}

export default ReadProducts;