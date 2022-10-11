const sensor = require('qrcode-terminal');

sensor.generate('WIFI:S:SOCIALDESK - 9th Floor;T:WPA;P:SocialD3$K09F;;');
console.log(sensor);

sensor.generate(`BEGIN:VCARD
VERSION:4.0
EMAIL;type=HOME:vijandreneo@gmail.com
EMAIL;type=WORK:neojanerich.vijandre@siteminder.com
TEL;type=WORK:09774943118
FN:Neo Jan Erich A. Vijandre
N:Neo Vijandre
END:VCARD`);

console.log(sensor);
