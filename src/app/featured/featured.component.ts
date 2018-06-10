import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  constructor(public crudData:CrudService, private cookieService: CookieService) { }
  public featuredData;
  public ans;
  public finaldata=[];
  public cookieValue="";
  public oldData;
  public newData;

  ngOnInit() {
  
    this.crudData.getData("product.json").subscribe(
            (res) => {
                console.log(res);
               // return false;
                this.featuredData = res;
            
            }
        
        );
        
  
   
   this.crudData.toDataTransfer.subscribe(
    (data)=>{
        //console.log(data);
        //console.log(data['a'])
        this.finaldata = []
        
        this.crudData.getData("product.json").subscribe(
            (prRes) => {
                //console.log(prRes);
                for(this.ans in prRes){
                    //console.log(this.ans)
                   // console.log(prRes[this.ans])
                   
                   if(data['a'] == prRes[this.ans]['proca_id']){
                    this.finaldata.push(prRes[this.ans])
                   
                   }
                }
                
              //console.log(this.finaldata)
            
              this.featuredData = this.finaldata
            }
        
        );
    
    
    }
  
  )
  }
  
//add to cart start
 addTocart(id){
    //alert(id);
    if(this.cookieService.get('catData')){
     //alert(1);
     this.oldData=this.cookieService.get('catData');
     this.newData = this.oldData + "," + id;
    // alert(this.newData);
     this.cookieService.set( 'catData', this.newData );
    
    }
    else{
        this.cookieService.set( 'catData', id );
    
    }
    alert("Product Added");
   // this.cookieValue = this.cookieService.get('Test');
    
    
 
 }

}
