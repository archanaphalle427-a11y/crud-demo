// // // import logo from './logo.svg';
// // // import './App.css';

// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <header className="App-header">
// // //         <img src={logo} className="App-logo" alt="logo" />
// // //         <p>
// // //           Edit <code>src/App.js</code> and save to reload.
// // //         </p>
// // //         <a
// // //           className="App-link"
// // //           href="https://reactjs.org"
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //         >
// // //           Learn React
// // //         </a>
// // //       </header>
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // const API_URL = "https://localhost:7028/api/products";

// // function App() {
// //   const [products, setProducts] = useState([]);
// //   const [name, setName] = useState("");
// //   const [price, setPrice] = useState("");

// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

// //   const fetchProducts = async () => {
// //     const res = await axios.get(API_URL);
// //     setProducts(res.data);
// //   };

// //   const addProduct = async () => {
// //     await axios.post(API_URL, { name, price: parseFloat(price) });
// //     fetchProducts();
// //   };

// //   const updateProduct = async (id) => {
// //   try {
// //     const res = await axios.put(`${API_URL}/${id}`, {
// //       id: id,
// //       name: name,
// //       price: parseFloat(price)
// //     });

// //     // Option 1: re-fetch all products
// //     await fetchProducts();
// //      console.log(res.data);

// //     // Option 2: update state directly from response
// //     // setProducts(products.map(p => p.id === id ? res.data : p));
// //   } catch (error) {
// //     console.error("Update failed:", error.response?.data || error.message);
// //   }
 
// // };


// //   const deleteProduct = async (id) => {
// //     await axios.delete(`${API_URL}/${id}`);
// //     fetchProducts();
// //   };

// //   return (
// //     <div>
// //       <h1>Products CRUD</h1>
// //       <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
// //       <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
// //       <button onClick={addProduct}>Add</button>

// //       <ul>
// //         {products.map(p => (
// //           <li key={p.id}>
// //             {p.name} - ${p.price}
// //             <button onClick={() => updateProduct(p.id)}>Update</button>
// //             <button onClick={() => deleteProduct(p.id)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default App;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const API_URL = "https://localhost:7028/api/products";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [editId, setEditId] = useState(null); // Track which ID is being edited
 

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       setProducts(res.data);
//        console.log('log data');
//       console.log(res.data);
//     } catch (error) {
//       console.error("Fetch failed:", error.message);
//     }
//   };

//   // Helper to load product data into the top input fields
//   const startEditing = (product) => {
//     setEditId(product.id);
//     setName(product.name);
//     setPrice(product.price);
//   };

//   const addProduct = async () => {
//     if (!name || !price) return alert("Please enter name and price");
//     try {
//       await axios.post(API_URL, { name, price: parseFloat(price) });
//       setName("");
//       setPrice("");
//       fetchProducts();
//     } catch (error) {
//       console.error("Add failed:", error.message);
//     }
//   };

//   const updateProduct = async (id) => {
//     try {
//    const res=   await axios.put(`${API_URL}/${id}`, {
//       // await axios.put(${API_URL}/${id}, {
//         id: id,
//         name: name,
//         price: parseFloat(price)
//       });
//        setProducts(products.map(p => p.id === id ? res.data : p));
      

//       // Reset state and refresh UI
//       setEditId(null);
//       setName("");
//       setPrice("");

//       await fetchProducts(); 
//     } catch (error) {
//       console.error("Update failed:", error.response?.data || error.message);
      
//     }
//   };

//   const deleteProduct = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       fetchProducts();
//     } catch (error) {
//       console.error("Delete failed:", error.message);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Products CRUD (2025)</h1>
//       <div style={{ marginBottom: "20px" }}>
//         <input 
//           placeholder="Name" 
//           value={name} 
//           onChange={e => setName(e.target.value)} 
//         />
//         <input 
//           placeholder="Price" 
//           value={price} 
//           type="number"
//           onChange={e => setPrice(e.target.value)} 
//         />
//         {editId ? (
//           <button onClick={() => updateProduct(editId)} style={{ backgroundColor: "#4CAF50", color: "white" }}>
//             Save Changes
//           </button>
//         ) : (
//           <button onClick={addProduct}>Add Product</button>
//         )}
//         {editId && <button onClick={() => { setEditId(null); setName(""); setPrice(""); }}>Cancel</button>}
//       </div>

//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {products.map(p => (
//           <li key={p.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
//             <strong>{p.name}</strong> - ${p.price}
//             <div style={{ marginTop: "5px" }}>
//               <button onClick={() => startEditing(p)} style={{ marginRight: "10px" }}>Edit</button>
//               <button onClick={() => deleteProduct(p.id)} style={{ color: "red" }}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreateProduct from './Components/CreateProduct'; 
import ReadProducts from './Components/ReadProduct'; 
import UpdateProduct from './Components/UpdateProduct';  
import DeleteProduct from './Components/DeleteProduct';  

function App() {
  return (
    <div class="container">

    <Router>
      <nav>
        <a><Link to="/create">Create</Link></a> | 
        <a><Link to="/read">Read</Link></a>
      </nav>
      <Routes>
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/read" element={<ReadProducts />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/delete/:id" element={<DeleteProduct />} />
      </Routes>
    </Router>
   

    </div>
  );
}

export default App;