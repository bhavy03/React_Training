const obj = {
  name: "Bhavya",
  greet: () => {
    console.log(this.name);
  },
};

obj.greet();
