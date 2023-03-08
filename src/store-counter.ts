import { Product } from "./interface/product";
import { SalesPromotion } from "./interface/sales-promotion";

export class StoreCounter {
  private products: Product[] = [];
  public totalPrice: number = 0;
  public salesPromotions: SalesPromotion[] = [];

  constructor(salesPromotions: SalesPromotion[] = []) {
    this.salesPromotions = salesPromotions;
  }


  public print(): void {
    let receipt = '';

    receipt += '\n****************      Receipt     ****************';
    receipt += '\nName    Price     Count     Total';

    if (this.products.length) {
      this.products.forEach(item => {
        receipt += `\n${item.name}       ${item.price}        ${item.count}${item.discount ? `(free: ${item.discount})` : '         '} ${item.total}`
      })

      receipt += `\nTotal Price:  ${this.totalPrice}`;
      receipt += '\n*****************     End     ********************\n';
    }
    console.log(receipt)
  }

  public getProductTotal(product: Product): void {
    let total: number

    const promotion = this.salesPromotions.find(promotion => promotion.id === product.id);
    if (promotion) {
      product.discount = Math.floor(product.count / (promotion.productCountForFree + promotion.freeCount));
      total = product.price * (product.count - product.discount);
    } else {
      total = product.price * product.count;
    }

    product.total = total;
    this.totalPrice += total;
  }

  public add(product: Product): void {
    this.products.push(product);
    this.getProductTotal(product);
  }
}
