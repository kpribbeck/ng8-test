import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  serverData: any;

  ngOnInit() {
    // Simulating an API call from your CQRS Backend
    this.serverData = {
      layoutType: "VERTICAL_SPLIT_WITH_TICKER",
      components: {
        mainContent: {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Angular 8 Simulation active.",
          imageUrl: "https://picsum.photos/1080/1920"
        },
        footer: {
          msg: "+++ LEGACY ANGULAR ENGINE RUNNING +++ VERSION 8.0.0 +++ SYSTEM STABLE +++",
          speed: "15s"
        }
      }
    };
  }
}