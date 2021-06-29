const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

// Create inverse dictionary for British To American Spellng translation (using single dictionary)

const inverseDictionary = (obj) => {
  return Object.assign(
    {},
    ...Object.entries(obj).map(([k, v]) => ({ [v]: k }))
  );
};



class Translator {

  translateToAmericanEnglish(text) {
    
    
    const britishToAmericanSpelling = inverseDictionary(americanToBritishSpelling);
    const dict = {...britishOnly, ...britishToAmericanSpelling};
    // BRIT-AMER: NEW REGEX TO REPLACE (.) PERIOD WITH (:) COLON
    const timeRegex = /([1-9]|1[012].[0-5][0-9])/g;
    const translated = this.translate(text, dict, timeRegex, 'toAmerican');
    if (!translated) {
      return text;
      }
    return translated;
  }

  translateToBritishEnglish(text) {
    const dict = {...americanOnly, ...americanToBritishSpelling};
    // AMER-BRIT: NEW REGEX TO REPLACE (:) COLON WITH (.) PERIOD
    const timeRegex = /([1-9]|1[012]):[0-5][0-9]/g;
    console.log('original text: ', text);

    const translated = this.translate(text, dict, timeRegex, 'toBritish');
    console.log('translated text: ',translated);

    if (!translated) {
      return text;
    }

    return translated;
  }

  translate(text, dict, timeRegex, locale) {
    const translatedTextLower = text.toLowerCase();
    const trackReplacements = {};
    const noTranslation = 'Everything looks good to me!';
    console.log('translatedTextLower: ', translatedTextLower,'locale: ', locale);

/*  TRANSLATING WORDS WITH SPACES IS MULTI-STEP PROCEDURE:
  1. SEARCH DICTIONARY AND FILTER OUT WORDS WITH SPACES
  2. SEARCH TEXT STRING FOR MATCHING WORDS WITH SPACES, SELECT FR REPLACEMENT;
  3. REPLACE IDENTIFIED WORDS;
*/


// SEARCH DICTIONARY AND FILTER OUT WORDS WITH SPACES
    const spacedWords = Object.fromEntries(
      Object.entries(dict).filter(([k,v]) => k.includes(' ')) 
      );
    

// SEARCH TEXT STRING FOR MATCHING WORDS WITH SPACES, SELECT FR REPLACEMENT;
    Object.entries(spacedWords).map(([k, v]) => {
      if (translatedTextLower.includes(k)) {
        trackReplacements[k] = v;
  //    console.log('#1 - trackReplacements:', trackReplacements[k]);
      }
      
    });

// SEARCH ORIGINAL TEXT STRING FOR TITLES, FILTER AND MAP TO trackReplacements OBJECT

  let selectTitles = {};
  if (locale === 'toBritish' ? selectTitles = americanToBritishTitles : selectTitles = inverseDictionary(americanToBritishTitles));

  Object.entries(selectTitles).map(([k,v]) => {
      if (translatedTextLower.includes(k)) {
        trackReplacements[k] = v.charAt(0).toUpperCase() + v.slice(1);
      console.log('#2 - trackReplacements:', trackReplacements[k]);
      }
   
    });




/*
    Object.entries(titles).map(([k,v]) => {
      if (translatedTextLower.includes(k)) {
        trackReplacements[k] = v.charAt(0).toUpperCase() + v.slice(1);
      console.log('#2 - trackReplacements:', trackReplacements[k]);
      }
   
    });
*/


// INDIVIDUAL WORD MATCHES
// SEARCH FOR INDIVIDUAL WORD MATCHES AND ADD TO trackReplacements OBJECT
    const indivMatchRegex = /(\w+([-'])(\w+)?['-]?(\w+))|\w+/g;
    translatedTextLower.match(indivMatchRegex).forEach((word) => {
      if (dict[word]) trackReplacements[word] = dict[word];
      console.log(dict[word], trackReplacements[word]);
  //    console.log('#3 - trackReplacements:', trackReplacements[word]);
    });
    

/*
// Search for time matches and add to trackReplacements object
    const matchedTimes = translatedTextLower.match(timeRegex);

    if (matchedTimes) {
    matchedTimes.map((e) => {
      if(locale === 'toBritish') {
        return(trackReplacements[e] = e.replace(':', '.'));        
      }
      return (trackReplacements[e] = e.replace('.', ':'));
    })
    }
*/

// No Matches
//    console.log('#4 - trackReplacements:', trackReplacements);
    if (Object.keys(trackReplacements).length === 0) return null;

// Return logic
    

    const translation = this.replaceAll(text, trackReplacements);

    const translationWithHighlight = this.replaceAllWithHighlight(text, trackReplacements);

//    return translation;
//    return [translation, translationWithHighlight];

    return {
      text,
      // FOR TESTING PURPOSES ONLY
      translation: text === translation ? noTranslation : translation, 
      translationWithHighlight: text === translation ? noTranslation : translationWithHighlight, 
    };

  }  

  replaceAll(text, trackReplacements) {
    // trackReplacements:>> {favorite : 'favourite'}
    // text :>> Mangoes are my favorite fruit.
    const re = new RegExp(Object.keys(trackReplacements).join("|"), "gi");
    return text.replace(re, (matched) => trackReplacements[matched.toLowerCase()]);
  }
  
  replaceAllWithHighlight(text,trackReplacements) {
    // trackReplacements:>> {favorite : 'favourite'}
    // text :>> Mangoes are my favorite fruit.
    const re = new RegExp(Object.keys(trackReplacements).join('|'), 'gi');
    return text.replace(re, (matched) => {
      return `<span class="highlight">${trackReplacements[matched.toLowerCase()]}</span>`;
    });
  }
  
}

module.exports = Translator;