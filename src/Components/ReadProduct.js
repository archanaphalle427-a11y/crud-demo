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
    <div className="page-wrapper">
      <div className="read-container">
        <h2>📦 Products List</h2>

        {products.length === 0 ? (
          <p className="empty-text">No products available</p>
        ) : (
          <table className="product-table">
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
                  <td>₹ {p.price}</td>
                  <td className="action-buttons">
                    <a className="btn edit" href={`/update/${p.id}`}>
                      Edit
                    </a>
                    <a className="btn delete" href={`/delete/${p.id}`}>
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ReadProducts;
