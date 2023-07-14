export class ResponseModel {
  hash: string;
  descricao: string;
}

export interface FilterConfig {
  defaultValue: string;
  sync: boolean;
  filters: Array<FilterItemConfig>;
}

export interface FilterItemConfig {
  autostart?: boolean;
  data?: any;
  required?: boolean;
  labelService:string;
  disabledLabel?: string;
  placeholder: string;
  label: string;
  key: string;
  type: FilterType;
  update_list: Array<FilterType>;
  reset_time?: number | null,
  filter_watch: Array<FilterType>;
  validate?: Function;
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

export interface FilterGetRequest{
  hashAnoletivo?: string,
  hashRede?: string,
  hashEscola?: string
}

export interface FilterRequestData {
  data: ResponseModel[];
  errors: any[];
  isSuccess: boolean;
  message: string;
}

export interface IExceptionFormError {
  type: EnumValidationErrorType;
  messages: IExceptionFormErrorMessage[];
}

export interface IExceptionFormErrorMessage {
  property: string;
  error: string;
}

export interface IExceptionCommonError {
  type: EnumValidationErrorType;
  message: string;
}

export interface IExceptionImportError {
  type: EnumValidationErrorType;
  messages: IExceptionImportErrorMessage[];
}

export interface IExceptionImportErrorMessage {
  linha: string;
  propriedade: string;
  valor: any;
  descricao: string;
}

export enum EnumValidationErrorType
{
    CommonError = 400,
    UnauthorizedError = 401,
    ForbiddenError = 403,
    InternalServerError = 500
}
