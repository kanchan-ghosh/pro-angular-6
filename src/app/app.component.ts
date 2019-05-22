import { Component } from '@angular/core';
import { Model } from "./model"

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

@Component({
  selector: "todo-app",
  templateUrl: "app.component.html"
})

export class AppComponent {
  // title = 'todo';
  model = new Model();

  getName() {
    return this.model.user;
  }
}
