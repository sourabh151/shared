
interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  constructor(public name: string) {
  }
  greet(): void {
    console.log("helli");
  }
}
const aman = new Person("aman")
console.log(aman);

