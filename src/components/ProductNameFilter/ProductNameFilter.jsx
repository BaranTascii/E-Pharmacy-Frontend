const ProductNameFilter = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search product..."
      value={value}
      onChange={onChange}
      className="product-filter-input"
    />
  );
};

export default ProductNameFilter;
