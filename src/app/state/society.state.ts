export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR,
}

// le point ? permet de dire qu'il n'est pas obligatoire
//je declare une interface de type Generique qui recevra ainsi n'importe quel objet
export interface AppDataState<T> {
  dataState?: DataStateEnum;
  data?: T;
  errorMessage?: string;
}
