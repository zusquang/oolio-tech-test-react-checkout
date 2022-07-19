export class Checkout {
  private pricingRules: PricingRule[] = [];

  items: Record<Product["id"], CartItem> = {};

  customer: string = "default";

  appliedRules: PricingRule[] = [];

  originTotal: number = 0;

  constructor(pricingRules: PricingRule[]) {
    this.pricingRules = pricingRules;
  }

  add(item: Product) {
    if (this.items[item.id]) {
      this.items[item.id].totalCount += 1;
      return this;
    }

    this.items[item.id] = { ...item, totalCount: 1 };
    return this;
  }

  remove(item: Product) {
    if (this.items[item.id]?.totalCount > 0) {
      this.items[item.id].totalCount -= 1;
      return this;
    }

    delete this.items[item.id];
    return this;
  }

  changeQuantity(item: Product, quantity: number) {
    if (quantity >= 0) {
      console.log("quantity", quantity, { ...item, totalCount: quantity });

      this.items[item.id] = { ...item, totalCount: quantity };
      console.log(this.items);
    }
    console.log(quantity);

    return this;
  }

  private conditionChecker(c: PricingRuleCondition, _item: CartItem): boolean {
    const check = (operator: string) => {
      if (c.type === "quantity") {
        return eval(`_item.totalCount ${operator} c.value`);
      }

      return false;
    };

    // manual check to avoid code injection, because using eval to compare the condition
    switch (c.condition) {
      case "gte":
        return check(">=");
      case "lte":
        return check("<=");
      case "eq":
        return check("==");
      case "gt":
        return check(">");
      case "lt":
        return check("<");

      default:
        // TODO: handle error
        console.error(`Cannot handle condition ${c.condition}`);
    }

    return false;
  }

  private applyDiscount(
    effect: PricingRuleEffect,
    item: CartItem,
    originTotalPrice: number
  ): number {
    switch (effect.type) {
      case "absolute":
        return originTotalPrice - item.totalCount * effect.value || 0;
      case "percent":
        return (effect.value * originTotalPrice) / 100 || 0;
      case "x_for_y_deal":
        return (
          originTotalPrice - effect.value * (originTotalPrice / item.totalCount)
        );

      default:
        // TODO: handle error
        console.error(`Cannot apply effect`, effect);
    }

    return originTotalPrice;
  }

  private pricingRuleHandler(item: CartItem): number {
    let total = item.totalCount * item.price;

    const rules = this.pricingRules.filter(
      (rule) => rule.productId === item.id
    );

    for (const rule of rules) {
      if (!this.customer || !rule.applyFor.includes(this.customer)) continue;

      if (rule.conditions?.length) {
        const shouldApplyDiscount = rule.conditions.every((c) =>
          this.conditionChecker(c, item)
        );

        if (!shouldApplyDiscount) continue;
      }

      this.appliedRules.push(rule);
      total = this.applyDiscount(rule.effect, item, total);
    }

    return total;
  }

  total() {
    let total: number = 0;
    this.originTotal = 0;
    this.appliedRules = [];

    for (const item in this.items) {
      this.originTotal += this.items[item].totalCount * this.items[item].price;
      total += this.pricingRuleHandler(this.items[item]);
    }

    return {
      totalAmount: total.toFixed(2),
      discountAmount: (this.originTotal - total).toFixed(2),
    };
  }
}
