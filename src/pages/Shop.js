import ShopItem from "../components/ShopItem";

const Shop = (props) => {
  const { stock, handleAdd } = props;
  return (
    <>
      <div>
      {stock.map(product => 
        <ShopItem
          key={product.id}
          product={product}
          handleAdd={handleAdd} 
        />
      )}
      </div>
    </>
  )
}

export default Shop;
