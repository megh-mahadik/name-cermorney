import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	public logout	
	public login	
	public username


  constructor() { }

  ngOnInit() {
  
  	if(typeof localStorage=="object"){
		if(localStorage.userEmail){
			this.logout = true			
			this.login = false
			this.username = localStorage.userEmail

		}
		else{
			this.logout = false
			this.login = true
		}	
	}
  }

}
