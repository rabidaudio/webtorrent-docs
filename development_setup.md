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

Now you are ready to contribute! Commit changes and send a pull request. However, much of the functionality has been
[intentionally](https://github.com/feross/webtorrent#the-node-way) abstracted into independent node modules.
A description of these modules is available [here](Modules). See each package for more information.