var webclient = require("request");


for(i=0; i<10; i++){
    webclient.post({
        url: "https://codingcommunity.000webhostapp.com/",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({foo: "bar"})
      }, function (error, response, body){
        console.log(body);
      });
}
