Example
=======


```javascript
var DHT    = require('bittorrent-dht');
var magnet = require('magnet-uri');

var uri = "magnet:?xt=urn:btih:e3811b9539cacff680e418124272177c47477157&dn=Ubuntu+13.10+Desktop+Live+ISO+amd64";
var parsed = magnet(uri);

var dht = new DHT();

dht.on('peer', function (addr, hash) {
  console.log('Found peer at ' + addr + '!');
});

dht.setInfoHash(parsed.infoHash);

var port = 20000;
dht.listen(port, function (port) {
  console.log("Now listening on port " + port);
});

dht.findPeers();
```

Usage
=====

DHT can be constructed with an optional `options` object with these properties:

 - nodeId


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

### `setInfoHash(infoHash)`

Associate an infoHash with the DHT object. Can be a String or Buffer.


### `dht.listen([port], [callback])`

Open the socket. If port is undefined, one is picked with [portfinder](https://github.com/indexzero/node-portfinder).
`callback` is equivalent to `listening` event.


### `findPeers([num])`

Get `num` peers from the DHT. Defaults to unlimited.
