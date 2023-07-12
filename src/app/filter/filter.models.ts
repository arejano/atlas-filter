
export interface FilterConfig {
  sync: boolean;
  filters: Array<FilterItemConfig>;
}

export interface FilterItemConfig {
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

export enum FilterType {
  Agrupamento,
  AnoLetivo,
  Avaliacao,
  Chamada,
  Disciplina,
  Escola,
  Rede,
  Serie,
  TipoAvaliacao,
  Turma,
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

