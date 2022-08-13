const chai = require('chai')
const chaiHttp = require("chai-http")
const server = require('../app')

let should = chai.should();

chai.use(chaiHttp);

describe("testing the home api",()=>{
    it("it should get the home page",(done)=>{
        chai.request(server)
            .get("/")
            .end((err,res)=>{
                res.should.have.a.status(200);
                res.body.should.be.a("object");
                res.body.should.have.an.property("message")

                done()
            })
    })
})