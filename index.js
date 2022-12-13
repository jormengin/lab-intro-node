class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);

    // Ordena el arreglo de items en orden ascendente
    this.items.sort((a, b) => {
      return a - b;
    });

    // Actualiza la propiedad length del arreglo de items
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items.indexOf(pos)===-1) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos]
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items)
  }

  min() {
     if (this.items.length === 0) {
       throw new Error("EmptySortedList");
     }
     return Math.min(...this.items);
  }

  sum() {
    let sum = this.items.reduce((pv, cv) => (pv + cv), 0);
    return sum;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    let sum = this.items.reduce((pv, cv) => (pv += cv), 0);
    return sum / this.items.length;
  }
}

module.exports = SortedList;
