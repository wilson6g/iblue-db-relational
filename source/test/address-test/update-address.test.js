var chai = require('chai')
  , chaiHttp = require('chai-http');
const dotenv = require('dotenv')

chai.use(chaiHttp);
dotenv.config();

describe('Test ADDRESS API', () => {
  it('should update an address', (done) => {

    let address = {
      address: "Av. Paralela 1685",
      address_status: "Faculdade",
      userId: "93af673e-7a2f-4a3d-a2fb-43d1f19d7e5b"
    }

    chai.request('localhost:' + process.env.NODE_PORT)
      .put('/api/address/4a8d689c-d90e-4633-a71a-c1509ef8d4f8')
      .type('json')
      .send(address)
      .end((error, response) => {
        if (error) {
          done(error);
        }
        chai.expect(error).to.be.null;
        chai.expect(response).to.have.status(200);

        done();
      })
  });
});


