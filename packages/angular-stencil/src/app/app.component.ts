import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public expanded: boolean = false;

  public onToggleButtonClick() {
    this.expanded = !this.expanded;
  }
}
