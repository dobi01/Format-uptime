// jshint esversion: 6

const os = require('os');
const formatDate = require('./index.js');

const uptime = formatDate(os.uptime());

console.log(`Current uptime is ${uptime}`);