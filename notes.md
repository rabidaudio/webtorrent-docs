# Overview

## Goals

https://github.com/feross/webtorrent/issues/39


#Development setup

## [Install Node.js](https://github.com/joyent/node/wiki/Installation)
Offical guides:

- [Linux/Unix](https://github.com/joyent/node/wiki/Installation#building-on-gnulinux-and-other-unix)
- [Mac]()
- [Windows](https://github.com/joyent/node/wiki/Installation#installing-without-building) - Download the
[MSI bundle](http://nodejs.org/download/) or [install from source](https://github.com/joyent/node/wiki/Installation#building-on-windows)
if you really want to and know what you are doing.

### Building from source
Most platform repositories are usually outdated, so it is better to build Node from source. Start by installing the prerequisites.
On Ubuntu:

        sudo apt-get install git-core build-essential

Also install python if you don't already have it. Mac users should be set already. Clone the official repository:

        git clone https://github.com/joyent/node.git
        git checkout v0.10.26

Replace the above with the latest stable release. Stable releases are even-numbered. For example, `v0.11.12` is unstable.

        cd node
        ./configure
        make
        sudo make install

### npm
Much of Node's usefulness hinges on [npm](http://npmjs.org), a package manager for Node, similar to [Rubygems](http://rubygems.org)
or [CPAN](http://cpan.org). it is now included with Node.

## [Getting code](https://help.github.com/articles/fork-a-repo)
Start by [forking the repository](https://github.com/feross/webtorrent/fork). Then clone your forked repository and add upstream.

        git clone https://github.com/[your_username]/webtorrent.git
        git remote add upstream https://github.com/feross/webtorrent.git

If you come back later and there are any changes, fetch them and merge them when ready:

        get fetch upstream
        git merge upstream/master

Now, install the dependencies:

        npm install

This will install a list of dependent Node modules used by this project from `npm`. The list is included in [`package.json`](https://github.com/feross/webtorrent/blob/master/package.json).

## Building
There are a couple of commands for building different parts of the project. You can see them in `package.json`.

        "build": "npm run build-css && npm run build-js",
        "build-css": "stylus --use nib css/main.styl --compress --out chrome/ && ./bin/post-build.js",
        "build-js": "browserify --debug . > chrome/bundle.js",
        "prepublish": "npm run build",
        "start": "npm run build && ./bin/start.js",
        "test": "tape test/*.js",
        "watch": "npm run watch-js & npm run watch-css",
        "watch-css": "stylus --use nib css/main.styl --out chrome/ --watch",
        "watch-js": "watchify . --outfile chrome/bundle.js --debug --verbose"
        
To build the chrome app and install it, simply run `npm start`
This will also run `bin/start.js` which will try to add the app into Chrome. this could fail for several reasons:

- you aren't using Chrome Canary on Mac
- you are running Chromium
- you are running Windows
- some weird process error

If this happens, and `chrome/bundle.js` and `chrome/main.css` exist, you can ignore the error and install it manually
by dragging the `chrome/` directory into the `chrome://extensions` page. Make sure you have enabled developer mode
in Chrome first by checking the box at the top of `chrome://extensions`.

![Developer Mode](img/developer-mode.png)

Use the `npm watch` to automatically build when changes are made.

Use the `Reload (Ctrl-R)` button to manually reload the app after changes are made (if `npm start` is failing).

![Reload Chrome App](img/reload.png)


Now you are ready to contribute! Commit changes and send a pull request. However, much of the functionality has been
[intentionally](https://github.com/feross/webtorrent#the-node-way) abstracted into independent node modules.
A description of these modules is available below. See each package for more information.

# Dependent packages

Module                                                                              |                                           Description
----------------------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------
[webtorrent](https://github.com/feross/webtorrent) (main repo)                      | Browser torrent client.
[bittorrent-protocol](https://github.com/feross/bittorrent-protocol)                | Implementation of the core BitTorrent protocols.
&nbsp;&nbsp;`>` [plugin: ut_metadata](https://github.com/feross/ut_metadata)        | Core BitTorrent protocol for allowing peer sharing of file metadata, which is used by magnet links.
&nbsp;&nbsp;`>` plugin: encryption _(todo)_                                         | Create connections peers using encryption.
&nbsp;&nbsp;`>` plugin: peer exchange protocol (PEX) _(todo)_                       | Core BitTorrent protocol for sharing peer lists.
&nbsp;&nbsp;`>` plugin: µTP _(todo)_                                                | Alternative, UDP-based BitTorrent protocol for mitigating network congestion.
&nbsp;&nbsp;`>` plugin: UPnP and NAT-PMP port forwarding _(todo)_                   | Universal Plug-and-Play and NAT Port Mapping protocols for handling communication through NATs.
&nbsp;&nbsp;`>` plugin: webseed support _(todo)_                                    | BitTorrent protocol for downloading via HTTP as well as from peers.
[bittorrent-swarm](https://github.com/feross/bittorrent-swarm)                      | Handles creating and listening for peer connections, handshakes, and tracking traffic.
[bittorrent-dht](https://github.com/feross/bittorrent-dht) *(work-in-progress)*     | Distributed hash table system (BitTorrent's distributed tracker).
[magnet-uri](https://github.com/feross/magnet-uri)                                  | Parser for magnet links.
[parse-torrent](https://github.com/feross/parse-torrent)                            | Parser for `.torrent` files.
[buffer](https://github.com/feross/buffer)                                          | Browser implementation of [Node buffers](http://nodejs.org/api/buffer.html).
[chrome-net](https://github.com/feross/chrome-net)                                  | Browser implementation of [Node net API](http://nodejs.org/api/net.html)(TCP) for Chrome apps.
[chrome-dgram](https://github.com/feross/chrome-dgram)                              | Browser implementation of [Node dgram API](http://nodejs.org/api/dgram.html)(UDP) for Chrome apps.
[chrome-portfinder](https://github.com/feross/chrome-portfinder)                    | Browser implementation of [portfinder](https://github.com/indexzero/node-portfinder) for Chrome apps.
[drag-drop](https://github.com/feross/drag-drop)                                    | Browser wrapper for HTML5 drag-and-drop functionality.
webtorrent-protocol _(todo)_                                                        | New protocol based off core BitTorrent protocols running over WebRTC.
webtorrent-dht _(todo)_                                                             | Implementation of DHT system running over WebRTC.
webtorrent-swarm _(todo)_                                                           | Implementation of swarm protocol running over WebRTC.
webtorrent-bootstrap _(todo)_                                                       | ??
webworker-pool _(todo)_                                                             | ??
webtorrent-verifier _(todo)_                                                        | Verify downloaded files are complete and uncorrupted.
sdp-compress _(todo)_                                                               | Session Description Protocol for multimedia session communication.
webtorrent-chrome _(todo)_                                                          | ??


# Introduction to core BitTorrent protocols
This is an overview of BitTorrent concepts. Included are links to further information and technical specifications, where available.

## Terms to be defined

https://en.wikipedia.org/wiki/Glossary_of_BitTorrent_terms

- Peer
- Swarm
- Tracker

### BitTorrent (protocol)
The protocol that defines data transfer between peers. Not to be confused with the technology as a whole, or the company that created it,
both of which fall under the same name.

- [Specification](http://www.bittorrent.org/beps/bep_0003.html)

### PEX
Peer exchange is the protocol which allows peers to share lists of known peers directly, reducing the reliance on a tracker. 

- [Wikipedia](http://wki.pe/Peer_exchange)
- [Vuze](http://wiki.vuze.com/w/Peer_Exchange)
- [Specification (AZMP, LTEP)](https://wiki.theory.org/BitTorrentPeerExchangeConventions)

### µTP
A UDP variant of the BitTorrent data transfer protocol which solves congestion issues. 

- [Wikipedia](http://wki.pe/Micro_Transport_Protocol)
- [Specification](http://bittorrent.org/beps/bep_0029.html)
- [LEDBAT algorithm Specification](http://tools.ietf.org/html/rfc6817)

### DHT
A distributed hash table is a way of storing key-value data in a distributed fashion. In a sense, it is a simple distributed database.
Each peer is responsible for a part of the data, and peer ids are used to determine which peer has the data in question. BitTorrent uses
a specific implementation called "Mainline DHT" to allow for trackerless torrents by storing peer lists this way.

- [DHT - Wikipedia](http://a.wki.pe/DHT)
- [Mainline DHT - Wikipedia](http://wki.pe/Mainline_DHT)
- [Specification](http://www.bittorrent.org/beps/bep_0005.html)


### Magnet links
A way of transferring file metadata with a URI instead of a `.torrent` file. For example:

        magnet:?xt=urn:sha1:YNCKHTQCWBTRNJIV4WNAE52SJUQCZO5C
        
The `xt` value is a base-32 encoded SHA-1 hash of the file contents. This is used as a unique identifier for the file, and it can be used
to get peers and other information about the file from the swarm.

- [Wikipedia](http://wki.pe/Magnet_link)
- [Official Site](http://magnet-uri.sourceforge.net/)
- [Specification](http://magnet-uri.sourceforge.net/magnet-draft-overview.txt)


more:

- [UPnP](http://wki.pe/UPnP)
- [NAT-PMP](http://wki.pe/NAT-PMP)
- Somewhere in here, talk about NAT Traversal and STUN (which is also a WebRTC topic)
- [webseeding](http://wki.pe/BitTorrent#Web_seeding)
- [SDP](http://tools.ietf.org/html/rfc3485)

# Introduction to WebRTC

        TODO

# Introduction to streams in Node.js
https://github.com/substack/stream-handbook



TODO: Improve dependent package docs:
- bittorrent-swarm
- bittorrent-dht
