import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatDividerModule} from '@angular/material/divider';
<<<<<<< HEAD
import {MatBadgeModule} from '@angular/material/badge';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatStepperModule } from '@angular/material/stepper'
import { MatTabsModule } from '@angular/material/tabs'
import { BrowserModule } from '@angular/platform-browser';
import { CustomInputComponent } from "./components/custom-input/custom-input.component";
import { FormControl, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
=======
import {MatBadgeModule} from '@angular/material/badge'
import { ScrollingModule } from '@angular/cdk/scrolling'
import {MatStepperModule} from '@angular/material/stepper'
>>>>>>> 4c912d4b4a0ea5543ca0d17f8e5f03b6e1fa37ec

@NgModule({
    imports:[
        MatIconModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatGridListModule,
        MatDividerModule,
        MatBadgeModule,
        ScrollingModule,
<<<<<<< HEAD
        MatSnackBarModule,
        FlexLayoutModule,
        MatStepperModule,
        MatTabsModule, 
        CustomInputComponent
    ],
    declarations: [
      CustomInputComponent
=======
        MatStepperModule
>>>>>>> 4c912d4b4a0ea5543ca0d17f8e5f03b6e1fa37ec
    ]
  })
  export class MatModule { }