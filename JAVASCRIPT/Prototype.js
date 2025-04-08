function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  Person.prototype.nationality = "English";
  
  
  let a = {
    name2: "Harry",
    language: "JavaScript",
    run: () => {
      alert("self run")
    }
  }
  console.log(a)
  
  
  let p = {
    run: () => {
      alert("run")
    }
  }
  
  p.__proto__ = {
    name: "Jackie"
  }
  
  a.__proto__ = p
  a.run()
  console.log(a.name)