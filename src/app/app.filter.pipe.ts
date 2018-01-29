import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})
export class AppFilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[] {
        if (!items) {
            return [];
        }

        if (!field && !value) {
            return items;
        }

        if (typeof value !== 'undefined') {
            if (!value || value.length === 0) {
                return items;
            }
            return items.filter(it =>
                it[field].toLowerCase().indexOf(value.toLowerCase()) !== -1);
        } else {
            return items.filter(it =>
                it.toLowerCase().indexOf(field.toLowerCase()) !== -1);
        }
    }
}
