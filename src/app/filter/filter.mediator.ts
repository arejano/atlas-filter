import { FilterItem, } from "./filter.item";
import { FilterConfig, FilterGetRequest, FilterType } from "./filter.models";

export class FilterMediator {
    filters: Map<FilterType, FilterItem> = new Map();
    defaultValue: string = "";

    constructor(config: FilterConfig,) {
        config.filters.forEach(config => {
            this.filters.set(config.type, new FilterItem(config, this))
        })
    }

    notify(filter: FilterItem) {
        this.filters.forEach((f) => {
            if (f.config.filter_watch.includes(filter.config.type)) {
                f.update();
            }
        })
    }

    getFilterRequest(): FilterGetRequest {
        let filter = {}
        this.filters.forEach((f) => {
            filter[f.config.key] = f.selected
        })
        return filter;
    }

    getFilters(): Array<FilterItem> {
        return Array.from(this.filters.values());
    }

    reset() {
        this.filters.forEach((f) => {
            f.reset();
        })
    }

    isValid() {
        return Array.from(this.filters.values()).filter((x) => {
            return !x.isValid();
        }).length === 0
    }

    counter() {
        return Array.from(this.filters.values()).filter((x) => {
            return x.selected !== this.defaultValue;
        }).length
    }
}
