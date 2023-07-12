import { Component, Input, OnInit } from '@angular/core';
import { FilterConfig, FilterItemConfig, FilterType } from '../filter.models';

import { NgForm, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() config: FilterConfig;

  filters: Map<FilterType, FilterItem> = new Map();
  filter: any = {};

  ngOnInit(): void {
    this.config.filters.forEach((filter_config) => {
      this.filters.set(filter_config.type, new FilterItem(filter_config))
    })
    this.update(`000`, this.filters.get(FilterType.AnoLetivo));
  }

  update(hash: string, filter: FilterItem) {
    this.notify(filter)
  }

  notify(filter: FilterItem) {
    console.log(filter)
    filter.config.filter_watch.forEach((e) => {
      let filter = this.filters.get(e);
      if (filter !== undefined) {
        filter.update();
      }
    })
  }

}

class FilterItem {
  config: FilterItemConfig;
  selected: string | Array<string> = "";

  data = [
    { hash: '000', descricao: 'XXX', },
    { hash: '000', descricao: 'XXX', },
    { hash: '000', descricao: 'XXX', },
    { hash: '000', descricao: 'XXX', },
    { hash: '000', descricao: 'XXX', },
    { hash: '000', descricao: 'XXX', },
    { hash: '000', descricao: 'XXX', },
    { hash: '000', descricao: 'XXX', },
    { hash: '000', descricao: 'XXX', },
    { hash: '000', descricao: 'XXX', },
    { hash: '000', descricao: 'XXX', },
  ]

  constructor(config: FilterItemConfig) {
    this.config = config;
    if (config.type === FilterType.AnoLetivo) {
      this.data = [{ hash: '2023', descricao: '2023', }];
    }
    this.getData(this.data);
  }

  getData(data: any) {
    this.data = data;
    if (this.data.length === 1) {
      this.selected = this.data[0].hash;
    }
  }

  update() {
    console.log(`Update via notify`)
  }
}
