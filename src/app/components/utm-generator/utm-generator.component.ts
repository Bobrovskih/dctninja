import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-utm-generator',
  templateUrl: './utm-generator.component.html',
  styleUrls: ['./utm-generator.component.sass']
})
export class UtmGeneratorComponent implements OnInit {

  utmSourceControl = new FormControl();
  utmSourceOptions = [
    'yandex',
    'google',
    'vk',
    'mail',
  ];

  utmMediumControl = new FormControl();
  utmMediumOptions = [
    'cpc',
    'ppc',
    'banner',
    'email',
    'organic',
  ];

  constructor() { }

  ngOnInit() {
  }

}
