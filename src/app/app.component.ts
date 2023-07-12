import { Component } from '@angular/core';
import filters_config from './filter/config';
import { FilterConfig } from './filter/filter.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atlas-filter';

  config_filter: FilterConfig = filters_config;
}
