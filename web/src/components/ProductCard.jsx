import { useCart } from "../context/CartContext";
import siteConfig from "../config/siteConfig";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const image = siteConfig.logoSrc || product.image ;

  return (
    <div className="card">
      <div className="card-media">
        <img src={image} alt={product.name} />
      </div>
      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="muted">{product.description}</p>
        <div className="card-row">
          <span className="price">${product.price.toFixed(2)}</span>
          <button className="btn sm" onClick={() => addItem(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
