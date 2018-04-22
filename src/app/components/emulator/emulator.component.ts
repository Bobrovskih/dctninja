import { Component, OnInit } from '@angular/core';
import { callTypes } from '../../models';

@Component({
    selector: 'app-emulator',
    templateUrl: './emulator.component.html',
    styleUrls: ['./emulator.component.sass']
})
export class EmulatorComponent implements OnInit {
    /** идентификатор виджета */
    wid: string = '';
    /** токен */
    token: string = '';
    /** с какого числа */
    dateStart: Date;
    /** по какое число */
    dateEnd: Date;
    /** тип звонков */
    callType: number = 0;
    /** только новые звонки */
    isNew: boolean = false;
    /** только качественные */
    isQuality: boolean = false;
    /** формат выгрузки */
    ext: boolean = false;

    /** возможные типы звонков */
    callTypes = callTypes;

    /** результат */
    result: string;

    /** базовый адрес запроса */
    readonly base = 'https://widgets-api.mango-office.ru/v1/calltracking/';

    constructor() { }

    ngOnInit() {
    }

    /** обновить результат */
    updateResult() {
        const dateStart = this.dateStart ? `dateStart=${this.formatDate(this.dateStart)}` : '';
        const dateEnd = this.dateEnd ? `dateEnd=${this.formatDate(this.dateEnd)}` : '';
        const callType = `${this.callType ? `callType=${this.callType}`: ''}`;
        const isNew = `${this.isNew ? 'isNew=1' : ''}`;
        const isQuality = `${this.isQuality ? 'isQuality=1' : ''}`;
        const access_token = `${this.token ? `access_token=${this.token}` : ''}`;
        const ext = this.ext ? '.csv' : '';

        /** query */
        const qo = [
            dateStart,
            dateEnd,
            callType,
            isNew,
            isQuality,
            access_token,
        ];
        /** query string */
        const qs = qo.filter(item => item).join('&');
        /** формат выгрузки */
        this.result = `${this.base}${this.wid}/calls${ext}?${qs}`;
    }


    /** открыть в новой вкладке */
    open() {
        if (!this.result) return;
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

    /** форматирует дату в ISO 8601 short */
    formatDate(date: Date): string {
        return date.toISOString().slice(0, -8) + 'Z';
    }
}
