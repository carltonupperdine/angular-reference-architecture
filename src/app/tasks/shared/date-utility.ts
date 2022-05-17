import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtility {
  getDaysRemaining(date: Date): number {
    const ONE_DAY = 1000 * 60 * 60 * 24;
    return Math.ceil((date.getTime() - new Date().getTime()) / ONE_DAY);
  }
}
