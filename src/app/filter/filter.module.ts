import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { FilterItemComponent } from './filter-item/filter-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilterComponent,
    FilterItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [FilterComponent]
})
export class FilterModule { }
