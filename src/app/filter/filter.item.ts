import { FilterMediator } from "./filter.mediator";
import { FilterItemConfig } from "./filter.models";
import { FiltroHistoricoLancamentos } from "./filter.service";
import Noh from "./noh";

export class FilterItem {
    enabled: boolean = false;
    loading: boolean = false;
    noh = new Noh();

    data: any = [];

    name: string = "";
    config: FilterItemConfig;
    selected: string | string[];
    mediator: FilterMediator

    constructor(config: FilterItemConfig, mediator: FilterMediator) {
        this.config = config;
        this.mediator = mediator;
        this.name = this.config.label
        this.selected = this.mediator.defaultValue

        if (this.config.autostart) {
        }
        this.getData();
    }

    getData() {
        this.data = this.config.data;
        if (this.data.length == 1) {
            this.selected = this.data[0].hash;
        }
        this.enabled = this.data.length > 0;
    }

    update() {
        console.log(this.name)
        //this.selected = hash;
    }

    isValid() {
        if (this.config.validate !== undefined) {
            return this.config.validate(this.config)
        }
        if (this.config.required) {
            let t = this.selected !== this.mediator.defaultValue;
            return this.selected !== this.mediator.defaultValue;
        }
        return true;
    }

    reset() {
        if (this.selected !== this.mediator.defaultValue) {
            this.noh.w({ t: this.config.label, msg: "Resetando o filtro de Ano letivo atraves do mediator" })
        }
        this.selected = this.mediator.defaultValue;
    }

}