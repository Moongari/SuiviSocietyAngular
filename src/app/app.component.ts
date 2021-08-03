import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable,interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit,OnDestroy {
  title: string;
  constructor() {
    this.title = 'SUIVI DES SOCIETES';
  }
  ngOnDestroy(): void {

    this.counterSubscription.unsubscribe();
  }
  secondes: number;
  counterSubscription : Subscription
  ngOnInit(): void {

    const counter = interval(1000);
    // counter.subscribe((value: number) => (this.secondes = value)),
    //   (error: any) => console.log('error'),
    //   () => console.log('completed');

    this.counterSubscription = counter.subscribe((value: number) => (this.secondes = value));

  }
}



