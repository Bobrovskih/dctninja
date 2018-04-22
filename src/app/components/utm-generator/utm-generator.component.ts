import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { utms } from '../../models';

@Component({
    selector: 'app-utm-generator',
    templateUrl: './utm-generator.component.html',
    styleUrls: ['./utm-generator.component.sass']
})
export class UtmGeneratorComponent implements OnInit {
    /** модели utm меток */
    utms = utms;
    /** ссылка с utm метками (результат) */
    result: string = '';
    /** адрес сайта */
    site: string = '';
    constructor() { }

    ngOnInit() {
    }

    /** обновить результат */
    updateResult() {
        const qs = this.utms
            .filter(utm => utm.value)
            .map(utm => `${utm.name}=${utm.value}`)
            .join('&');

        const search = qs ? `?${qs}` : '';
        this.result = `${this.site}${search}`;
    }

    /** открыть в новой вкладке */
    open() {
        window.open(this.result, '_blank');
    }

    /** скопировать в буффер */
    copy() {
        const event = (e: ClipboardEvent) => {
            e.clipboardData.setData('text/plain', this.result);
            e.preventDefault();
            document.removeEventListener('copy', event);
        }
        document.addEventListener('copy', event);
        document.execCommand('copy');
    }

}
