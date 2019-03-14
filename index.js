require('dotenv').config();

const server = require('./server.js');

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Dog server running on port ${port} **\n`));