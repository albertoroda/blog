import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortString'
})
export class ShortStringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.substring(0, 70) + '...';
  }

}
