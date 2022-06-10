import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import ProductList from "../components/ProductList/ProductList";
import { getCategory } from "../data/categories";
import { getProducts } from "../data/products";

function Category() {
  const params = useParams();
  const category = getCategory(params.categoryId);

  if (!category) {
    return null;
  }

  return (
    <>
      <Header
        title={category.title}
        image={category.image}
        boxTitle={category.boxTitle}
        boxChildren={category.boxChildren}
      >
        {category.description}
      </Header>

      <Main>
        <ProductList products={getProducts(category.categoryId)} />
      </Main>
    </>
  );
}

export default Category;
