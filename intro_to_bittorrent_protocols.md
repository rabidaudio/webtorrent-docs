Introduction to core BitTorrent protocols
=========================================

This is an overview of BitTorrent concepts. Included are links to further information and technical specifications, where available.

Terms to be defined
-------------------

https://en.wikipedia.org/wiki/Glossary_of_BitTorrent_terms

- Peer
- Swarm
- Tracker

### BitTorrent (protocol)
The protocol that defines data transfer between peers. Not to be confused with the technology as a whole, or the company that created it,
both of which fall under the same name.

- [Specificationn](http://www.bittorrent.org/beps/bep_0003.html)

### PEX
Peer exchange is the protocol which allows peers to share lists of known peers directly, reducing the reliance on a tracker. 

- [Wikipedia](http://wki.pe/Peer_exchange)
- [Vuze](http://wiki.vuze.com/w/Peer_Exchange)
- [Specification (AZMP, LTEP)](https://wiki.theory.org/BitTorrentPeerExchangeConventions)

### µTP
A UDP variant of the BitTorrent data transfer protocol which solves congestion issues. 

- [Wikipedia](http://wki.pe/Micro_Transport_Protocol)
- [Specification](http://bittorrent.org/beps/bep_0029.html)
- [LEDBAT algorithm Specificationn](http://tools.ietf.org/html/rfc6817)

### DHT
A distributed hash table is a way of storing key-value data in a distributed fashion. In a sense, it is a simple distributed database.
Each peer is responsible for a part of the data, and peer ids are used to determine which peer has the data in question. BitTorrent uses
a specific implementation called "Mainline DHT" to allow for trackerless torrents by storing peer lists this way.

- [DHT - Wikipedia](http://a.wki.pe/DHT)
- [Mainline DHT - Wikipedia](http://wki.pe/Mainline_DHT)
- [Specificationn](http://www.bittorrent.org/beps/bep_0005.html)


### Magnet links
A way of transferring file metadata with a URI instead of a `.torrent` file. For example:

        magnet:?xt=urn:sha1:YNCKHTQCWBTRNJIV4WNAE52SJUQCZO5C
        
The `xt` value is a base-32 encoded SHA-1 hash of the file contents. This is used as a unique identifier for the file, and it can be used
to get peers and other information about the file from the swarm.

- [Wikipedia](http://wki.pe/Magnet_link)
- [Official Site](http://magnet-uri.sourceforge.net/)
- [Specificationn](http://magnet-uri.sourceforge.net/magnet-draft-overview.txt)


more:

- [UPnP](http://wki.pe/UPnP)
- [NAT-PMP](http://wki.pe/NAT-PMP)
- Somewhere in here, talk about NAT Traversal and STUN (which is also a WebRTC topic)
- [webseeding](http://wki.pe/BitTorrent#Web_seeding)
- [SDP](http://tools.ietf.org/html/rfc3485)