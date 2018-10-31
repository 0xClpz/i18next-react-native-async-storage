# i18next React Native Async Storage

This plugin caches your user's language in React Native's Async storage

## Getting Started

Install using:
```Bash
yarn install i18next-react-native-async-storage
```

Then pass it to your i18n instance
```JavaScript
import AsyncStoragePlugin from 'i18next-react-native-async-storage'

i18n
  .use(AsyncStoragePlugin())
```

## Fallback mechanism

You can pass a fallback function or language to the plugin in case it fails to find the user's language in the local storage (typically on the app's first run):

```JavaScript
// With a fallback language
i18n
  .use(AsyncStoragePlugin('en'))

// With a fallback function
const detectUserLanguage = (callback) => {
  return Expo
    .DangerZone
    .Localization
    .getCurrentLocaleAsync()
    .then(lng => { callback(lng.replace('_', '-')); })
}

i18n
  .use(AsyncStoragePlugin(detectUserLanguage))
```
