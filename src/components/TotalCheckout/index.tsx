import "./style.scss";

interface TotalProps {
  originTotal: number;
  totalDiscount: string; // float - toFixed(2)
  total: string;
}

const TotalCheckout = ({ originTotal, totalDiscount, total }: TotalProps) => {
  return (
    <div className="total-detail">
      <div className="total-current">
        <span className="total-text">Total Origin: </span>
        <span className="total-amount">${originTotal.toFixed(2) || 0}</span>
      </div>
      <div className="total-discount">
        <span className="total-text">Total Discount: </span>
        <span className="total-amount">${totalDiscount}</span>
      </div>
      <div className="total-origin">
        <span className="total-text">Total:</span>
        <span className="total-amount">${total}</span>
      </div>
    </div>
  );
};

export default TotalCheckout;
