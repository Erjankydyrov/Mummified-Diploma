import Header from "../components/Header/Header";
import headerImage from "../assets/headerImages/products.svg";
import Main from "../components/Main/Main";
import { getCategories } from "../data/categories";
import CategoryList from "../components/CategoryList/CategoryList";

function Categories() {
  console.log(getCategories())
  return (
    <>
      <Header
        title="Take command of YOUR army and lead it into battle!"
        image={headerImage}
        boxTitle="Choose your faction!"
        boxChildren="In our assortment there are a lot of different factions and warriors who wish to come under your command."
      >
        In the world of Eternal War, there are always those with whom you can
        fight, see which warriors will take your command.
      </Header>

      <Main>
        <CategoryList categories={getCategories()} />
      </Main>
    </>
  );
}

export default Categories;
