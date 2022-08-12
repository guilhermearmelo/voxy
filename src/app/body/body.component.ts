import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  words = "";
  count! : number;
  result = "";

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const words = `${this.words}`
    this.count = this.wordCounter(words)
    if(this.count == 0){
      this.result = "0 words were typed"
    } else {
      this.result = this.count + " words were typed"
    }

   // alert(this.count)
  }

  wordCounter(str : string) {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }

}
