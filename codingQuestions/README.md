# CodingQuestions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Question 1

How To create a progress bar in Angular that increases every second and stops when it reaches completion, you can use Angular's built-in features along with some JavaScript logic.

To create a progress bar in Angular that increases every second and stops when it reaches completion, you can use Angular's built-in features along with some JavaScript logic. Here's a basic example using Angular components and RxJS Observables:

1. **HTML Template (progress-bar.component.html)**:
```html
<div class="progress-container">
  <div class="progress-bar" [style.width.%]="progress"></div>
</div>
```

2. **Component Logic (progress-bar.component.ts)**:
```typescript
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  progress: number = 0;
  intervalSubscription: Subscription;

  ngOnInit() {
    this.intervalSubscription = interval(1000).subscribe(() => {
      this.progress += 10; // Increase progress by 10% every second
      if (this.progress >= 100) {
        this.progress = 100; // Ensure progress doesn't exceed 100%
        this.intervalSubscription.unsubscribe(); // Stop the interval when progress is completed
      }
    });
  }

  ngOnDestroy() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe(); // Unsubscribe to avoid memory leaks
    }
  }
}
```

3. **Component Styles (progress-bar.component.css)**:
```css
.progress-container {
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 5px;
  margin-bottom: 10px;
}

.progress-bar {
  height: 20px;
  background-color: #4caf50;
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
}
```

4. **Usage in Parent Component**:
```html
<app-progress-bar></app-progress-bar>
```

This example creates a simple progress bar component that increases by 10% every second until it reaches completion (100%). Once the progress reaches 100%, the interval subscription is unsubscribed to stop further updates.

You can customize the appearance and behavior of the progress bar by adjusting the CSS styles and the logic in the component's TypeScript file as needed.
