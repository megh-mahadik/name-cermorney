import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public urlstr
  constructor(private crudData:CrudService) { }

  ngOnInit() {
  }
  
  addData(records){
    //console.log(records)
    this.crudData.postdata("http://localhost:8888/user",records).subscribe(
        (res)=>{
            
            console.log(res)
        }
    )
	//storing in local storage and sending sms
	
	if(typeof localStorage=="object"){
	
		//alert(111);
		//console.log(localStorage);
		localStorage.setItem("userEmail",records.uemail)
		localStorage.setItem("userPass",records.upass)
		
		
//		this.urlstr="http://api.textlocal.in/send/?username=megha7mahadik@gmail.com&hash=69a47d68a4240ff05c2f724617d569c34726d259509dfdc26fbf6d2d74b8f8e4&message=HELLO2222&sender=TXTLCL&numbers=91"+records.umob+"&test=0"
//		console.log(this.urlstr)
//		this.crudData.getData1(this.urlstr).subscribe(
//            (res) => {
//                console.log(res);
//              
//            
//            }
//        
//        );
	}
  }

}
