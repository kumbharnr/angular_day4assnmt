import { Component } from '@angular/core';
// import { StudentComponent } from './student/student/student.component';
import { ProductService } from './product.service';
import { Product } from './Product';
import { LoggerService } from './logger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// 
export class AppComponent {
  title = 'day4';
  arrProducts:Product[]=[];

  constructor (private productServiceObj:ProductService,private LoggerServiceObj:LoggerService){}

    getProductlist()
    {
      this.LoggerServiceObj.log("Befor getting the product list..")
      this.arrProducts=this.productServiceObj.getAllProducts();
      this.LoggerServiceObj.log("Befor getting the product list..")


    }
    strdataformchild="";
    getMessage(message:any)
    {
      this.strdataformchild=message;
    }

    testLog()
    {
      this.LoggerServiceObj.log("test the `log()` method");
    }

  
  // getDataFromAnotherComponent(){
  //   let studentComponentObj=new StudentComponent();
  //   console.log("data sent from student component from student module is :"+studentComponentObj.getName());
  // }

  
}
