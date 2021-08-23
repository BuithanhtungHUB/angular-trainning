import { Injectable } from '@angular/core';
import {
  addDays,
  addMonths,
  addYears,
  differenceInDays,
  differenceInHours,
  differenceInMonths,
  differenceInYears
} from 'date-fns';


@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }

  getDiffToNow(diff: string | number | Date): string {
    const result: string[] = [];
    const now = new Date();
    diff = new Date(diff);
    const years = differenceInYears(now, diff);
    if (years > 0) {
      result.push(`${years} years`);
      diff = addYears(diff, years);
    }

    const months = differenceInMonths(now, diff);
    result.push(`${months} months`);
    if (months > 0) {
      diff = addMonths(diff, months);
    }

    const days = differenceInDays(now, diff);
    result.push(`${days} days`);
    if (days > 0) {
      diff = addDays(diff, days);
    }

    const hours = differenceInHours(now, diff);

    if (hours > 0) {
      result.push(`${hours} hours`);
    }

    return result.join(' ');
  }
}
