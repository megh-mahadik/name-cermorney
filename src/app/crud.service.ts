import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class CrudService {

  constructor(private http: Http) { }
  
    getData = function (jsonUrl){
        return this.http.get('http://www.php-training.in/'+jsonUrl).map(
            (response) => {
                return response.json();
            
            }
        
        )
    
    }
	
	getData1 = function (jsonUrl){
        return this.http.get(jsonUrl).map(
            (response) => {
                return response.json();
            
            }
        
        )
    
    }
    
    postdata = function(urlpath,records){
        return this.http.post(urlpath,records).map(
            (response)=>{
                return "record added"
            
            }
        
        )
    
    }
    
    //instance
    public toDataTransfer = new Subject();
    
    transferData= function(id){
        //console.log(id);
        this.toDataTransfer.next({a:id})
    
    }
  
 

}
