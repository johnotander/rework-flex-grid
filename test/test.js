var assert   = require('assert'),
    fs       = require('fs'),
    rework   = require('rework'),
    flexGrid = require('..');

function fixture(name) {
  return fs.readFileSync('test/fixtures/' + name, 'utf8').trim();
}

describe('rework-flex', function() {
  it('creates the default grid correctly', function() {
    var output = rework(fixture('source.css')).use(flexGrid()).toString().trim();
    var expected = fixture('default.css');

    assert.equal(output, expected);
  });
});