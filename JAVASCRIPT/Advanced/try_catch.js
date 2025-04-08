// before ES10 we had to do try catch like this
try{
    bob + "hi"
}
catch(error){
    console.log("you messed up" + error)
}

// but after ES10 we can remove the parameter
try{
    bob + "hi"
}
catch{
    console.log("you messed up")
}