import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { FilterItemComponent } from './filter-item/filter-item.component';



@NgModule({
  declarations: [
    FilterComponent,
    FilterItemComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [FilterComponent]
})
export class FilterModule { }
