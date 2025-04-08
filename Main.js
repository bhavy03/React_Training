const obj = {
  name: "Bhavya",
  greet: () => {
    console.log(this.name);
  },
};
console.log("Hello world")
obj.greet();
