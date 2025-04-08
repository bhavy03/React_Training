var b = "may i";

function aa(){
    var d = "helllo";
    console.log(d);
    console.log(b); 
    // can access b here cause 
    // both function aa() and b are keys of window object
    // or we say b is global 
    // works with let and const also
}
aa();
console.log(d);   // can't access d here cause d is in scope of function aa()
/*or window.aa(); */  


var fun=5;
function funner(){
    var fun = "hello";  //here both let and const work
    console.log(fun)
}
function funnest(){
    fun = "AHHH";   // here let work but const doesn't
    console.log(fun)
}
console.log(fun);  
//5  cause till now no function is called
funner();          
//hello  cause it first checks in it's own scope found so that one
funnest();         
//AHHH  cause it first checks in it's own scope found so that one but modified the root fun
console.log(fun);  
//AHHH  cause the root fun is modified

// the scope chain
function a(){
    c();
    function c(){
        console.log(b);
    }
}
a();