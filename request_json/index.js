const https = require('https');
const req = https.request('https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json', (res) => {
    res.on('data', (chunk) => {
        // console.log(`BODY: ${chunk}`);
        
        var textChunk = chunk.toString();

        // console.log(textChunk)

        var data=chunk.toJSON()
        console.log(data)
    });
    res.on('end', () => {
        console.log('JSONデータは以上です。');
    });
})

req.on('error', (e) => {
  console.error(`エラーが出ました： ${e.message}`);
});

req.end();