/* Utility types */
export type EmptyObject = Record<string, never>;
export type Maybe<T> = T | null;

export type EnvironmentVariables =
  | 'REACT_APP_ENV'
  | 'REACT_APP_VERSION'
  | 'REACT_APP_AUTH_CLIENTID'
  | 'REACT_APP_AUTH_TENANTID'
  | 'REACT_APP_AUTH_REDIRECT_URL'
  | 'REACT_APP_CORE_API'
  | 'REACT_APP_PRODUCT_GROUPS_API_URL'
  | 'REACT_APP_PRODUCTS_API_URL';
