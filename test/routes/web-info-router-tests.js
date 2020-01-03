const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app');
let should = chai.should();
const expect = chai.expect;


chai.use(chaiHttp)

describe('/webinfo', () => {

    it('status code should be 200 when getting load info from google', function(done) {
      this.timeout(15000);
        chai.request(server)
          .get('/webinfo/www.google.com')
          .end((err, res) => {
                expect(res).to.have.status(200);
            done();
          });
    });

    it('should return an array when calling api', function(done) {
        this.timeout(15000);
          chai.request(server)
            .get('/webinfo/www.google.com')
            .end((err, res) => {
                res.body.should.be.a('array');
              done();
            });
      });
});

