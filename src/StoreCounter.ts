interface SalesPromotion {
  name: string;
  productCountForFree: number;
  freeCount: number;
}

export interface Product {
  name: string;
  price: number;
  count: number;
  discount?: number;
}

const salesPromotions: SalesPromotion[] = [
  {
    name: "E",
    productCountForFree: 1,
    freeCount: 1
  },
  {
    name: "F",
    productCountForFree: 2,
    freeCount: 1
  }
]

export class StoreCounter {
  private products: Product[] = [];
  private totalPrice: number = 0;

  public print(): void {
    console.log('\n****************      Receipt     ****************')

    console.log('\nName    Price     Count     Total')

    if (this.products.length) {
      this.products.forEach(item => {
        const productTotal = item.price * (item.count - Number(item.discount || 0))
        console.log(item.name, '     ', item.price, '      ', `${item.count}${item.discount ? `(free: ${item.discount})` : '         '}`, productTotal)
      })

      console.log('\nTotal Price: ', this.totalPrice)
      console.log('\n*****************     End     ********************\n')
    }
  }

  public get total(): number | null {
    if (this.products.length === 0) {
      return null;
    }

    this.totalPrice = 0
    for (const product of this.products) {
      const promotion = salesPromotions.find(promotion => promotion.name === product.name)
      if (promotion) {
        product.discount = Math.floor(product.count / (promotion.productCountForFree + promotion.freeCount))
        this.totalPrice += product.price * (product.count - product.discount)
      } else {
        this.totalPrice += product.price * product.count
      }
    }
    return this.totalPrice
  }

  public add(product: Product): void {
    this.products.push(product);
  }
}
