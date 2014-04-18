Events
------

peer        peer_address, hash
message     data, {address, port, }
node        address
listening
error       err


methods
-------


//optional int PORT, optional callback onListening
listen(PORT, CALLBACK)

setInfoHash(INFOHASH)

findPeers(MAX_PEERS)

query(ADDR)

DHT()
<!-- var options = {
    nodeId 
} -->

```javascript
var DHT = require('bittorrent-dht');
var magnet = require('magnet-uri');

var uri = "magnet:?xt=urn:btih:e3811b9539cacff680e418124272177c47477157&dn=Ubuntu+13.10+Desktop+Live+ISO+amd64";
var parsed = magnet(uri);

var dht = new DHT();

dht.on('peer', function(addr, hash){
    console.log('Found peer at '+addr+'!');
});

dht.setInfoHash(parsed.infoHash);

var port = 20000;
dht.listen(port, function(port){
    console.log("Now listening on port "+port);
});

dht.findPeers();
```