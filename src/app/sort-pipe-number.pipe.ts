import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipeNumber',
  pure: false
})
export class SortPipeNumber implements PipeTransform {
    
    transform(array: Array<string>, args: string): Array<string> {
        function compareNumber(a, b) {
            return a[args] - b[args];
        }
        if (array !== undefined ) {
            array.sort(compareNumber);     
        }
        return array;
}

}
