const assert = require('chai').assert;
const expect = require('chai').expect;
const request = require('supertest');
const router = require('../../api/routes/web-info-router');

describe('WebInfoRouter', function() {
    it('can call api', function (){
    request(router)
        .get('/')
        .expect('Content-Type', /xml/)
        .expect(500, "ok")
        .end(function(err, res){
           if (err) throw err;
        });
    });
});