const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

// Reverse dictionary for British To American Spellng translation
const InverseDictionary = (obj) => {
  return Object.assign(
    {},
    ...Object.entries(obj).map(([k, v]) => ({ [v]: k }))
  );
};





class Translator {

/*
  translateToAmericanEnglish(text) {
    const dict = {...britishOnly, ...britishToAmericanSpelling};
    const titles = americanToBritishTitles;
    // Replace :colon with .period
    const timeRegex = /([1-9]|1[012].[0-5][0-9])/g;
    const translated = this.translate(text, dict, titles, timeRegex, 'toAmerican');
    if (!translated) {
      return text;
      }
    return translated;
  }
*/
  translateToBritishEnglish(text) {
    const dict = {...americanOnly, ...americanToBritishSpelling};
    const titles = americanToBritishTitles;
    // Replace :colon with .period
    const timeRegex = /([1-9]|1[012]):[0-5][0-9]/g;
    console.log('original text: ', text);

    const translated = this.translate(text, dict, titles, timeRegex, 'toBritish');
    console.log('translated text: ',translated);

    if (!translated) {
      return text;
    }

    return translated;
  }

  translate(text, dict, titles, timeRegex, locale) {
    const lowerText = text.toLowerCase();
    const matchesMap = {};
    const noTranslation = 'Everything looks good to me!';
    console.log('lowerText: ', lowerText,'locale: ', locale);

/*
// Search for titles and add to matchesMap object
    Object.entries(titles).map(([k,v]) => {
      if (lowerText.includes(k)) {
        matchesMap[k] = v.charAt(0).toUpperCase() + v.slice(1);
      }
      console.log('#1 - matchesMap:', matchesMap);
    });

// Filter words with spaces from current dictionary
    const wordsWithSpace = Object.fromEntries(
      Object.entries(dict).filter(([k,v]) => k.includes(' ')) 
      );
    console.log('#2 - matchesMap:', matchesMap);

// Search for spaced word matches and at to matchesMap object
    Object.entries(wordsWithSpace).map(([k, v]) => {
      if (lowerText.includes(k)) {
        matchesMap[k] = v;
      }
      console.log('#3 - matchesMap:', matchesMap);
    });
*/

// Search for individual word matches adn add to matchesMap
    lowerText.match(/(\w+([-'])(\w+)?['-]?(\w+))|\w+/g).forEach((word) => {
      if (dict[word]) matchesMap[word] = dict[word];
      console.log(dict[word], matchesMap[word]);
    });
    console.log('#4 - matchesMap:', matchesMap);

/*
// Search for time matches and add to matchesMap object
    const matchedTimes = lowerText.match(timeRegex);

    if (matchedTimes) {
    matchedTimes.map((e) => {
      if(locale === 'toBritish') {
        return(matchesMap[e] = e.replace(':', '.'));        
      }
      return (matchesMap[e] = e.replace('.', ':'));
    })
    }
*/

// No Matches
    console.log('#5 - matchesMap:', matchesMap);
    if (Object.keys(matchesMap).length === 0) return null;

// Return logic
    

    const translation = this.replaceAll(text, matchesMap);

    const translationWithHighlight = this.replaceAllWithHighlight(text, matchesMap);

//    return translation;
//    return [translation, translationWithHighlight];

    return {
      text,
      // FOR TESTING PURPOSES ONLY
      translation: text === translation ? noTranslation : translation, 
      translationWithHighlight: text === translation ? noTranslation : translationWithHighlight, 
    };

  }  

  replaceAll(text, matchesMap) {
    // matchesMap:>> {favorite : 'favourite'}
    // text :>> Mangoes are my favorite fruit.
    const re = new RegExp(Object.keys(matchesMap).join("|"), "gi");
    return text.replace(re, (matched) => matchesMap[matched.toLowerCase()]);
  }
  
  replaceAllWithHighlight(text,matchesMap) {
    // matchesMap:>> {favorite : 'favourite'}
    // text :>> Mangoes are my favorite fruit.
    const re = new RegExp(Object.keys(matchesMap).join('|'), 'gi');
    return text.replace(re, (matched) => {
      return `<span class="highlight">${matchesMap[matched.toLowerCase()]}</span>`;
    });
  }
  
}

module.exports = Translator;