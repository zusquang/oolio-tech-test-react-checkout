import "./style.scss";

interface TableProps {
  items: Product[];
  cartItem: Record<Product["id"], CartItem>;
  addItem: (item: Product) => void;
  removeItem: (item: Product) => void;
  changeQuantity: (item: Product, val: number) => void;
}

const Products = ({
  items,
  cartItem,
  addItem,
  removeItem,
  changeQuantity,
}: TableProps) => {
  return (
    <div className="product">
      <p className="product-title">List items</p>
      <table className="products-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Cart</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: Product, idx: number) => {
            return (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    id={`removeItem-${item.id}`}
                    onClick={() => removeItem(item)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    value={cartItem?.[item.id]?.totalCount || 0}
                    onChange={(evt) =>
                      changeQuantity(item, Number(evt.target.value))
                    }
                  />
                  <button
                    id={`addItem-${item.id}`}
                    onClick={() => addItem(item)}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
