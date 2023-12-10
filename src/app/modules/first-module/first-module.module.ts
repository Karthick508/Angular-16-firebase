import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstModuleRoutingModule } from './first-module-routing.module';
import { FirstModuleComponentComponent } from './components/first-module-component/first-module-component.component';
import { RendererTestCompComponent } from './components/first-module-component/renderer-test-comp/renderer-test-comp.component';
import { RedClrDirDirective } from './directives/red-clr-dir.directive';

import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';


const materialModules: any[] = [
  MatListModule,
  MatSidenavModule,
  MatCardModule,
  MatRadioModule,
  MatChipsModule,
  MatPaginatorModule,
  MatButtonModule,
  MatRippleModule,
  MatTableModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatSortModule,
  MatSlideToggleModule,
  MatIconModule,
  MatTabsModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatSnackBarModule,
  MatStepperModule,
  MatBadgeModule,
  MatProgressBarModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatTreeModule
];

@NgModule({
  declarations: [
    FirstModuleComponentComponent,
    RendererTestCompComponent,
    RedClrDirDirective,
  ],
  imports: [
    CommonModule,
    FirstModuleRoutingModule,
    ...materialModules
  ],
  exports: [...materialModules],
  
})
export class FirstModuleModule { }
