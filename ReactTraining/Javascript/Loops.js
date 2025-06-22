
    // Program to add first n natural numbers
    let sum = 0
    let n = prompt("Enter the value of n")
    n = Number.parseInt(n)
    for (let i = 0; i < n; i++) {
      sum += (i + 1)
      // console.log((i+1), "+")
    }
    console.log("Sum of first " + n + " natural numbers is " + sum)
    // console.log(i)

    var todos = [2, 3, 4, 5, 6, 7]
    for (let i = 0; i < todos.length; i++) {
      console.log(todos[i] + "!")   // it will give old array
      todos[i] = todos[i] + "!";    // it will give new array
      todos.pop();
    }
    
    console.log(todos)
    
    // for each loop
    todos.forEach(function(todo,i){    
      console.log(todo,i)
    })
    // how it works is forEach asks for an array and the action
    // we wanted to perform on todos can be represented in a function
    // here first argument is element of array and second id index

    // or we can do it like this
    function logtodos(todo,i){
      console.log(todo,i)
    }
    todos.forEach(logtodos)
    /*
    let obj = {
      harry: 90,
      shubh: 45,
      shivika: 56,
      ritika: 57,
      shiv: 23
    }
    
    // For in loop
    // works with objects also can with arrays
    // in objects we enumerate
    // enumerates on object's properties
    for (let a in obj) {
      console.log("Marks of " + a + " are " + obj[a])
    }
    
    // For of loop
    // it iterates over both iterables string and arrays
    // doesn't work with objects as objects are not iterables
    for (let b of "Harry") {
      console.log(b)
    }
    for (let no of todos){
      console.log(no)
    }
    */

    // while loop
    /*
    let n = prompt("Enter the value of n")
    n = Number.parseInt(n)
            
    let i = 0;
    while(i<n){
      console.log(i)
      i++;
    }
    */
    // while loop
    let m = prompt("Enter the value of n")
    m = Number.parseInt(n)
    let i = 10;
    do {
      console.log(i)
      i++;
    } while (i < m)

  