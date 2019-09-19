import { Pipe, PipeTransform } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: Date, ...args: any[]): any {
  }

}
