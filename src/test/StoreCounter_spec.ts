import "mocha";
import { expect } from "chai";
import { StoreCounter } from "../StoreCounter";

describe("StoreCounter", () => {
  let instance: StoreCounter;

  beforeEach(() => {
    instance = new StoreCounter();
  });

  describe("1. Calculate price of products sold by piece", () => {
    it('', () => {
      console.log('- Add one "A" Product(piece)')
      instance.add({ name: "A", price: 30, count: 1 });
      expect(instance.total).to.equal(30);
      instance.print();
    });

    it('', () => {
      console.log('- Add one "A" Product(piece)')
      instance.add({ name: "A", price: 30, count: 1 });
      expect(instance.total).to.equal(30);

      console.log('- Add two "B" Product(piece)')
      instance.add({ name: "B", price: 20, count: 2 });
      expect(instance.total).to.equal(70);
      instance.print();
    });
  })

  describe("2. Calculate price of products sold in bulk", () => {
    it('', () => {
      console.log('- Add 1.5 "C" Product(bulk)')
      instance.add({ name: "C", price: 20, count: 1.5 });
      expect(instance.total).to.equal(30);
      instance.print();
    });

    it('', () => {
      console.log('- Add 1.5 "C" Product(bulk)')
      const instance = new StoreCounter();
      instance.add({ name: "C", price: 20, count: 1.5 });
      expect(instance.total).to.equal(30);

      console.log('- Add 2.5 "D" Product(bulk)')
      instance.add({ name: "D", price: 10, count: 2.5 });
      expect(instance.total).to.equal(55);
      instance.print();
    });
  })

  describe("3. Calculate price of products on sale", () => {
    it('', () => {
      console.log('- Add 4 "E" Product(buy one, get one free)')
      instance.add({ name: "E", price: 20, count: 4 });
      expect(instance.total).to.equal(40);
      instance.print();
    });

    it('', () => {
      console.log('- Add 4 "E" Product(buy one, get one free)')
      const instance = new StoreCounter();
      instance.add({ name: "E", price: 20, count: 4 });
      expect(instance.total).to.equal(40);

      console.log('- Add 4 "F" Product(buy two, get one free)')
      instance.add({ name: "F", price: 10, count: 4 });
      expect(instance.total).to.equal(70);
      instance.print();
    });
  })

  describe("4. Calculate price of products on any order", () => {
    it('', () => {
      console.log('- Add 5 "E" Product(buy one, get one free)')
      const instance = new StoreCounter();
      instance.add({ name: "E", price: 20, count: 5 });
      expect(instance.total).to.equal(60);

      console.log('- Add 2 "B" Product(piece)')
      instance.add({ name: "B", price: 20, count: 2 });
      expect(instance.total).to.equal(100);

      console.log('- Add 7 "F" Product(buy two, get one free)')
      instance.add({ name: "F", price: 10, count: 7 });
      expect(instance.total).to.equal(150);

      console.log('- Add 1.2 "D" Product(bulk)')
      instance.add({ name: "D", price: 10, count: 1.2 });
      expect(instance.total).to.equal(162);
      instance.print();
    });
  })
});
