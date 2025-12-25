import React from "react";
import { useParams } from "react-router-dom";
import "./../Styles/DeleteProduct.css";

function DeleteProduct() {
  const { id } = useParams();

  const handleDelete = async () => {
    await fetch(`https://localhost:7028/api/products/${id}`, {
      method: "DELETE",
    });
    window.location.href = "/read";
  };

  return (
    <div className="delete-container">
      <h2>Delete Product</h2>
      <button onClick={handleDelete}>Confirm Delete</button>
    </div>
  );
}

export default DeleteProduct;