import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'bin2dec'
})

export class Bin2decPipe implements PipeTransform {

  private answer = 0;
  private power  = 2;

  // Get the value being piped.
  transform(value: string): number {
    const bin = value.split('').map(x => parseInt(x, 10));
    return (bin.length >= 1) ? this.converter(bin) : 0;
  }

  // Convert bin to dec.
  converter(numArray: number[]): number {

    let size = numArray.length - 1;
    let pos = 0;

    this.answer = 0;

    while (size >= 0) {
      if (numArray[pos] === 1) {
        this.answer += Math.pow((this.power * numArray[pos]), size);
      }
      pos++;
      size--;
    }
    return this.answer;
  }

}
