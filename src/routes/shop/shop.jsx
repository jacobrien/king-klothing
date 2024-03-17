import './shop.scss';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  const productCards = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  return <div className="products-container">{productCards}</div>;
};

export default Shop;
