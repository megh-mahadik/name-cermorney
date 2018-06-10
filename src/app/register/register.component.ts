import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
    addData(records){

	//storing in local storage and sending sms
	
	if(typeof localStorage=="object"){
	
		//alert(111);
		//console.log(localStorage);
		
		
		if(records.uemail==localStorage.getItem("userEmail")&& records.upass==localStorage.getItem("userPass")){
//			console.log("OK");
//			console.log($window);
			window.location.href = '/'
		}
		else{
			
			console.log("Failed");
		}

	}
  }

}
