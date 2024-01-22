import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {

  transform(value: number): string {
    return value.toString().substr(2,2);
  }
  //value == whatever value is inside your handlebar syntax in your html
  // handblebar == {{}}
  //what you return is what you want to be shown in the html
  //this function return the last two digits of the boat.year
}
