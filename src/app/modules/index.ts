import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const modules = [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
];

export {
    modules,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
};