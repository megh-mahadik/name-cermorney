import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Http } from '@angular/http';


@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
	
	titleAlert:string = 'This field is required';
	titleEmail:string = 'Emailid In Correct';
	descAlert:string = "You must specify a description that's between 30 and 500 characters."
	
	
	rForm: FormGroup;
	post:any;   // A property for our submitted form
  description:string = '';
  name:string = '';
	
  constructor(private fb: FormBuilder , private http:Http) { 
  	
	  this.rForm = fb.group({
      'name' : [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/)])],
		  
		  
	  'email':[null,Validators.compose([Validators.required, Validators.email])],
		  
		  
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(20)])],
		  
		  
      'validate' : ''
		  
    });
  
  }

  ngOnInit() {
	  
	  
  }
addPost(post) {
    this.description = post.description;
  this.name = post.name;
	
	
	//console.log(post)
  }
	
	onFileChange(event) {
    console.log(event)    
	console.log(event.target.files)

    if(event.target.files && event.target.files.length > 0) {
//		console.log(event.target.files);
		
      let file = event.target.files[0];
		
		let FD = new FormData();
		    console.log(FD)

		FD.append('filename', file,file.name);
//		console.log(file)
//		console.log(this.http)
		
	
		this.http.post("http://localhost/file.php",FD).subscribe((response)=>{
			console.log(response)
			
		})
      
    }
  }
	
	
}
