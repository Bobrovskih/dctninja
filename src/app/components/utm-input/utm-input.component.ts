import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-utm-input',
  templateUrl: './utm-input.component.html',
  styleUrls: ['./utm-input.component.sass']
})
export class UtmInputComponent implements OnInit {
  /** контроллер инпута */
  utmControl = new FormControl();
  /** имя utm метки */
  @Input() utmName: string;
  /** примеры для автокомплита */
  @Input() utmOptions: string[];
  /** плейсхолдер */
  @Input() utmPlaceholder: string;

  constructor() { }

  ngOnInit() {
  }

}
