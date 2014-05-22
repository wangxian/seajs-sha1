var expect = require('expect');
var sha1 = require('../sha1');

describe('seajs-sha1', function() {

  it('normal usage', function() {
    var s = sha1("111111")
    expect(s).to.be('3d4f2bf07dc1be38b20cd6e46949a1071f9d0e3d');
  });

});
