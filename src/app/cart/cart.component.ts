import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    public cookieVal;
    public finaldata=[];
    public ans;
    public featuredData;
    public cookieDelVal;
    public delres;
    public finalDelVal="";
  constructor(private cookieService: CookieService,public crudData:CrudService) { }

  ngOnInit() {
   // console.log(this.cookieService.get('catData'));
   if(this.cookieService.get('catData')){
    this.cookieVal= this.cookieService.get('catData').split(',');
   //console.log(this.cookieVal);
   this.crudData.getData("product.json").subscribe(
            (prRes) => {
                //console.log(prRes);
                for(this.ans in prRes){
                    //console.log(this.ans)
                    //console.log(prRes[this.ans])
                    //console.log(typeof prRes[this.ans].pro_id.toString())
                    if(this.cookieVal.indexOf(prRes[this.ans].pro_id.toString())>=0){
                    
                    this.finaldata.push(prRes[this.ans])
                    
                }
                   
                }
                
             // console.log(this.finaldata)
            
              this.featuredData = this.finaldata
            }
        
        );
   }
       
  }
    //Delete Cart Start   
    deleteTocart(id,Delev){
        //alert(id);
       if(this.cookieService.get('catData')){
           this.cookieDelVal = this.cookieService.get('catData').split(',')
          // console.log(this.cookieDelVal);
           for(this.delres in this.cookieDelVal){
               
               //console.log(this.delres);
              // console.log(this.cookieDelVal[this.delres])
               if(id!=this.cookieDelVal[this.delres]){
                   //console.log(this.cookieDelVal[this.delres])
                   this.finalDelVal+=this.cookieDelVal[this.delres]+","
               }
               
           }
               //console.log(this.finalDelVal.slice(0,-1));
           this.cookieService.set('catData',this.finalDelVal.slice(0,-1))
           //console.log(ev);
           Delev.target.parentNode.parentNode.parentNode.parentNode.style.display="none";
       }
       
   }    
  

}
