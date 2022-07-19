import "./style.scss";

interface DiscountDescriptionProps {
  applyRule: PricingRule[];
}

const DiscountDescription = ({ applyRule }: DiscountDescriptionProps) => {
  return (
    <div className="discount">
      {applyRule.map((rule, idx) => {
        return <p key={idx}>{rule.description}</p>;
      })}
    </div>
  );
};

export default DiscountDescription;
