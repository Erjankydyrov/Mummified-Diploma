import { Link } from "react-router-dom";
import classes from "./CategoryItem.module.css";

function CategoryItem({ category }) {
  return (
    <div className={classes.CategoryItem}>
      <Link to={"/categories/" + category.categoryId}>
        <div className={classes.CategoryItemImage}>
          <img src={category.image} alt={category.title} className={classes.CategotyBG}/>
          <div className={classes.CategoryItemText}>
            <h3>{category.title}</h3>
          </div>
          <div className={classes.CategoryBox}>
            <img src={category.categoryLogo} alt={category.title} className={classes.CategotyBoxLogo}/>
            <h2>{category.boxTitle}</h2>
            <p>{category.boxChildren}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryItem;
