var menubar = require('menubar')
var status = require('./status.js')


var mb = menubar()

mb.on('ready', function ready () {
  console.log('app is ready')
  // your app code here

  var stat = new status();
})
