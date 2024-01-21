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

  okauth(): void {
    // window.location.replace('https://connect.ok.ru/oauth/authorize?client_id=512002034283&scope=VALUABLE_ACCESS;LONG_ACCESS_TOKEN;GET_EMAILPHOTO_CONTENT&response_type=token&redirect_uri=https://alshanovd.github.io/vkauth/&layout=w&state=state');
    window.location.replace('https://connect.ok.ru/oauth/authorize?client_id=512002034283&scope=VALUABLE_ACCESS;LONG_ACCESS_TOKEN;GET_EMAILPHOTO_CONTENT&response_type=token&redirect_uri=https://alshanovd.github.io/vkauth/loggedin/&layout=w&state=state');
  }
}
