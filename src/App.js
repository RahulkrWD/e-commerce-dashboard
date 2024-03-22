import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ProductForm = () => {
  const [categoryId, setCategoryId] = useState("");
  const [productId, setProductId] = useState("");
  const [cost, setCost] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [productName, setProductName] = useState("");
  const [type, setType] = useState("");
  const [offer, setOffer] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [gallery, setGallery] = useState(["", "", "", ""]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/product/add/product",
        {
          categoryId,
          productId,
          cost,
          image,
          rating,
          productName,
          type,
          offer,
          description,
          details,
          gallery,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log("Error occurred", err);
    }
  }

  function handleGalleryChange(index, value) {
    const newGallery = [...gallery];
    newGallery[index] = value;
    setGallery(newGallery);
  }

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>categoryId:</label>
        <input
          type="text"
          placeholder="category id"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        />
        <br />
        <label>productId:</label>
        <input
          type="text"
          placeholder="product id"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <br />
        <label>cost:</label>
        <input
          type="text"
          placeholder="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <br />
        <label>image:</label>
        <input
          type="text"
          placeholder="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <label>rating:</label>
        <input
          type="text"
          placeholder="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <br />
        <label>productName:</label>
        <input
          type="text"
          placeholder="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <br />
        <label>type:</label>
        <input
          type="text"
          placeholder="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <br />
        <label>offer:</label>
        <input
          type="text"
          placeholder="offer"
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
        />
        <br />
        <label>description:</label>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label>details:</label>
        <input
          type="text"
          placeholder="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <br />
        <label>gallery:</label>
        {gallery.map((item, index) => (
          <input
            key={index}
            type="text"
            placeholder="gallery"
            value={item}
            onChange={(e) => handleGalleryChange(index, e.target.value)}
          />
        ))}
        <br />
        <button type="submit">Submit</button>
        <Toaster />
      </form>
    </div>
  );
};

export default ProductForm;
