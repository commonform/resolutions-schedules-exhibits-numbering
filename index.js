var ase = require('agreement-schedules-exhibits-numbering')

module.exports = function() {
  return ase.apply(this, arguments)
    .replace('Agreement', 'Resolutions') }
