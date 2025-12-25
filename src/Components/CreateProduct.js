import React, { useState } from "react";
import "./../Styles/CreateProduct.css";

function CreateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState({});

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

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    if (!validate()) return; // stop if validation fails

    await fetch("https://localhost:7028/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price: parseFloat(price) }),
    });

    window.location.href = "/read";
  };

  return (
    <div className="create-container">
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <input
            type="number"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default CreateProduct;