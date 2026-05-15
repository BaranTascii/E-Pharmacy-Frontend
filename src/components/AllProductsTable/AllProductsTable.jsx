import { useModal } from "../ModalContext";

import EditProductData from "../EditProductData/EditProductData";

const AllProductsTable = ({ products }) => {
  const { openModal } = useModal();

  return (
    <div className="table-wrapper">
      <table className="products-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>

              <td>{product.category}</td>

              <td>{product.stock}</td>

              <td>${product.price}</td>

              <td>
                <button
                  onClick={() =>
                    openModal(<EditProductData product={product} />)
                  }
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProductsTable;
