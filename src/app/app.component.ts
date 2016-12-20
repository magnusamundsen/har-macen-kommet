import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  answer = 'Nei';
  showAnswer : boolean = false;

  ngOnInit() {
    setTimeout(function() { this.showAnswer = true; }.bind(this), 13000);  
  }
}
