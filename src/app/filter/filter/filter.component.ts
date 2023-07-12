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
  defaultValue: string = "";

  ngOnInit(): void {
    this.config.filters.forEach((filter_config) => {
      this.filters.set(filter_config.type, new FilterItem(filter_config))
    })
    this.defaultValue = this.config.defaultValue;
    this.autoStart();
    this.updateFilter();
  }

  update(hash: string | Array<string>, filter: FilterItem) {
    filter.selected = hash;
    this.updateFilter();
    this.notify(filter)
  }

  notify(filter: FilterItem) {
    this.filters.forEach((f) => {
      if (f.config.filter_watch.includes(filter.config.type)) {
        f.update();
      }
    })

    this.filters.forEach((filter) => {
      this.filter[filter.config.key] = filter.selected;
    })
  }

  reset() {
    this.filters.forEach((f) => {
      f.reset();
    })
    this.autoStart();
    this.updateFilter();
  }

  autoStart() {
    this.filters.forEach((f) => {
      if (f.config.autostart) {
        f.init();
      }
    })
  }

  updateFilter() {
    this.filters.forEach((filter) => {
      this.filter[filter.config.key] = filter.selected;
    })
  }

  aplicar() { }

  counter() {
    return Object.values(this.filter).filter((f) => {
      return f !== this.defaultValue
    }).length
  }
}

class FilterItem {
  config: FilterItemConfig;
  selected: string | Array<string> = "";
  data: any

  constructor(config: FilterItemConfig) {
    this.config = config;
    this.data = config.data;
    this.init();
  }


  init() {
    if (this.data.length === 1) {
      // console.log(this.config.label, this.config.data.length)
      this.selected = this.data[0].hash;
    }
  }

  update() {
    this.init();
    console.log(`Atualizando o filtro: ${this.config.label}`)
  }

  reset() {
    this.selected = "";
  }

  status() {
    if (this.config.required && this.selected) {
      return "S"
    }
    if (this.config.required) {
      return "R"
    }
    if (this.selected) {
      return "S"
    }

    return ""
  }
}
