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


<link rel="stylesheet" src="2554919/github.css">

<style>
body {
  font-family: Helvetica, arial, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;
  padding: 30px; }

body > *:first-child {
  margin-top: 0 !important; }
body > *:last-child {
  margin-bottom: 0 !important; }

a {
  color: #4183C4; }
a.absent {
  color: #cc0000; }
a.anchor {
  display: block;
  padding-left: 30px;
  margin-left: -30px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0; }

h1, h2, h3, h4, h5, h6 {
  margin: 20px 0 10px;
  padding: 0;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  cursor: text;
  position: relative; }

h1:hover a.anchor, h2:hover a.anchor, h3:hover a.anchor, h4:hover a.anchor, h5:hover a.anchor, h6:hover a.anchor {
  background: url("../../images/modules/styleguide/para.png") no-repeat 10px center;
  text-decoration: none; }

h1 tt, h1 code {
  font-size: inherit; }

h2 tt, h2 code {
  font-size: inherit; }

h3 tt, h3 code {
  font-size: inherit; }

h4 tt, h4 code {
  font-size: inherit; }

h5 tt, h5 code {
  font-size: inherit; }

h6 tt, h6 code {
  font-size: inherit; }

h1 {
  font-size: 28px;
  color: black; }

h2 {
  font-size: 24px;
  border-bottom: 1px solid #cccccc;
  color: black; }

h3 {
  font-size: 18px; }

h4 {
  font-size: 16px; }

h5 {
  font-size: 14px; }

h6 {
  color: #777777;
  font-size: 14px; }

p, blockquote, ul, ol, dl, li, table, pre {
  margin: 15px 0; }

hr {
  background: transparent url("../../images/modules/pulls/dirty-shade.png") repeat-x 0 0;
  border: 0 none;
  color: #cccccc;
  height: 4px;
  padding: 0; }

body > h2:first-child {
  margin-top: 0;
  padding-top: 0; }
body > h1:first-child {
  margin-top: 0;
  padding-top: 0; }
  body > h1:first-child + h2 {
    margin-top: 0;
    padding-top: 0; }
body > h3:first-child, body > h4:first-child, body > h5:first-child, body > h6:first-child {
  margin-top: 0;
  padding-top: 0; }

a:first-child h1, a:first-child h2, a:first-child h3, a:first-child h4, a:first-child h5, a:first-child h6 {
  margin-top: 0;
  padding-top: 0; }

h1 p, h2 p, h3 p, h4 p, h5 p, h6 p {
  margin-top: 0; }

li p.first {
  display: inline-block; }

ul, ol {
  padding-left: 30px; }

ul :first-child, ol :first-child {
  margin-top: 0; }

ul :last-child, ol :last-child {
  margin-bottom: 0; }

dl {
  padding: 0; }
  dl dt {
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    padding: 0;
    margin: 15px 0 5px; }
    dl dt:first-child {
      padding: 0; }
    dl dt > :first-child {
      margin-top: 0; }
    dl dt > :last-child {
      margin-bottom: 0; }
  dl dd {
    margin: 0 0 15px;
    padding: 0 15px; }
    dl dd > :first-child {
      margin-top: 0; }
    dl dd > :last-child {
      margin-bottom: 0; }

blockquote {
  border-left: 4px solid #dddddd;
  padding: 0 15px;
  color: #777777; }
  blockquote > :first-child {
    margin-top: 0; }
  blockquote > :last-child {
    margin-bottom: 0; }

table {
  padding: 0; }
  table tr {
    border-top: 1px solid #cccccc;
    background-color: white;
    margin: 0;
    padding: 0; }
    table tr:nth-child(2n) {
      background-color: #f8f8f8; }
    table tr th {
      font-weight: bold;
      border: 1px solid #cccccc;
      text-align: left;
      margin: 0;
      padding: 6px 13px; }
    table tr td {
      border: 1px solid #cccccc;
      text-align: left;
      margin: 0;
      padding: 6px 13px; }
    table tr th :first-child, table tr td :first-child {
      margin-top: 0; }
    table tr th :last-child, table tr td :last-child {
      margin-bottom: 0; }

img {
  max-width: 100%; }

span.frame {
  display: block;
  overflow: hidden; }
  span.frame > span {
    border: 1px solid #dddddd;
    display: block;
    float: left;
    overflow: hidden;
    margin: 13px 0 0;
    padding: 7px;
    width: auto; }
  span.frame span img {
    display: block;
    float: left; }
  span.frame span span {
    clear: both;
    color: #333333;
    display: block;
    padding: 5px 0 0; }
span.align-center {
  display: block;
  overflow: hidden;
  clear: both; }
  span.align-center > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: center; }
  span.align-center span img {
    margin: 0 auto;
    text-align: center; }
span.align-right {
  display: block;
  overflow: hidden;
  clear: both; }
  span.align-right > span {
    display: block;
    overflow: hidden;
    margin: 13px 0 0;
    text-align: right; }
  span.align-right span img {
    margin: 0;
    text-align: right; }
span.float-left {
  display: block;
  margin-right: 13px;
  overflow: hidden;
  float: left; }
  span.float-left span {
    margin: 13px 0 0; }
span.float-right {
  display: block;
  margin-left: 13px;
  overflow: hidden;
  float: right; }
  span.float-right > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: right; }

code, tt {
  margin: 0 2px;
  padding: 0 5px;
  white-space: nowrap;
  border: 1px solid #eaeaea;
  background-color: #f8f8f8;
  border-radius: 3px; }

pre code {
  margin: 0;
  padding: 0;
  white-space: pre;
  border: none;
  background: transparent; }

.highlight pre {
  background-color: #f8f8f8;
  border: 1px solid #cccccc;
  font-size: 13px;
  line-height: 19px;
  overflow: auto;
  padding: 6px 10px;
  border-radius: 3px; }

pre {
  background-color: #f8f8f8;
  border: 1px solid #cccccc;
  font-size: 13px;
  line-height: 19px;
  overflow: auto;
  padding: 6px 10px;
  border-radius: 3px; }
  pre code, pre tt {
    background-color: transparent;
    border: none; }
</style>

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
    
