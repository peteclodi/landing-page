import {Component, ViewEncapsulation} from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
   moduleId: module.id,
   selector: 'peteclodi-com-app',
   templateUrl: 'peteclodi.com.component.html',
   styleUrls: ['peteclodi.com.component.css'],
   directives: [HeaderComponent],
   encapsulation: ViewEncapsulation.None
})

export class PeteClodiComAppComponent {
    title = 'peteclodi.com works!';
}
