import { Component, Input, OnInit } from '@angular/core';
import { FilterConfig, FilterItemConfig, FilterType } from '../filter.models';
import { FilterMediator } from '../filter.mediator';
import { FilterItem } from '../filter.item';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() config: FilterConfig;

  mediator: FilterMediator;

  ngOnInit(): void {
    this.mediator = new FilterMediator(this.config);
    this.mediator.filters.get(FilterType.AnoLetivo).selected = "2023"
  }

  aplicar() { 
    const req = this.mediator.getFilterRequest();
    console.log(req)
  }
}