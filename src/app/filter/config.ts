import { FilterConfig, FilterType } from "./filter.models";

const filter_config: FilterConfig = {
  sync: true,
  filters: [
    {
      required: true,
      label: "Ano Letivo",
      key: "hashAnoLetivo",
      disabledLabel: "Erro",
      placeholder: "Selecione o ano letivo",
      type: FilterType.AnoLetivo,
      update_list: [FilterType.Rede, FilterType.Serie, FilterType.Disciplina, FilterType.Chamada, FilterType.Agrupamento],
      filter_watch: [],
      reset_time: 24,
    },
    {
      required: false,
      label: "Rede",
      key: "hashRede",
      disabledLabel: "Selecione primeiro ano letivo",
      placeholder: "Selecione o ano letivo",
      type: FilterType.Rede,
      update_list: [FilterType.Serie, FilterType.Disciplina, FilterType.Chamada, FilterType.Agrupamento],
      filter_watch: [FilterType.AnoLetivo, FilterType.Escola, FilterType.Agrupamento, FilterType.Serie],
      reset_time: 24,
    },
    {
      required: false,
      label: "Escola",
      key: "hashEscola",
      disabledLabel: "Selecione primeiro a rede",
      placeholder: "Selecione o ano letivo",
      type: FilterType.Escola,
      update_list: [FilterType.Serie, FilterType.Disciplina, FilterType.Chamada, FilterType.Agrupamento, FilterType.Turma],
      filter_watch: [FilterType.AnoLetivo, FilterType.Rede, FilterType.Agrupamento, FilterType.Serie],
      reset_time: 24,
    },
    {
      required: false,
      label: "Turma",
      key: "hashTurma",
      disabledLabel: "Erro",
      placeholder: "Selecione o ano letivo",
      type: FilterType.Agrupamento,
      update_list: [],
      filter_watch: [],
      reset_time: 24,
    },
    {
      required: false,
      label: "Turma",
      key: "hashTurma",
      disabledLabel: "Erro",
      placeholder: "Selecione o ano letivo",
      type: FilterType.Turma,
      update_list: [FilterType.Serie, FilterType.Disciplina, FilterType.Chamada, FilterType.Agrupamento],
      filter_watch: [FilterType.AnoLetivo, FilterType.Escola, FilterType.Rede, FilterType.Agrupamento, FilterType.Serie],
      reset_time: 24,
    },
  ]
}

export default filter_config;
