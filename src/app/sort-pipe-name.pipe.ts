import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipeName'
})
export class SortPipeName implements PipeTransform {
    
    transform(array: Array<string>, args: string): Array<string> {
        function compareName(a, b) {
            if (a[args] < b[args]) return -1;
            if (a[args] > b[args]) return 1;
            return 0;
        }
        if (array !== undefined) {
            array.sort(compareName);
        }
        return array;
}

}
