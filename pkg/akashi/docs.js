const Docma = require('docma');
const docs  = new Docma();

const config = {};

docma.build(config).then(() => console.log('Created docs at docs/')).catch(console.error);