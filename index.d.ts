import i18next from 'i18next';

declare function I18nextReactNativeAsyncStorage(
	fallback?: string | I18nextReactNativeAsyncStorage.FallbackFn,
): i18next.LanguageDetectorAsyncModule;

declare namespace I18nextReactNativeAsyncStorage {
	type CallbackFn = (language: string) => void;
	type FallbackFn = (callback: CallbackFn) => any;
}

export = I18nextReactNativeAsyncStorage;
