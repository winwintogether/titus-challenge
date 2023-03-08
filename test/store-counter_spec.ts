import "mocha";
import { expect } from "chai";
import { StoreCounter } from "../src/store-counter";
import { SalesPromotion } from "../src/interface/sales-promotion";

const salesPromotions: SalesPromotion[] = [
  {
    id: 5,
    productCountForFree: 1,
    freeCount: 1
  },
  {
    id: 6,
    productCountForFree: 2,
    freeCount: 1
  }
]

describe("StoreCounter", () => {
  let instance: StoreCounter;

  beforeEach(() => {
    instance = new StoreCounter(salesPromotions);
  });

  describe("1. Calculate price of products sold by piece", () => {
    it('', () => {
      console.log('- Add one "A" Product(piece)');
      instance.add({ id: 1, name: "A", price: 30, count: 1 });
      expect(instance.totalPrice).to.equal(30);
      instance.print();
    });

    it('', () => {
      console.log('- Add one "A" Product(piece)');
      instance.add({ id: 1, name: "A", price: 30, count: 1 });
      expect(instance.totalPrice).to.equal(30);

      console.log('- Add two "B" Product(piece)');
      instance.add({ id: 2, name: "B", price: 20, count: 2 });
      expect(instance.totalPrice).to.equal(70);
      instance.print();
    });
  })

  describe("2. Calculate price of products sold in bulk", () => {
    it('', () => {
      console.log('- Add 1.5 "C" Product(bulk)');
      instance.add({ id: 3, name: "C", price: 20, count: 1.5 });
      expect(instance.totalPrice).to.equal(30);
      instance.print();
    });

    it('', () => {
      console.log('- Add 1.5 "C" Product(bulk)');
      const instance = new StoreCounter();
      instance.add({ id: 3, name: "C", price: 20, count: 1.5 });
      expect(instance.totalPrice).to.equal(30);

      console.log('- Add 2.5 "D" Product(bulk)');
      instance.add({ id: 4, name: "D", price: 10, count: 2.5 });
      expect(instance.totalPrice).to.equal(55);
      instance.print();
    });
  })

  describe("3. Calculate price of products on sale", () => {
    it('', () => {
      console.log('- Add 4 "E" Product(buy one, get one free)');
      instance.add({ id: 5, name: "E", price: 20, count: 4 });
      expect(instance.totalPrice).to.equal(40);
      instance.print();
    });

    it('', () => {
      console.log('- Add 4 "E" Product(buy one, get one free)');
      instance.add({ id: 5, name: "E", price: 20, count: 4 });
      expect(instance.totalPrice).to.equal(40);

      console.log('- Add 4 "F" Product(buy two, get one free)');
      instance.add({ id: 6, name: "F", price: 10, count: 4 });
      expect(instance.totalPrice).to.equal(70);
      instance.print();
    });
  })

  describe("4. Calculate price of products on any order", () => {
    it('', () => {
      console.log('- Add 5 "E" Product(buy one, get one free)');
      instance.add({ id: 5, name: "E", price: 20, count: 5 });
      expect(instance.totalPrice).to.equal(60);

      console.log('- Add 2 "B" Product(piece)');
      instance.add({ id: 2, name: "B", price: 20, count: 2 });
      expect(instance.totalPrice).to.equal(100);

      console.log('- Add 7 "F" Product(buy two, get one free)');
      instance.add({ id: 6, name: "F", price: 10, count: 7 });
      expect(instance.totalPrice).to.equal(150);

      console.log('- Add 1.2 "D" Product(bulk)');
      instance.add({ id: 4, name: "D", price: 10, count: 1.2 });
      expect(instance.totalPrice).to.equal(162);
      instance.print();
    });
  })
});
