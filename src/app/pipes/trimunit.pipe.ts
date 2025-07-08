import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimunit'
})
export class TrimunitPipe implements PipeTransform {

  transform(value: string, requiredLength: number): string {
    if (value) {
      return value.slice(0, requiredLength);
    }
    return value;
  }

}
