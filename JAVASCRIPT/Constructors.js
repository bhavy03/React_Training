class RailwayForm {
    constructor(givenname, trainno) {
        console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
        this.name = givenname
        this.trainno = trainno
    }

    submit() {
        alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel() {
        alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    }
}

// Create & fill a form for Harry
let harryForm = new RailwayForm("Harry", 145316)
// No need to Fill the form with Harry's details
// harryForm.fill()

// Create & fill a forms for Rohan
let rohanForm1 = new RailwayForm("Rohan", 222420)
let rohanForm2 = new RailwayForm("Rohan", 2229211)



harryForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()

class RailwayForm {
    constructor(givenname, trainno, address) {
        console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
        this.name = givenname
        this.trainno = trainno
        this.address = address
    }

    preview() {
        alert(this.name + ": Your form is for Train number: " + this.trainno + " and your address is " + this.address)
    }

    submit() {
        alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }

    cancel() {
        alert(this.name + ": This form is cancelled for train number: " + this.trainno)
        this.trainno = 0
    }
}

let harry = new RailwayForm("Harry", 13488, "420, Pacific Ocean, Ocean, Bihar - 0000555")
harry.preview()
harry.submit()
harry.cancel()
harry.preview()

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
