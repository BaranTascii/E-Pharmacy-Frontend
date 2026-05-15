import { useState } from "react";

const AddNewProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    stock: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>

      <div className="modal-form-group">
        <input
          name="name"
          placeholder="Product name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="modal-form-group">
        <input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>

      <div className="modal-form-group">
        <input
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
        />
      </div>

      <div className="modal-form-group">
        <input
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="submit-btn">
        Save Product
      </button>
    </form>
  );
};

export default AddNewProduct;
