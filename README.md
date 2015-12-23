# Node.JS Webcam Example for Experimental Platform

[The node.js code](https://github.com/experimental-platform/example-nodejs-webcam/blob/master/index.js) has only a few lines and is easy to understand. It uses [fswebcam](http://manpages.ubuntu.com/manpages/lucid/man1/fswebcam.1.html) to capture images.
There's also a [PHP example](https://github.com/experimental-platform/example-php-webcam) if you don't want to use node.js.

## Requirements

* A machine that runs [Experimental Platform](https://github.com/experimental-platform/platform-configure-script)
* A webcam, we used [this](http://www.amazon.com/Logitech-Webcam-Widescreen-Calling-Recording/dp/B004FHO5Y6/)

## Installation

    git clone https://github.com/experimental-platform/example-nodejs-webcam.git
    cd example-nodejs-webcam
    git remote add platform ssh://dokku@your-box.local:8022/example-nodejs-webcam
    git push platform master
