import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {MaterialModule} from '@angular/material';

import {FormsModule} from '@angular/forms';//NgModel is a directive in an FormsModule which is a part of a form  
// we are importing this which is an independent module capable of running stangdalone...



import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import {RecordsService} from './records.service'

import {HttpClientModule} from '@angular/common/http'



@NgModule({//this is the root decorator 
    //it is used to add components and directives and other stuff like pipes in to the application  
  declarations: [//here compoenents ki declarations hoti hai 
    AppComponent,//here this is the root component 
    HelloComponent,
  ],
    
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
	//forms module me NgModel hai//no need to import this root decorator here because ham usi ke andar to define kar rhe hai  
  ],
  providers: [RecordsService],//service providers they are used to inject services

  //if i inject the service to the provider here ..then our service will be available to the every compoennt 
  // in my application which requests it 




  bootstrap: [AppComponent]//here this bootstrap form the app module as well 
})
export class AppModule { }//component ki class export karani hai bas 
