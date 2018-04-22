import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

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
  /** значение изменилось */
  @Output() utmChange = new EventEmitter<string>();
  /** подписка на изменение value */
  valueChange$: Subscription;

  constructor() { }

  ngOnInit() {
    this.valueChange$ = this.utmControl
      .valueChanges
      .subscribe(value => this.utmChange.emit(value));
  }

  ngOnDestroy(): void {
    this.valueChange$.unsubscribe();
  }


}
