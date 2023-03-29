class account{
	min_balance=1000;
	account_balance=60000;
	open_account(){
	console.log("account opened successfully")
	}
	get_balance(){
	console.log("60000")
	}
	get_statement(){
	console.log("its payable")
	}
	withdraw_amount(){
	console.log("you have entered wrong pin number")
	}
	close_account(){
	console.log("account closed successfully")
	}
}
let a1=new account()
console.log(a1)
console.log(a1.min_balance)
console.log(a1.account_balance)
a1.open_account()
a1.get_balance()
a1.get_statement()
a1.withdraw_amount()
a1.close_account()