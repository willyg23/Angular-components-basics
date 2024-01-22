import { Component, OnInit, OnDestroy } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  boats;
  constructor(){}

  //OnInit is the first time change detection runs in this component
  //The OnInit lifecycle hook is for
    //setup, maybe fetching data from an api, setting up a reactive form, etc.
  ngOnInit(): void {
    this.boats = of([
      {
        name: 'StarFire',
        year: 1977,
        img: 'assets/boat.jpg'
      },
      {
        name: 'Oracle',
        year: 2015,
        img: 'assets/boat2.jpg'
      }
    ])
  }


//important concept in angular: change detection
/*
  behind the scenes, angular is using zone.js
  which listens for any events and asynchronus activity in your app
  then re-render components as needed
*/
//determine when change is happening by using ngDoCheck lifecycle hook
ngDoCheck(){
  //check detection
  //usually don't use for anything significant, but can be useful for debugging
  //when building an interactive app, this lifecycle hook will trigger all the time
}


  ngAfterViewInit(){
    //idk what this really does. fireship comment says
    //child views loaded
  }

  //the last thing in a components lifecycle is being destroyed
  // angular might commonly unsubscribe to an observeable to prevent memory leaks and/or performance issues
  ngOnDestroy(): void {
      
  }

  title = 'Angular ${VERSION.full} is neat!';

  //binding our typescript to HTML
  clicked = false;
  
  handleClick(){
    this.clicked = true;
  }

  /* Directives
  Directive: basically a component, but without it's own html or css 
  instead,
  it attaches to a host element, and changes the behavior of it

  can have it's own variables. boat.name returns "StarFire"
  */
  boat = {
    name: 'StarFire',
    year: 1977,
    img: 'assets/boat.jpg'
  };

  //converting the 'boats' array into an observable via the rxjs 'of' method
  //observable == provides a unified way to work with different kinds of data
    //
  //now it's an observable object, which won't work with our for loop
  //thus we add the async pipe to our for loop, which
    // which converts the observable to an array by subscribing to it.
    // in addition, it also unsubscribes when this component is destroyed.
  //in a real app, we'd likely be fetching these boats asynchronously from a database. 
  //the async pipe let's us treat them more like a synchronous, plain java array


  // boats = of([
  //   {
  //     name: 'StarFire',
  //     year: 1977,
  //     img: 'assets/boat.jpg'
  //   },
  //   {
  //     name: 'Oracle',
  //     year: 2015,
  //     img: 'assets/boat2.jpg'
  //   }
  // ])


  /*

    building custom directives in angular 
    console: ng g d (name of directive)
    more notes in magnifier.directives.ts

  */


/*
component lifecycle:
a component is just a class, so the first thing in it's life cycle is the constructor being called
compenents also have: relationships with other components, bindings initialized in the html

you typically don't do anything in the constructor besides add dependencies
bc your property binding aren't guarenteed to be available until you run ngOnInit
*/

/*

smart vs dumb components
aka stateful vs stateless, container vs presentational

smart component: generally a page or container which controls how things work throughout the app
dumb component: concerned only with presentation logic

*/


}
