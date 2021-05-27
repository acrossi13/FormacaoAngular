import { NgModule } from '@angular/core';
import { DarkenOnRoverDirective } from './darken-on-hover.directive';


@NgModule({
    declarations:[
       DarkenOnRoverDirective 
    ],
    exports:[
        DarkenOnRoverDirective
    ]
})
export class DarkenOnHoverModule{}