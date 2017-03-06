
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatAccountNumber'
})
export class FormatAccountNumberPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) return "";

        return "..." + (value.length > 4 ? value.substring(value.length - 4) : value);
    }
}
