import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class convertTime implements PipeTransform {
    
    transform(value: number): string {
      let timeMs = value;
      function parseMillisecondsIntoReadableTime(milliseconds){
        //Get hours from milliseconds
        var hours = (milliseconds / (1000*60*60) ) % 24;
        var absoluteHours = Math.floor(hours);
        var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;
      
        //Get remainder from hours and convert to minutes
        var minutes = (hours - absoluteHours) * 60;
        var absoluteMinutes = Math.floor(minutes);
        var m = absoluteMinutes > 9 ? absoluteMinutes : '0' +  absoluteMinutes;      
      
        return h + ':' + m;
      }
      var currentTime = parseMillisecondsIntoReadableTime(timeMs);
      return currentTime;
}

}
