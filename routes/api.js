'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
      const {text, locale, translationWithHighlight} = req.body;
  //    console.log(req.body);
      const validLocale = ["american-to-british", "british-to-american"];
//      console.log(validLocale.includes(locale));

// Check for locale variable present
    if (!locale) {
      res.json({error: "Required field(s) missing"});
      return;
    }

// Check for valid text
    if (text == undefined) {
      res.json({error: "Required field(s) missing"})
      return;
    }

// Check for missing text
    if (text == "") {
      res.json({error: "No text to translate"});
      return;
    }

    let translation = '';
// Check if locale entry valid
    
    if (locale == 'american-to-british') {
      translation = translator.translateToBritishEnglish(text);
      console.log('A-B translation: ', translation.translationWithHighlight);
    } else if (locale == 'british-to-american') {
      translation = translator.translateToAmericanEnglish(text);
//      console.log('B-A translation: ', translation.translationWithHighlight);
    } else //if (!validLocale.includes(req.body.locale)) 
      {
      return res.json({error: 'Invalid value for locale field'});
      return;
    };

// Check if successful translation or nothing to translate
    if (translation == text || !translation) {
      res.json({text, translation: 'Everything looks good to me!'});
    } else { 
  //    console.log('return values-text:', text, '-translation: ', req.body.translationWithHighlight );
      res.json({text, translation:translation.translationWithHighlight })
    }
  });
};
