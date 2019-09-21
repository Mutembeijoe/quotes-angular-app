import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    const minutes = parseInt((value / 60000).toFixed(0), 10);

    if ( minutes < 1 ) {
      return `Just now`;
    } else if (minutes >= 60 && minutes < 1440) {
      return `About ${(minutes / 60).toFixed(0)} hours ago`;
    } else if (minutes >= 1 && minutes < 60 ) {
      return `About ${minutes} minutes ago `;
    } else if (minutes >= 1440 && minutes <= 10080 ) {
      return `About ${(minutes / 1440).toFixed(0)} day(s) ago`;
    } else if (minutes >= 10080 && minutes <= 14400 ) {
      return `About a week ago`;
    } else {
      return `More than 1 week ago`;
    }
  }

}
