import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

function ProductItem({ product }) {
  return (
    <div className={classes.ProductItem}>
      <Link to={"/products/" + product.productId}>
        <div className={classes.ProductItemImage}>
          <img src={product.image} alt={product.title} />
          <div className={classes.ProductItemText}>
            <h3>{product.title}</h3>
            <div className={classes.btn}>Buy Now</div>
          </div>
        </div>
        <div className={classes.ribbon}>
          <div className={classes.content}>{product.price}$</div>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
