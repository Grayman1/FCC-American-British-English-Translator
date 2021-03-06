const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

let translator = new Translator();

suite('Unit Tests', () => {

  suite('Translation tests', () => {

// Unit Test #1- Translate Mangoes are my favorite fruit. to British English
    test('#1 - Translate Mangoes are my favorite fruit to British English', (done) => {
      let originalText = 'Mangoes are my favorite fruit';
      let translatedText = 'Mangoes are my favourite fruit'; 
      console.log('U/T#1 translation:',translator.translateToBritishEnglish(originalText).translation);
      assert.equal(translator.translateToBritishEnglish(originalText).translation, translatedText);
      done();
    })

// Unit Test #2- Translate I ate yogurt for breakfast to British English
    test('#2 - Translate I ate yogurt for breakfast to British English', (done) => {
      let originalText = 'I ate yogurt for breakfast';
      let translatedText = 'I ate yoghurt for breakfast'; 
      console.log('U/T#2 translation:',translator.translateToBritishEnglish(originalText).translation);
      assert.equal(translator.translateToBritishEnglish(originalText).translation, translatedText);
      done();
    })

// Unit Test #3- We had a party at my friend's condo to British English
    test("#3 - We had a party at my friend's condo to British English", (done) => {
      let originalText = "We had a party at my friend's condo";
      let translatedText = "We had a party at my friend's flat"; 
      console.log('U/T#3 translation:',translator.translateToBritishEnglish(originalText).translation);
      assert.equal(translator.translateToBritishEnglish(originalText).translation, translatedText);
      done();
    })

// Unit Test #4- Translate Can you toss this in the trashcan for me? to British English
    test('#4 - Translate Can you toss this in the trashcan for me? to British English', (done) => {
      let originalText = "Can you toss this in the trashcan for me?";
      let translatedText = "Can you toss this in the bin for me?"; 
      console.log('U/T#4 translation:',translator.translateToBritishEnglish(originalText).translation);
      assert.equal(translator.translateToBritishEnglish(originalText).translation, translatedText);
      done();
    });  

// Unit Test #5- Translate The parking lot was full to British English
    test('#5 - Translate The parking lot was full to British English', (done) => {
      let originalText = 'The parking lot was full';
      let translatedText = 'The car park was full'; 
      assert.equal(translator.translateToBritishEnglish(originalText).translation, translatedText);
      done();
    })

// Unit Test #6- Translate Like a high tech Rube Goldberg machine to British English
    test('#6 - Translate Like a high tech Rube Goldberg machine to British English', (done) => {
      let originalText = 'Like a high tech Rube Goldberg machine';
      let translatedText = 'Like a high tech Heath Robinson device'; 
      assert.equal(translator.translateToBritishEnglish(originalText).translation, translatedText);
      done();
    })

// Unit Test #7- Translate To play hooky means to skip class or work to British English
    test('#7 - Translate To play hooky means to skip class or work to British English', (done) => {
      let originalText = 'To play hooky means to skip class or work';
      let translatedText = 'To bunk off means to skip class or work'; 
      assert.equal(translator.translateToBritishEnglish(originalText).translation, translatedText);
      done();
    })

// Unit Test #8- Translate No Mr. Bond, I expect you to die to British English
    test('#8 - Translate No Mr. Bond, I expect you to die to British English', (done) => {
      let originalText = "No Mr. Bond, I expect you to die";
      let translatedText = "No Mr Bond, I expect you to die"; 
      console.log('U/T#8 translation:',translator.translateToBritishEnglish(originalText).translation);
      assert.equal(translator.translateToBritishEnglish(originalText).translation, translatedText);
      done();
    });


// Unit Test #9- Translate Dr. Grosh will see you now to British English
    test('#9 - Translate Dr. Grosh will see you now to British English', (done) => {
      let originalText = "Dr. Grosh will see you now";
      let translatedText = "Dr Grosh will see you now";
      console.log('U/T#9 translation:',translator.translateToBritishEnglish(originalText).translation);
      assert.equal(translator.translateToBritishEnglish(originalText).translation, translatedText);
      done();
    });


// Unit Test #10- Translate Lunch is at 12:15 today to British English
    test('#10 - Translate Lunch is at 12:15 today to British English', (done) => {
      let originalText = "Lunch is at 12:15 today";
      let translatedText = "Lunch is at 12.15 today"; 
      console.log('U/T#9 translation:',translator.translateToBritishEnglish(originalText).translation);
      assert.equal(translator.translateToBritishEnglish(originalText).translation, translatedText);
      done();
    });

// Unit Test #11- Translate We watched the footie match for a while to American English
    test('#11 - Translate We watched the footie match for a while to American English', (done) => {
      let originalText = "We watched the footie match for a while";
      let translatedText = "We watched the soccer match for a while"; 
      console.log('U/T#11 translation:',translator.translateToAmericanEnglish(originalText).translation);
      assert.equal(translator.translateToAmericanEnglish(originalText).translation, translatedText);
      done();
    });  


// Unit Test #12- Translate Paracetamol takes up to an hour to work. to American English
    test('#12 - Translate Paracetamol takes up to an hour to work to American English', (done) => {
      let originalText = 'Paracetamol takes up to an hour to work';
      let translatedText = 'Tylenol takes up to an hour to work'; 
      console.log('U/T#12 translation:',translator.translateToAmericanEnglish(originalText).translation);
      assert.equal(translator.translateToAmericanEnglish(originalText).translation, translatedText);
      done();
    })

// Unit Test #13- Translate First, caramelise the onions. to American English
    test('#13 - Translate First, caramelise the onions. to American English', (done) => {
      let originalText = 'First, caramelise the onions.';
      let translatedText = 'First, caramelize the onions.'; 
      console.log('U/T#13 translation:',translator.translateToAmericanEnglish(originalText).translation);
      assert.equal(translator.translateToAmericanEnglish(originalText).translation, translatedText);
      done();
    })

// Unit Test #14- Translate I spent the bank holiday at the funfair. to American English
    test('#14 - Translate I spent the bank holiday at the funfair. to American English', (done) => {
      let originalText = 'I spent the bank holiday at the funfair.';
      let translatedText = 'I spent the public holiday at the carnival.'; 
      console.log('U/T#14 translation:',translator.translateToAmericanEnglish(originalText).translation);
      assert.equal(translator.translateToAmericanEnglish(originalText).translation, translatedText);
      done();
    })


// Unit Test #15- Translate I had a bicky then went to the chippy to American English
    test('#15 - Translate I had a bicky then went to the chippy to American English', (done) => {
      let originalText = 'I had a bicky then went to the chippy';
      let translatedText = 'I had a cookie then went to the fish-and-chip shop'; 
      console.log('U/T#15 translation:',translator.translateToAmericanEnglish(originalText).translation);
      assert.equal(translator.translateToAmericanEnglish(originalText).translation, translatedText);
      done();
    })

// Unit Test #16- Translate I've just got bits and bobs in my bum bag to American English
    test("#16 - Translate I've just got bits and bobs in my bum bag to American English", (done) => {
      let originalText = "I've just got bits and bobs in my bum bag";
      let translatedText = "I've just got odds and ends in my fanny pack"; 
      console.log('U/T#16 translation:',translator.translateToAmericanEnglish(originalText).translation);
      assert.equal(translator.translateToAmericanEnglish(originalText).translation, translatedText);
      done();
    })

// Unit Test #17- Translate The car boot sale at Boxted Airfield was called off. to American English
    test('#17 - Translate The car boot sale at Boxted Airfield was called off. to American English', (done) => {
      let originalText = 'The car boot sale at Boxted Airfield was called off.';
      let translatedText = 'The swap meet at Boxted Airfield was called off.'; 
      console.log('U/T#17 translation:',translator.translateToAmericanEnglish(originalText).translation);
      assert.equal(translator.translateToAmericanEnglish(originalText).translation, translatedText);
      done();
    })

// Unit Test #18- Translate Have you met Mrs Kalyani? to American English
    test('#18 - Translate Have you met Mrs Kalyani? to American English', (done) => {
      let originalText = 'Have you met Mrs Kalyani?';
      let translatedText = 'Have you met Mrs. Kalyani?'; 
      console.log('U/T#18 translation:',translator.translateToAmericanEnglish(originalText).translation);
      assert.equal(translator.translateToAmericanEnglish(originalText).translation, translatedText);
      done();
    })

// Unit Test #19- Translate Prof Joyner of King's College, London. to American English
    test("#19 - Translate Prof Joyner of King's College, London. to American English", (done) => {
      let originalText = "Prof Joyner of King's College, London.";
      let translatedText = "Prof. Joyner of King's College, London."; 
      console.log('U/T#19 translation:',translator.translateToAmericanEnglish(originalText).translation);
      assert.equal(translator.translateToAmericanEnglish(originalText).translation, translatedText);
      done();
    })

// Unit Test #20- Translate Tea time is usually around 4 or 4.30. to American English
    test('#20 - Translate Tea time is usually around 4 or 4.30. to American English', (done) => {
      let originalText = 'Tea time is usually around 4 or 4.30.';
      let translatedText = 'Tea time is usually around 4 or 4:30.'; 
      console.log('U/T#12 translation:',translator.translateToAmericanEnglish(originalText).translation);
      assert.equal(translator.translateToAmericanEnglish(originalText).translation, translatedText);
      done();
    })
  })

  suite('Highlight tests', () => {

// Unit Test #21- Highlight translation in Mangoes are my favorite fruit.
    test('#21 - Highlight translation in Mangoes are my favorite fruit.', (done) => {
      let originalText = 'Mangoes are my favorite fruit';
      let translatedText = 'Mangoes are my <span class="highlight">favourite</span> fruit';  
      console.log('U/T#21 translation:',translator.translateToBritishEnglish(originalText).translationWithHighlight);
      assert.equal(translator.translateToBritishEnglish(originalText).translationWithHighlight, translatedText);
      done();
    })

// Unit Test #22- Highlight translation in I ate yogurt for breakfast
    test('#22 - Highlight translation in I ate yogurt for breakfast', (done) => {
      let originalText = 'I ate yogurt for breakfast';
      let translatedText = 'I ate <span class="highlight">yoghurt</span> for breakfast';  
      console.log('U/T#22 translation:',translator.translateToBritishEnglish(originalText).translationWithHighlight);
      assert.equal(translator.translateToBritishEnglish(originalText).translationWithHighlight, translatedText);
      done();
    })

// Unit Test #23- Highlight translation in We watched the footie match for a while
    test('#23 - Highlight translation in We watched the footie match for a while', (done) => {
      let originalText = 'We watched the footie match for a while';
      let translatedText = 'We watched the <span class="highlight">soccer</span> match for a while';  
      console.log('U/T#21 translation:',translator.translateToAmericanEnglish(originalText).translationWithHighlight);
      assert.equal(translator.translateToAmericanEnglish(originalText).translationWithHighlight, translatedText);
      done();
    })

// Unit Test #24- Highlight translation in Paracetamol takes up to an hour to work
    test('#24 - Translate Highlight translation in Paracetamol takes up to an hour to work', (done) => {
      let originalText = 'Paracetamol takes up to an hour to work';
      let translatedText = '<span class="highlight">Tylenol</span> takes up to an hour to work'; 
      console.log('U/T#24 translation:',translator.translateToAmericanEnglish(originalText).translationWithHighlight);
      assert.equal(translator.translateToAmericanEnglish(originalText).translationWithHighlight, translatedText);
      done();
      })
  })
});