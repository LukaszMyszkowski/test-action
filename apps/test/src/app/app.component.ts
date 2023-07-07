import { Component } from '@angular/core';

@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  disabled: boolean | undefined = false;
  checked: boolean | undefined = false;
  indeterminate: boolean | undefined = true;
}
