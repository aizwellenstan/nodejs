const sql = require("mssql");

var dbConfig = {
    server: "localhost:¥¥SQL2K14",
    database: "sampleDB",
    user: "user",
    password: "pwd",
    port: 1433
};

function getVtuber() {
    var conn = new sql.Connection(dbConfig);
    
    conn.connect().then(function() {
        var req = new.sql.Request(conn);
        req.query("SELECT * FROM vtuber").then(function (recordset) {
            console.log(recordset);
            conn.close();
        })
        .catch(function (err) {
            console.log(err);
            conn.close();
        });
    })
    .catch(function (err){
        console.log(err);
    });
}

getVtuber();