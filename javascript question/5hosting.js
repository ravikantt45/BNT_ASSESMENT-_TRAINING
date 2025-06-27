function chain(value) {
  let current = value;

  const operations = {
    add(val) {
      current += val;
      return operations;
    },
    subtract(val) {
      current -= val;
      return operations;
    },
    result() {
      return current;
    }
  };

  return operations;
}


console.log(chain(5).add(2).subtract(1).result()); 