export type ILang = {
	name: string;
	esName: string;
	localName: string;
	lang_code: ILangCodeKeys;
	iso_code: ILangIsoKeys;
	active: boolean;
};

export type ILangs = {
	[name in ILangCodeKeys]: ILang;
};

export type ILangIsoKeys =
	| 'bg'
	| 'cs'
	| 'da'
	| 'de'
	| 'el'
	| 'en'
	| 'es'
	| 'et'
	| 'fi'
	| 'fr'
	| 'hr'
	| 'hu'
	| 'it'
	| 'lt'
	| 'lv'
	| 'nl'
	| 'pl'
	| 'pt'
	| 'ro'
	| 'ru'
	| 'sk'
	| 'sl'
	| 'sv'
	| 'tr';

export type ILangCodeKeys =
	| 'bg-BG'
	| 'cs-CZ'
	| 'da-DK'
	| 'de-DE'
	| 'el-GR'
	| 'en-GB'
	| 'es-ES'
	| 'et-EE'
	| 'fi-FI'
	| 'fr-FR'
	| 'hr-HR'
	| 'hu-HU'
	| 'it-IT'
	| 'lt-LT'
	| 'lv-LV'
	| 'nl-NL'
	| 'pl-PL'
	| 'pt-PT'
	| 'ro-RO'
	| 'ru-RU'
	| 'sk-SK'
	| 'sl-SL'
	| 'sv-SE'
	| 'tr-TR';
