const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app');
const should = chai.should();


chai.use(chaiHttp)

// describe('/webinfo', () => {
//     it('it should get page load information from 3 default sites', (done) => {
//       chai.request(server)
//           .get('/webinfo')
//           .end((err, res) => {
//                 req.should.have.status(200);
//             done();
//           });
//     });
// });
