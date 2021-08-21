class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(obj) {
    return new Vec(this.x + obj.x, this.y + obj.y);
  }

  minus(obj) {
    return new Vec(this.x - obj.x, this.y - obj.y);
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

const vec = new Vec(1, 2);

console.log(vec.plus(new Vec(2, 3)));
console.log(vec.minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
console.log(vec.length);
