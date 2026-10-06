import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinalDate',
})
export class OrdinalDatePipe implements PipeTransform {
  transform(value: string | Date | null | undefined): string {
    if (!value) {
      return '';
    }

    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return '';
    }

    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear() - 2000;

    const oneYearInMs = 365 * 24 * 60 * 60 * 1000;
    const isMoreThanAYearOld = Date.now() - date.getTime() > oneYearInMs;

    if (isMoreThanAYearOld) {
      return `${day}${this.getOrdinalSuffix(day)} ${month} ${year}`;
    }
    return `${day}${this.getOrdinalSuffix(day)} ${month}`;
  }

  private getOrdinalSuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
}
