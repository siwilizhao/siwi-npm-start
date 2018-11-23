const Index = require('../lib/index')
const chai = require('chai')
const expect = chai.expect
describe('src/index.js', () => {
    it('test',async () => {
        const res = await (new Index()).test()
        console.log(res)
        expect(res).to.be.equal('ok')
    });
});