const AsyncStorage = require('react-native').AsyncStorage

function callFallbackIfFunc(fallback, callback){
  if(typeof fallback === 'function'){
    return fallback(callback)
  }
}

module.exports = exports = function(fallback){
  return {
    type: 'languageDetector',
    async: true,
    init: () => {},
    detect: async function(callback){
      try {
        AsyncStorage.getItem('@i18next-async-storage/user-language')
          .then(language => {
            if(language){
              return callback(language)
            }

            callFallbackIfFunc(fallback, callback)
          })
      } catch(error){
        callFallbackIfFunc(fallback, callback)
      }

    },
    cacheUserLanguage: function(language){
      try {
        AsyncStorage.setItem('@i18next-async-storage/user-language', language)
      } catch(error){

      }
    }
  }
};