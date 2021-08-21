class Group {
  constructor() {
    this.group = [];
  }

  has(item) {
    return this.group.includes(item);
  }

  add(item) {
    if (this.has(item)) return this.group;
    this.group.push(item);
    return this.group;
  }

  delete(item) {
    if (!this.has(item)) return `Element not found`;
    this.group.splice(this.group.indexOf(item), 1);
    return this.group;
  }

  get length() {
    return this.group.length;
  }
}

const mySet = new Group();
mySet.add(12)
mySet.add(12)
mySet.add(12)
mySet.add(`hello`)
mySet.add(x => x**2)
mySet.add(`bindu`)
mySet.add(21)
// mySet.delete(12)


console.log(mySet.add(`brm`))
console.log(mySet.delete(`Hello`))
console.log(mySet.length)