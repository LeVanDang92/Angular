import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeShortName',
})
export class PipeShortNamePipe implements PipeTransform {
  transform(fullName: string): string {
    const parts = fullName.split(' ');
    if (parts.length === 0) {
      return fullName; // Return the original name if it's empty or has no spaces
    }
    const firstName = parts[0];
    const lastName = parts.length > 1 ? parts[parts.length - 1] : '';
    return `${firstName} ${lastName}`;
  }
}
