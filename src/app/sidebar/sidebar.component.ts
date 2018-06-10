import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public crudData:CrudService) { }
  
  public catData;
  public brData;

  ngOnInit() {
    
        this.crudData.getData("category.json").subscribe(
            (res) => {
                console.log(res);
               // return false;
                this.catData = res;
            
            }
        
        );
        
        
        this.crudData.getData("brand.json").subscribe(
            (brRes) => {
                console.log(brRes);
               // return false;
                this.brData = brRes;
            
            }
        
        );
        
       
  }
  
   filterCat(id,e){
            //console.log(id);
            //console.log(e);
            e.preventDefault();
            this.crudData.transferData(id)
        
        }

}
