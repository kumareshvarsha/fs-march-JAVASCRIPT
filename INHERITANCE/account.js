class account {
acc_id;
acc_name;
acc_email;
constructor(id,name,email){
this.acc_id=id
this.acc_name=name
this.acc_email=email
}
open_account (){
console.log("account opened successfully")
}
close_account(){
console.log("account opened successfully")
}
}
class SA extends account{
min_bal=500;
acc_bal=0
constructor(id,name,amount,email){
super(id,name,email)
this.acc_bal=this.acc_bal+amount
}
deposit_amount(amount){	
this.acc_bal=this.acc_bal+amount
}
get_bal(){
return this.acc_bal-this.min_bal
}
}
let s=new SA(101,"varsha",60000,"varsha@gmail.com")
console.log(s)
console.log(s.get_bal())
class CA extends account{
min_bal=1000;
acc_bal=5000
constructor(id,name,amount,email){
super(id,name,email)
this.acc_bal=this.acc_bal+amount
}
deposit_amount(amount){	
this.acc_bal=this.acc_bal+amount
}
get_bal(){
return this.acc_bal-this.min_bal
}
}
let c=new CA(102,"sony",70000,"sony@gmail.com")
console.log(c)
console.log(c.get_bal())
