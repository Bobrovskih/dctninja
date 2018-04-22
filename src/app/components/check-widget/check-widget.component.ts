import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { log } from '../../services';

@Component({
    selector: 'app-check-widget',
    templateUrl: './check-widget.component.html',
    styleUrls: ['./check-widget.component.sass'],
})
export class CheckWidgetComponent implements OnInit {

    /** идентификатор виджета */
    wid: string;
    /** подменный номер */
    dynamicNumber: string;
    /** атрибут href tel:<number> */
    telDynamicNumber: string;
    constructor(
        private ref: ChangeDetectorRef, 
    ) { }

    ngOnInit() {
    }

    /**
     * код виджета дкт
     */
    dct(w, d, u, i, o, s?, p?) {
        if (d.getElementById(i)) {
            return;
        }
        w['MangoObject'] = o;
        w[o] = w[o] || function () {
            (w[o].q = w[o].q || []).push(arguments)
        };
        w[o].u = u;
        w[o].t = Date.now();
        s = d.createElement('script');
        s.async = 1;
        s.id = i;
        s.src = u;
        p = d.getElementsByTagName('script')[0];
        p.parentNode.insertBefore(s, p);
    }

    /**
     * очищает дкт данные
     */
    reset() {
        const script = document.getElementById('mango-js');
        if (script) {
            script.remove();
        }
        this.deleteCookie('mgo_sb_current');
        this.deleteCookie('mgo_sb_first');
        this.deleteCookie('mgo_sb_migrations');
        this.deleteCookie('mgo_sb_session');
        (<any>window).Mango = undefined;
        (<any>window).MangoObject = undefined;
        (<any>window).mgo = undefined;
        this.dynamicNumber = '';
        this.telDynamicNumber = '';
    }

    /**
     * Удаляет куку
     * @param name имя куки
     */
    deleteCookie(name: string) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    }

    /**
     * инит нового виджета дкт
     */
    build() {
        log('build', this.wid);
        this.reset();
        this.dct(window, document, '//widgets.mango-office.ru/widgets/mango.js', 'mango-js', 'mgo');
        (<any>window).mgo({
            calltracking: {
                id: this.wid,
                onReady: this.ready.bind(this),
            },
        });
    }

    /**
     * после загрузки дкт
     */
    ready(e: { number: string }) {
        log('ready', e, this, this.dynamicNumber);
        this.dynamicNumber = e.number;
        this.telDynamicNumber = `tel:${e.number}`;
        this.ref.detectChanges();
    }

}
