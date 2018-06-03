import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
//we are injecting the module inside this service




@Injectable({//making the injectable decorator
// this tells angular that this service can also have some injectables in it so we need that decorative right here    
  providedIn: 'root'
})
export class RecordsService {//here we are defining the core functionality of the decorator 

  constructor(private http: HttpClient) { }//or here http client service accessign the data inside httpclient 
  // via this.http 


  getData(){//always follows the camel case 
	//this is a array of json objects which is called as ITERABLE DATA in angular
	return this.http.get<myData>('http://localhost:1600/file.php')//epecting the kind of data to be returned 
	// here i am expecting the kind of data to be returned as an object which contains object right  
		


		//well this is the subscription operator of rxjs which is reactive javascript its just a way to 
		// handle asynchronous tasks  rxjs is based on the pipeline model  so for rxjs an asynchronous request can be 
		// thought of as a pipe where your endpoint would emit certain events every time and you can subscribe
		// to them   
	// [
	//  {
	//     name: 'Ishmeet',
	//     online: true 
	//  },

	//  {
	//     name: 'tarun',
	//     online: false
	//  }
	// ] 	  		
  }//this service returns an array of json objects 

}

