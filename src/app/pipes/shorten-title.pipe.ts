import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenTitle'
})
export class ShortenTitlePipe implements PipeTransform {

  transform(value: string, wordCount: number): string {
    return value.split(" ").slice(0,wordCount).join(" ");
  }

}
