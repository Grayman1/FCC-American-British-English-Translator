const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

  //Functional Test #1-Translation with text and locale fields: POST request to /api/translate
/*
  test('#1-Translation with text and locale fields: POST request to /api/translate', (done) => {
   chai
    .request(server)
    .post('/api/translate')
    .send({
      text: '',
      locale: '' 
      })
    .end((err, res) => {        
      assert.equal(res.status, 200);
      assert.isObject(res.body);
      assert.property(res.body, 'solution');
      let translatedText = '';
      assert.equal(res.body.translation, translatedText);    
      done();
    })
  })
*/

  //Functional Test #2-Translation with text and invalid locale field: POST request to /api/translate
/*
  test('#2-Translation with text and invalid locale field: POST request to /api/translate', (done) => {
   chai
    .request(server)
    .post('/api/translate')
    .send({
      text: '',
      locale: '' 
      })
    .end((err, res) => {        
      assert.equal(res.status, 200);
      assert.isObject(res.body);
      assert.property(res.body, 'translation');
      let translatedText = '';
      assert.equal(res.body.translation, translatedText);    
      done();
    })
  })
*/

  //Functional Test #3-Translation with missing text field: POST request to /api/translate
/*
  test('#3-Translation with missing text field: POST request to /api/translate', (done) => {
   chai
    .request(server)
    .post('/api/translate')
    .send({
      text: '',
      locale: '' 
      })
    .end((err, res) => {        
      assert.equal(res.status, 200);
      assert.isObject(res.body);
      assert.property(res.body, 'solution');
      let translatedText = '';
      assert.equal(res.body.translation, translatedText);    
      done();
    })
  })
*/

  //Functional Test #4-Translation with missing locale field: POST request to /api/translate
/*
  test('#4-Translation with missing locale field: POST request to /api/translate', (done) => {
   chai
    .request(server)
    .post('/api/translate')
    .send({
      text: '',
      locale: '' 
      })
    .end((err, res) => {        
      assert.equal(res.status, 200);
      assert.isObject(res.body);
      assert.property(res.body, 'solution');
      let translatedText = '';
      assert.equal(res.body.translation, translatedText);    
      done();
    })
  })
*/

  //Functional Test #5-Translation with empty text: POST request to /api/translate
/*
  test('#5-Translation with empty text: POST request to /api/translate', (done) => {
   chai
    .request(server)
   .post('/api/translate')
    .send({
      text: '',
      locale: '' 
      })
    .end((err, res) => {        
      assert.equal(res.status, 200);
      assert.isObject(res.body);
      assert.property(res.body, 'solution');
      let translatedText = '';
      assert.equal(res.body.translation, translatedText);    
      done();
    })
  })
*/


  //Functional Test #6-Translation with text that needs no translation: POST request to /api/translate
/*
  test('#6-Translation with text that needs no translation: POST request to /api/translate', (done) => {
   chai
    .request(server)
    .post('/api/translate')
    .send({
      text: '',
      locale: '' 
      })
    .end((err, res) => {        
      assert.equal(res.status, 200);
      assert.isObject(res.body);
      assert.property(res.body, 'solution');
      let translatedText = '';
      assert.equal(res.body.translation, translatedText);    
      done();
    })
  })
*/




  

});
