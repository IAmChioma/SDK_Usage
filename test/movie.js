require('dotenv').config();
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = process.env.SERVER_URL;

chai.use(chaiHttp);
const expect = chai.expect;

describe('Test the root path', () => {

 
  it('Should return 404 for non-existent URLs', (done) => {
    chai.request(server)
      .get('/nonexistent')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.text).to.equal('Not Found');
        done();
      });
  });

});

describe('Test the /movies path', () => {
    it('Should return all the movies', (done) => {
        chai.request(server)
          .get('/movie')
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body.length).to.be.equals(8);
            done();
          });
      });
      
  it('Should return a movie', (done) => {
    id = "5cd95395de30eff6ebccde5d";
    chai.request(server)
      .get(`/movie/${id}`)
      .end((err, res) => {
        
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.have.property('_id');
        expect(res.body._id).to.be.equals(id);
        expect(res.body).to.be.have.property('name');
       
        done();
      });
  });
  it('Should return quote in a  movie', (done) => {
    id = "5cd95395de30eff6ebccde5d";
    chai.request(server)
      .get(`/movie/${id}/quote`)
      .end((err, res) => {
        
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.have.property('docs');
        done();
      });
  });
});

