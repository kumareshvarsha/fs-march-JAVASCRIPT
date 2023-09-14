let gotomovie=(success,failure)=>{
let amount=500;
amount>300? success("go to movie") : failure("go to pg")
}

gotomovie((msg)=>{
console.log(msg)},(err)=>{
console.log(err)})