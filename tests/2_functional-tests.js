const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

  //Functional Test #1-Translation with text and locale fields: POST request to /api/translate

  test('#1-Translation with text and locale fields: POST request to /api/translate', (done) => {
   chai
    .request(server)
    .post("/api/translate")
    .send({
     // text: "Mangoes are my favorite fruit",
      text: "I dumped the bits and bobs from my bum bag yesterday.",
      locale: "british-to-american",
    //  locale: "american-to-british",
      })
    .end((err, res) => {        
      assert.equal(res.status, 200);
      assert.isObject(res.body, 'response should be an object');
      assert.property(res.body, 'text');
    //  let translatedText = 'Mangoes are my <span class="highlight">favourite</span> fruit';
      let translatedText = 'I dumped the <span class="highlight">odds and ends</span> from my <span class="highlight">fanny pack</span> yesterday.';
      console.log("F/T #1 translation: ", res.body.translation);
      assert.equal(res.body.translation, translatedText);    
      done();
    })
  })


  //Functional Test #2-Translation with text and invalid locale field: POST request to /api/translate

  test('#2-Translation with text and invalid locale field: POST request to /api/translate', (done) => {
   chai
    .request(server)
    .post("/api/translate")
    .send({
       text: "I dumped the bits and bobs from my bum bag yesterday.",
      locale: "invalid locale field",
      })
    .end((err, res) => {        
      assert.equal(res.status, 200);
      assert.isObject(res.body, 'response should be an object');
      assert.property(res.body, 'error');
      assert.equal(res.body.error, "Invalid value for locale field");    
      done();
    })
  })


  //Functional Test #3-Translation with missing text field: POST request to /api/translate

  test('#3-Translation with missing text field: POST request to /api/translate', (done) => {
   chai
    .request(server)
    .post("/api/translate")
    .send({ locale: "british-to-american" })
    .end((err, res) => {        
      assert.equal(res.status, 200);
      assert.isObject(res.body, 'response should be an object');
      assert.property(res.body, 'error');
      assert.equal(res.body.error, "Required field(s) missing");    
      done();
    })
  })


  //Functional Test #4-Translation with missing locale field: POST request to /api/translate

  test('#4-Translation with missing locale field: POST request to /api/translate', (done) => {
   chai
    .request(server)
    .post("/api/translate")
    .send({ text: "I dumped the bits and bobs from my bum bag yesterday." })
    .end((err, res) => {        
      assert.equal(res.status, 200);
      assert.isObject(res.body, 'response should be an object');
      assert.property(res.body, 'error');
      assert.equal(res.body.error, "Required field(s) missing");    
      done();
    })
  })


  //Functional Test #5-Translation with empty text: POST request to /api/translate

  test('#5-Translation with empty text: POST request to /api/translate', (done) => {
   chai
    .request(server)
    .post("/api/translate")
    .send({
       text: "",
      locale: "british-to-american",
      })
    .end((err, res) => {        
      assert.equal(res.status, 200);
      assert.isObject(res.body, 'response should be an object');
      assert.property(res.body, 'error');
      assert.equal(res.body.error, "No text to translate");    
      done();
    })
  })

  //Functional Test #6-Translation with text that needs no translation: POST request to /api/translate

  test('#6-Translation with text that needs no translation: POST request to /api/translate', (done) => {
   chai
    .request(server)
    .post("/api/translate")
    .send({
       text: "hello",
      locale: "british-to-american",
      })
    .end((err, res) => {        
      assert.equal(res.status, 200);
      assert.isObject(res.body, 'response should be an object');
      assert.property(res.body, 'text');
      assert.equal(res.body.translation, "Everything looks good to me!");    
      done();
    })
  })
  

});
