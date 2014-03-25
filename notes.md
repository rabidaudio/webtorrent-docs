<!--
Thanks for the email. I'm glad you like the WebTorrent concept.
We could definitely use some help with documentation on a few fronts. First, the "getting started" experience for new developers
isn't very good right now. Having a simple, straightforward guide for how to install node.js, git clone the project, install
dependencies, etc. would go a long way to bringing in new contributors. We could put these on the webtorrent wiki here:
https://github.com/feross/webtorrent/wiki
We should also add the explanation of what webtorrent is and what the plans are from https://github.com/feross/webtorrent/issues/39,
and expand on it and clarify where necessary. Would be great to have another set of eyes to fix the parts that aren't clear enough.
Next, there are lots of packages that webtorrent depends on. There's a partial list here:
https://github.com/feross/webtorrent#npm-modules
Most of these were written by me, so we have access to update these docs. Some of the docs are pretty good as is, but some,
like https://github.com/feross/bittorrent-swarm are lacking. If we could fully document the API of these packages, that would be awesome.
Lastly, we need a webtorrent website. I'm going to add that soon. I want a "docs" section on the site to contain all the docs for
each module that webtorrent uses so people can learn about each piece. So the docs will hopefully have lots of visibility and help
bring in new developers.
If you have other ideas, let's talk. Thanks for any help you provide
-->

Overview

Goals

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
Most platform repositories are usually outdated, so it is better to build Node from source. Start by installing the prerequsites.
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

Now, install the dependancies:

        npm install

This will install a list of dependant Node modules used by this project from `npm`. The list is included in [`package.json`](https://github.com/feross/webtorrent/blob/master/package.json).

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
        
To build the chrome app and install it, simply run npm start
This will also run bin/start.js which will try to add the app into chrome. this could fail for several reasons
    - you aren't using Chrome Canary on Mac
    - you are running chromium
    - you are running Windows
    - ???
If this happens, and `chrome/bundle.js` and `chrome/main.css` exist, you can ignore the error install it manually
by dragging the `chrome/` directory into the `chrome://extensions` page. Make sure you have enabled developer mode
in Chrome first:
<!----TODO---->

Use the watch command to automatically build when changes are made.

Use the "Reload Extension" button to reload the app after changes are made.

Now you are ready to contribute! Commit changes and send a pull request. However, much of the functionality has been
[intentionally](https://github.com/feross/webtorrent#the-node-way) abstracted into independant node modules.
A description of these modules is available below. See each package for more information.
    
Dependant packages overview
    webtorrent (main repo)
    bittorrent-protocol
    bittorrent-swarm
    bittorrent-dht (work-in-progress)
    magnet-uri
    parse-torrent
    buffer
    chrome-net
    chrome-dgram
    chrome-portfinder
    drag-drop
    webtorrent-protocol (todo)
    webtorrent-dht (todo)
    webtorrent-swarm (todo)
    webtorrent-bootstrap (todo)
    webworker-pool (todo)
    webtorrent-verifier (todo)
    sdp-compress (todo)
    webtorrent-chrome (todo)
    
Intro to torrent protocols
    How bittorrent works
    primary protocol
    torrent files
    magnet links
    DHT
    swarm

Intro to WebRTC
    
Improve dependant package docs:
    bittorrent-swarm
    bittorrent-dht
    probably more
<!----TODO---->
Intro to streams in JS
    https://github.com/substack/stream-handbook
    
