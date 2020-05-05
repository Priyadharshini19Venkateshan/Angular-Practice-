import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rev'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): string {
    return value.split("").reverse().join("");
  }

}
