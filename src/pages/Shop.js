import ShopItem from "../components/ShopItem";

const Shop = (props) => {
  const { stock, handleAdd } = props;
  return (
    <>
      <h1>I am Shop</h1>
      {stock.map(product => 
        <ShopItem
          key={product.id}
          product={product}
          handleAdd={handleAdd} 
        />
      )}
    </>
  )
}

export default Shop;
