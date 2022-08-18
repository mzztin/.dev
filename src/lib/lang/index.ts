import { get, writable, type Writable } from 'svelte/store';
import { ENGLISH, GERMAN, type TranslationValues } from './translations';

export type AvailableLanguages = 'EN' | 'DE';

export const language: Writable<AvailableLanguages> = writable('EN');
export const getLanguage: () => AvailableLanguages = () => get(language);
export const setLanguage = (lang: AvailableLanguages) => {
	language.update(() => lang);
	t.set(lang === 'EN' ? ENGLISH : GERMAN);
};

export const initLanguage = () => (t = writable(ENGLISH));

export let t: Writable<TranslationValues> = writable(ENGLISH);
