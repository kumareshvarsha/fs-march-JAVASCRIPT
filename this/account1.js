class account{
min_bal=1000
acc_id;
acc_name;
acc_bal=0
constructor(id,name,amount){
this.acc_id=id
this.acc_name=name
this.acc_bal=amount
}
deposit_amount(amount){
this.acc_bal=this.acc_bal+amount
}
get_bal(){
return this.acc_bal-this.min_bal
}
withdraw_amount(amount){
this.acc_bal=this.acc_bal-amount
}
}
let a1=new account(101,"varsha",70000)
let a2=new account(102,"sony",60000)
a1.deposit_amount(5000)
a1.withdraw_amount(1000)
a2.deposit_amount(5000)
a2.withdraw_amount(1000)
console.log(a1.get_bal())
console.log(a2.get_bal())
console.log(a1)
console.log(a2)