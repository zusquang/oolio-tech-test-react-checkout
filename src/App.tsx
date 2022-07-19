import "./App.scss";
import { useEffect, useRef, useState } from "react";

import { Checkout } from "./services";
import { items, sampleRules } from "./constants";

import Products from "./components/Products";
import TotalCheckout from "./components/TotalCheckout";
import Customers from "./components/Customers";
import DiscountDescription from "./components/DiscountDescription";

function App() {
  const co = useRef<Checkout>();
  const [total, setTotal] = useState("0");
  const [discount, setDiscount] = useState("0");

  useEffect(() => {
    co.current = new Checkout(sampleRules);
  }, []);

  const addItem = (item: Product) => {
    if (co.current) {
      const { totalAmount, discountAmount } = co.current.add(item).total();
      setTotal(totalAmount);
      setDiscount(discountAmount);
    }
  };

  const removeItem = (item: Product) => {
    if (co.current) {
      const { totalAmount, discountAmount } = co.current.remove(item).total();
      setTotal(totalAmount);
      setDiscount(discountAmount);
    }
  };

  const changeQuantity = (item: Product, quantity: number) => {
    if (co.current) {
      co.current.changeQuantity(item, quantity);

      const { totalAmount, discountAmount } = co.current.total();
      setTotal(totalAmount);
      setDiscount(discountAmount);
    }
  };

  const changeCustomer = (customerId: string) => {
    if (co.current) {
      co.current.customer = customerId;

      const { totalAmount, discountAmount } = co.current.total();
      setTotal(totalAmount);
      setDiscount(discountAmount);
    }
  };

  return (
    <div className="App">
      <div className="checkout">
        <div className="checkout-main">
          <Customers changeCustomer={changeCustomer} />

          <Products
            items={items}
            cartItem={co.current?.items || {}}
            addItem={addItem}
            removeItem={removeItem}
            changeQuantity={changeQuantity}
          />

          <DiscountDescription applyRule={co.current?.appliedRules || []} />

          <TotalCheckout
            originTotal={co.current?.originTotal || 0}
            totalDiscount={discount}
            total={total}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
