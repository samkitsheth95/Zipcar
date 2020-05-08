
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

it('Positive Test Should check credentials and return status code', (done) => {
  chai
    .request('http://127.0.0.1:3001')
    .post('/auth/login')
    .send({ password: '12345', username: 'samkit' })
    .end((err, res) => {
      expect(res).to.have.status(200);
      done();
    });
});

it('Positive Test Should check credentials (Admin Login) and return status code', (done) => {
  chai
    .request('http://127.0.0.1:3001')
    .post('/auth/login')
    .send({ password: '12345', username: 'varshit' })
    .end((err, res) => {
      expect(res).to.have.status(200);
      done();
    });
});

it('Negative Test Should check credentials (Admin Login) and return status code', (done) => {
  chai
    .request('http://127.0.0.1:3001')
    .post('/auth/login')
    .send({ password: '12345', username: 'varshit' })
    .end((err, res) => {
      expect(res).to.have.status(200);
      done();
    });
});


it('Negative Test Should check credentials and return status code', (done) => {
  chai
    .request('http://127.0.0.1:3001')
    .post('/auth/login')
    .send({ password: '12345', username: 'samkit' })
    .end((err, res) => {
      expect(res).to.have.status(404);
      done();
    });
});

it('Get User Details', (done) => {
  chai
    .request('http://127.0.0.1:3001')
    .get('/user/getuser')
    .end((err, res) => {
      expect(res).to.have.status(200);
      done();
    });
});


it('Get  Booking', (done) => {
  chai
    .request('http://127.0.0.1:3001')
    .get('/user/getBooking')
    .end((err, res) => {
      expect(res).to.have.status(200);
      done();
    });
});
