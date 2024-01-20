import { Component } from '@angular/core';
import * as VKID from '@vkid/sdk';

VKID.Config.set({
  app: 51837393,
  redirectUrl: 'https://alshanovd.github.io/vkauth/loggedin'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vkauth';

  vkauth(): void {
    VKID.Auth.login();
  }
}
