function httpGetAsync(theUrl) {

var xmlHttp=new XMLHttpRequest()
xmlHttp.onreadystatechange = function() 
{ 
  if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
    {

        xmlHttp.responseType='json';

        var resObjs=xmlHttp.response['retVal']
        //console.log(xmlHttp.response['retVal'])

        // ref: https://stackoverflow.com/questions/7440001/iterate-over-object-keys-in-node-js
        // Key to loop through object list value
        Object.keys(resObjs).forEach(function(key) {
          var id = key;
          var sna = resObjs[key].sna;
          var tot = resObjs[key].tot;
          var availible = resObjs[key].sbi;
          var sarea = resObjs[key].sarea;
          request.post(
            '/records',
            {json:{staID: id, sna: sna,}}
          )
          console.log(id+' '+sna)
          //logic();

        });
  return(xmlHttp.responseText);

    }
  };
  key = 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.27 Safari/537.17';
  xmlHttp.open("GET", theUrl, true); // true for asynchronous 

  xmlHttp.setRequestHeader('User-Agent', key);
  xmlHttp.responseType='json';

xmlHttp.send('');
}
