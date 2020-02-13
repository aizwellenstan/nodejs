var request = require(`request`);

var url = `https://codingcommunity.000webhostapp.com/`;



function getCookies(){

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(response.headers);
        }
    })
}

for(var i=0; i<10; i++){
    setTimeout(getCookies,1);
}
