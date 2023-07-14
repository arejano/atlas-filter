export const environment = {
    enableProdMode: false,
    stage: 'Development',
    domain: '',
    parentDomain: '',
    apiUrl: 'https://localhost/notas/api',
    apiKey: 'OwxuV6k7Qs1kBgBkZu1TU31BlNVg7Qhj17LP5IR8',
    gaKey: '',
    gtmPortalElevaId: 'GTM-5WB6S8T',
    htPortalEleva: '2431664',
    fotoUrl: 'https://atlasedu.com.br/ped/content/fotos',
    ELEVA_ID: 'https://homolog-id.gruposaltaedu.com'
};

export class Constants {
    static readonly DOMAIN = environment.domain;
    static readonly API_BASE_URL = environment.apiUrl;
    static readonly API_KEY = environment.apiKey;
    static readonly PARENT_DOMAIN = environment.parentDomain;
    static readonly IS_CANVAS_PROJECT = true;
    static readonly GA_KEY = environment.gaKey;
    static readonly GTM_PORTALELEVA_ID = environment.gtmPortalElevaId;
    static readonly HT_PORTALELEVA_ID = environment.htPortalEleva;
    static readonly IS_LOCALHOST = !environment.enableProdMode;
}
