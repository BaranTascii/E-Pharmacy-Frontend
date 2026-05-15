import { useModal } from "../../components/ModalContext";

import AddNewProduct from "../../components/AddNewProduct/AddNewProduct";

const AllProductsPage = () => {
  return <div>Products Page</div>;
};

const { openModal } = useModal();
<button
  className="add-product-btn"
  onClick={() => openModal(<AddNewProduct />)}
>
  Add Product
</button>

export default AllProductsPage;
