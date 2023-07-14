import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { FiltroHistoricoLancamentos } from './filter.service';

@NgModule({
  declarations: [
    FilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [FilterComponent],
  providers: [FiltroHistoricoLancamentos]
})
export class FilterModule { }
