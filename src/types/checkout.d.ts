interface PricingRuleEffect {
  type: "absolute" | "percent" | "x_for_y_deal";
  value: number;
  productId?: Product["id"];
}

interface PricingRuleCondition {
  type: "quantity" | "price";
  condition: "eq" | "gt" | "lt" | "gte" | "lte";
  value: number;
}

interface PricingRule {
  productId: Product["id"];
  // apply for customer ids
  applyFor: string[];
  effect: PricingRuleEffect;
  conditions?: PricingRuleCondition[];
  description: string;
}

interface Product {
  id: string;
  price: number;
  name: string;
  description: string;
}

interface CartItem extends Product {
  totalCount: number;
}
