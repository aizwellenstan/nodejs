
    //Camera Authentication
    // var ip_address = "10.0.17.11"
    // //camera username and password
    // var username = "admin";
    // var password="admin";

    //A channel of camera stream
    Stream = require('node-rtsp-stream');
    stream = new Stream({
        streamUrl: 'rtsp://192.168.1.200/user=admin&password=&channel=2&stream=0.sdp',
        wsPort: 9999    
    });
