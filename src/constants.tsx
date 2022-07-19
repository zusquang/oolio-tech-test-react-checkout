const items: Product[] = [
  {
    id: "1",
    price: 11.99,
    name: "Small Pizza",
    description: '10" pizza for one person',
  },
  {
    id: "2",
    price: 15.99,
    name: "Medium Pizza",
    description: '12" pizza for two person',
  },
  {
    id: "3",
    price: 21.99,
    name: "Large Pizza",
    description: '15" pizza for three person',
  },
];

const sampleRules: PricingRule[] = [
  {
    productId: "1",
    applyFor: ["Microsoft"],
    effect: { type: "x_for_y_deal", value: 1 },
    conditions: [{ type: "quantity", value: 3, condition: "gte" }],
    description: "- Gets a 3 for 2 deal for Small Pizzas",
  },
  {
    productId: "2",
    applyFor: ["Facebook"],
    effect: { type: "x_for_y_deal", value: 1 },
    conditions: [{ type: "quantity", value: 5, condition: "gte" }],
    description: "- Gets a 5 for 4 deal on Medium Pizza",
  },
  {
    productId: "3",
    applyFor: ["Amazon"],
    effect: { type: "absolute", value: 2 },
    description:
      "- Gets a discount on Large Pizza where the price drops to $19.99 per pizza",
  },
];

export { items, sampleRules };
