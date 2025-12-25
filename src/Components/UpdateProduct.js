import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./../Styles/UpdateProduct.css";

function UpdateProduct() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch(`https://localhost:7028/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setPrice(data.price);
      });
  }, [id]);

  const validate = () => {
    let newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Product name is required";
    }
    if (!price) {
      newErrors.price = "Price is required";
    } else if (isNaN(price) || Number(price) <= 0) {
      newErrors.price = "Price must be a positive number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    await fetch(`https://localhost:7028/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name, price: parseFloat(price) }),
    });

    window.location.href = "/read";
  };

  return (
    <div className="update-container">
      <h2>Update Product</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Product Name"
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <input
            type="number"
            value={price}
            placeholder="Product Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateProduct;