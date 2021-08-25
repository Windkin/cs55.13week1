let myhttp = require("http");

let myserver = myhttp.createServer(

  function( myrequest, myresponse) {
    console.log( myrequest.url );

    let mytext;

    if( myrequest.url === "/hey" ) {
      mytext = "How's it going?";
    } else {
      mytext = "Can I help you?";
    }
  
    mytext = mytext + " OH NOOOO!!! WHAT'S THAT BEHIND YOU???????????";

    myresponse.writeHead( 200, { "Content-Type": "text/plain" } );

    myresponse.end( mytext + "\n" );
  
  }

);

myserver.listen( 8080, "0.0.0.0" );

console.log( "Server has started" );