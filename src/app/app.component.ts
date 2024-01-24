import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-udemy-project';
  loadedFeature = 'recipe';
  onNavigate(newFeature: string) {
    this.loadedFeature = newFeature;
  }
}
