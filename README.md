# Webcam Example for Experimental Platform

[The node.js code](https://github.com/experimental-platform/example-webcam/blob/master/index.js) is easy to understand: It uses [fswebcam](http://manpages.ubuntu.com/manpages/lucid/man1/fswebcam.1.html) to capture images.

## Requirements

* A machine that runs [Experimental Platform](https://github.com/experimental-platform/platform-configure-script)
* A webcam, we used [this](http://www.amazon.com/Logitech-Webcam-Widescreen-Calling-Recording/dp/B004FHO5Y6/)

## Installation

    git clone git@github.com:experimental-platform/webcam-example.git
    cd webcam-example
    git remote add platform ssh://dokku@your-box.local:8022/webcam-example
    git push platform master
