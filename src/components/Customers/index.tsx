import "./style.scss";

interface CustomersProps {
  changeCustomer: (val: string) => void;
}

const customers = [
  {
    name: "Other",
    value: "Other",
  },
  {
    name: "Microsoft",
    value: "Microsoft",
  },
  {
    name: "Amazon",
    value: "Amazon",
  },
  {
    name: "Facebook",
    value: "Facebook",
  },
];

const Customers = ({ changeCustomer }: CustomersProps) => {
  return (
    <div className="customer">
      <label htmlFor="customer">Customer</label>
      <select
        name="customer"
        id="customer"
        onChange={(t) => changeCustomer(t.currentTarget.value)}
      >
        {customers.map((customer, idx) => (
          <option id={`customer-${idx}`} value={customer.value} key={idx}>
            {customer.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Customers;
