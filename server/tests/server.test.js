const expect = require('expect');
const request = require('supertest');

var {Todo}= require('./../models/todo');
//When doing destructuring is necesary use var?
const {app} =require('./../server');
//const {Todo} require('./server/models/todo.js');

beforeEach((done) =>{ //With this method our database ir going to be empty before every request
  Todo.deleteMany({}).then(()=>done());
});

debugger
describe('POST /todos', ()=>{
  it('should create a new todo', (done)=>{
debugger
    var text= 'text todo text';

    request(app)
       .post('/todos')
       .send({text})
       .expect(200)
       .expect((res) =>{
          expect(res.body.text).toBe(text);
       })
       .end((err,res)=>{
         if (err) {
           return done(err);
         }
debugger
         Todo.find().then((todos)=>{
           expect(todos.length).toBe(1);
           expect(todos[0].text).toBe(text);
           done();
         }).catch((e)=> done(e));
       });
  });
});