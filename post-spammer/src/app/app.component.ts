import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 constructor(){}
 
 spam(spamText: HTMLInputElement, num: HTMLInputElement): boolean {
   let cont = Number(num.value); 
   for(let i:number =0; i< cont; i++){
     console.log(`spamText: ${spamText.value} and spamNum: ${i}`);
    }
  return false;
  }
  
}
