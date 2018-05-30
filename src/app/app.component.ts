import { Component } from '@angular/core';

function log (target, name, descriptor){//defines the function 
	console.log(target, name , descriptor)
	//store the original function

	const original = descriptor.value; 

  original();
  // descriptor.value=function(){

  //   console.log("This message was hacked");
  // }  	


  ///doing by the second way

  descriptor.value = function(...args){//by passing all the arguments here 
    
    console.log("Arguments ",args,"were passed in this function");
    const result = original(args);
    console.log("The result of this function");
  }






  return descriptor;//returning that function which is actually being called     

}




@Component({//decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';



  constructor(){

   console.log(this.aSimpleMethod(5));



  }

  @log//my self decorator 
  aSimpleMethod(){
  	console.log("hey their");
    return a*a;
  	//ki vo decorate karega kaise yeh cheez aayegi
  }
} 
    



