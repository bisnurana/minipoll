const localtunnel = require('localtunnel');
localtunnel(3000, { subdomain: 'mdkgnjzxgjndsvtngkcngksl' }, function (err, tunnel) {
    console.log('Local tunnel running at port 3000');
});