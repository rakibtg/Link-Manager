import { Component } from '@angular/core';

@Component({
  selector : 'linkZone-app',
  template : `
    <div class="container">
      
      <div>
        <a href="/" style="margin: 20px 0px; 
          display:inline-block; background:#444; 
          padding: 5px 30px; border-radius: 100px; 
          color:#fff;">
          <b>PinIt</b>
        </a>
      </div>

      <pm-products></pm-products>
    </div>
  `
})

export class AppComponent {
  pageTitle : string = 'Links Manager'
}