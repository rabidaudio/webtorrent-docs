Events
------

### 'peer'

    function (addr, infoHash){ ... }

Called when a peer is found. `addr` is of the form `IP_ADDRESS:PORT`


### 'message'

    function (data, rinfo){ ... }

Called when a message is received. `rinfo` is an object with properties `address`, `port`


### 'node'

    function (addr){ ... }

Called when client finds a new DHT node.

### 'listening'

    function () { ... }


### 'error'

    function (err){ ... }



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