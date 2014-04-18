Dependent packages
==================

This project follows good code practice of abstracting individual parts which could be usable in different applications
to their own modules. Here's a brief description of each module developed for this project.

Module                                                                              |                                           Description
----------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------
[bittorrent-client](https://github.com/feross/bittorrent-client)                    | Main client repo for targets.
[bittorrent-protocol](https://github.com/feross/bittorrent-protocol)                | Implementation of the core BitTorrent protocols.
&nbsp;&nbsp; [plugin: ut_metadata](https://github.com/feross/ut_metadata)           | Core BitTorrent protocol for allowing peer sharing of file metadata, which is used by magnet links.
&nbsp;&nbsp; plugin: encryption _(todo)_                                            | Create connections peers using encryption.
&nbsp;&nbsp; plugin: peer exchange protocol (PEX) _(todo)_                          | Core BitTorrent protocol for sharing peer lists.
&nbsp;&nbsp; plugin: µTP _(todo)_                                                   | Alternative, UDP-based BitTorrent protocol for mitigating network congestion.
&nbsp;&nbsp; plugin: UPnP and NAT-PMP port forwarding _(todo)_                      | Universal Plug-and-Play and NAT Port Mapping protocols for handling communication through NATs.
&nbsp;&nbsp; plugin: webseed support _(todo)_                                       | BitTorrent protocol for downloading via HTTP as well as from peers.
[bittorrent-swarm](https://github.com/feross/bittorrent-swarm)                      | Handles creating and listening for peer connections, handshakes, and tracking traffic.
[bittorrent-tracker](https://github.com/feross/bittorrent-tracker)                  | Tracker server for reporting peer lists.
[bittorrent-dht](https://github.com/feross/bittorrent-dht)                          | Distributed hash table system (BitTorrent's distributed tracker).
[magnet-uri](https://github.com/feross/magnet-uri)                                  | Parser for magnet links.
[parse-torrent](https://github.com/feross/parse-torrent)                            | Parser for `.torrent` files.
[buffer](https://github.com/feross/buffer)                                          | Browser implementation of [Node buffers](http://nodejs.org/api/buffer.html).
[chrome-net](https://github.com/feross/chrome-net)                                  | Browser implementation of [Node net API](http://nodejs.org/api/net.html)(TCP) for Chrome apps.
[chrome-dgram](https://github.com/feross/chrome-dgram)                              | Browser implementation of [Node dgram API](http://nodejs.org/api/dgram.html)(UDP) for Chrome apps.
[chrome-portfinder](https://github.com/feross/chrome-portfinder)                    | Browser implementation of [portfinder](https://github.com/indexzero/node-portfinder) for Chrome apps.
[drag-drop](https://github.com/feross/drag-drop)                                    | Browser wrapper for HTML5 drag-and-drop functionality.
[string2compact](https://github.com/feross/string2compact)                          | Convert 'hostname:port' strings into binary buffers in preferred tracker format
[typedarray-to-buffer](https://github.com/feross/typedarray-to-buffer)              | Convert a typed array to a Buffer without a copy.
webtorrent-protocol _(todo)_                                                        | New protocol based off core BitTorrent protocols running over WebRTC.
webtorrent-dht _(todo)_                                                             | Implementation of DHT system running over WebRTC.
webtorrent-swarm _(todo)_                                                           | Implementation of swarm protocol running over WebRTC.
webtorrent-bootstrap _(todo)_                                                       | ??
webworker-pool _(todo)_                                                             | ??
webtorrent-verifier _(todo)_                                                        | Verify downloaded files are complete and uncorrupted.
compress-sdp _(todo)_                                                               | Session Description Protocol for multimedia session communication.
webtorrent-chrome _(todo)_                                                          | ??