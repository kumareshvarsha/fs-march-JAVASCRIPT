/*let nos=[1,2,3,4,5,6,7,8,9,10]
let new_evennos=[]
let new_oddnos=[]
for(no of nos){
if(no%2==0){
new_evennos.push(no)
}
else{
new_oddnos.push(no)
}
}
console.log(nos)
console.log(new_evennos)
console.log(new_oddnos)
*/

/*let nos=[1,2,3,4,5,6,7,8,9,10]
let new_evennos=nos.filter((no)=>{
return no%2==0
})
console.log(nos)
console.log(new_evennos)
*/

let cars = [{ model: "XUV500", brand: "Mahindra", color: "White", price: 1500000 },
{ model: "Etios", brand: "Mahindra", color: "White", price: 1500000 },
{ model: "800", brand: "swift", color: "blue", price: 1500000 },
{ model: "scorpio", brand: "Mahindra", color: "blue", price: 1900000 },
{ model: "Pantham", brand: "RR", color: "red", price: 9500000 },
{ model: "x1", brand: "BMW", color: "White", price: 4500000 },
{ model: "Swfit", brand: "Maruthi", color: "yellow", price: 500000 },
{ model: "q3", brand: "Audi", color: "White", price: 7500000 },
{ model: "Thar", brand: "Mahindra", color: "red", price: 1800000 },
{ model: "baleno", brand: "Maruthi", color: "White", price: 900000 },
{ model: "safari", brand: "Tata", color: "black", price: 2500000 },]

/*let new_cars=cars.filter((car)=>{
return car.price>1500000
})
console.log(new_cars)
*/

let new_cars=cars.filter((car)=>{
return car.color != "White"
})
console.log(new_cars)