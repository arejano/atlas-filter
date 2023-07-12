
export interface FilterConfig {
  defaultValue: string;
  sync: boolean;
  filters: Array<FilterItemConfig>;
}

export interface FilterItemConfig {
  autostart?: boolean;
  data?: any;
  required?: boolean;
  disabledLabel: string;
  placeholder: string;
  label: string;
  key: string;
  type: FilterType;
  update_list: Array<FilterType>;
  reset_time?: number | null,
  filter_watch: Array<FilterType>;
}

//Achar uma forma de ordenar sem utilizar o enum
export enum FilterType {
  AnoLetivo,
  Rede,
  Escola,
  Agrupamento,
  Turma,
  TipoAvaliacao,
  Disciplina,
  Chamada,
}

export interface FilterData {
  hash: string,
  descricao: string,
}

export interface FilterRequestModel {
  hashAnoletivo?: string,
  hashRede?: string,
  hashEscola?: string
}

