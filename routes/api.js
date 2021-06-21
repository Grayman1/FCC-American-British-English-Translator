'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const {text, locale} = req.body;
      const validLocale = ["american-to-british", "british-to-american"];
// Check for locale variable present
    if (!locale) {
      return res.json({error: "Required field(s) missing"})
    }

// Check for valid text
    if (text = undefined) {
      return res.json({error: "Required field(s) missing"})
    }

// Check for missing text
    if (text = "") {
      return res.json({error:"No text to translate"})
    }
// Check if locale entry valid
    if (!validLocale.includes(req.body.locale)) {
      return res.json({error: 'Invalid value for locale field'});
    }


// Check if valid translator selection
    let translation = '';
    if (locale == 'american-to-british') {
      translation = translator.translateToBritishEnglish(text);
    } else if (locale == 'british-to-american') {
      translation = translator.translateToAmericanEnglish(text);
    } 

// Check if successful translation or nothing to translate
    if (translation == text || !translation) {
      res.json({text, translation: 'Everything looks good to me!'});
    } else {
      res.json({text, translation: translation[1]});
    }
      
  });
};
