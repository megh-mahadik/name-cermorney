import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  template: '',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  	if(typeof localStorage == "object"){
		localStorage.removeItem("userEmail")
		localStorage.removeItem("userPass")
		window.location.href="/"
	}
  }

}
