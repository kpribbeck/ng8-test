import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  serverData: any;

  constructor() { }

  ngOnInit() {
    this.serverData = {
      layoutType: "VERTICAL_SPLIT_WITH_TICKER",
      components: {
        mainContent: {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is your TV Engine test.",
          imageUrl: "https://picsum.photos/1080/1920"
        },
        footer: {
          msg: "+++ SYSTEM STATUS: ONLINE +++ DEPLOYMENT TEST +++",
          speed: "15s"
        }
      }
    };
  }
}