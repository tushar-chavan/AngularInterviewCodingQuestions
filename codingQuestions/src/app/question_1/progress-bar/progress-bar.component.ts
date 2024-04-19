import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {

  progress: number = 0;
  intervalSubscription!: Subscription;

  ngOnInit() {
  this.intervalSubscription = interval(1000).subscribe(()=>{
    this.progress += 10;

    if (this.progress >= 100) {
      this.progress = 100;
      this.intervalSubscription.unsubscribe();
    }
  })
  }

}
