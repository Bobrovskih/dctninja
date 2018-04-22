import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { utms } from '../../models';

@Component({
    selector: 'app-utm-generator',
    templateUrl: './utm-generator.component.html',
    styleUrls: ['./utm-generator.component.sass']
})
export class UtmGeneratorComponent implements OnInit {
    utms = utms;
    constructor() { }

    ngOnInit() {
    }

}
