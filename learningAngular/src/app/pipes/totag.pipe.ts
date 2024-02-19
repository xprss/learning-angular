import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totag',
  standalone: true
})
export class TotagPipe implements PipeTransform {

  transform(input: string): string[] {
    const tags = input.split(",");
    const outTags: string[] = [];

    for (let tag of tags) {
      tag = tag.replace(/ /g, "");
      outTags.push(tag);
    }

    return outTags;
  }

}
