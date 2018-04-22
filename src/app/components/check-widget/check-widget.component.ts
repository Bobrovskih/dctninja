import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-check-widget',
    templateUrl: './check-widget.component.html',
    styleUrls: ['./check-widget.component.sass']
})
export class CheckWidgetComponent implements OnInit {

    /** идентификатор виджета */
    wid: string;

    constructor() { }

    ngOnInit() {
    }

    /**
     * код виджета дкт
     */
    dct(w, d, u, i, o, s?, p?) {
        if (d.getElementById(i)) { return; } w['MangoObject'] = o;
        w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) }; w[o].u = u; w[o].t = Date.now();
        s = d.createElement('script'); s.async = 1; s.id = i; s.src = u;
        p = d.getElementsByTagName('script')[0]; p.parentNode.insertBefore(s, p);
    }

    /**
     * Сбрасывает данные виджета
     */
    reset() {
        this.deleteCookie('mgo_sb_current');
        this.deleteCookie('mgo_sb_first');
        this.deleteCookie('mgo_sb_migrations');
        this.deleteCookie('mgo_sb_session');
        window.Mango = undefined;
        window.MangoObject = undefined;
        window.mgo = undefined;
    }

    /**
     * Удаляет куку
     * @param name имя куки
     */
    deleteCookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    /**
     * инит нового виджета дкт
     */
    build() {
        console.log('build', this.wid);
        this.reset();
        this.dct(window, document, '//widgets.mango-office.ru/widgets/mango.js', 'mango-js', 'mgo');
        window.mgo({
            calltracking: {
                id: this.wid,
                elements: [
                    {
                        selector: '#mango-calltracking1',
                    },
                ],
                onReady: function (event) {
                    console.log('onReady', event);
                }
            }
        });
    }

}
