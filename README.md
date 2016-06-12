[![Build Status](https://travis-ci.org/schrepfler/sequence-diagram-generator.svg?branch=master)](https://travis-ci.org/schrepfler/sequence-diagram-generator) [![Stories in Ready](https://badge.waffle.io/schrepfler/sequence-diagram-generator.png?label=ready&title=Ready)](https://waffle.io/schrepfler/sequence-diagram-generator)
Sequence Diagram Generator
=====================

This project can be used to generate sequence diagrams from the command line after defining the diagram with a simple DSL. It's a node wrapper around js-sequence-diagrams, check this page for DSL syntax http://bramp.github.io/js-sequence-diagrams/


+ add Support for flowchart.js
+ distinguish flow or sequence with file extented name. look run-demo.sh
```
./generate-sequence-diagram.js -f sequence-diagram.sequence -o sequence-diagram.png
./generate-sequence-diagram.js -f flowchart-diagram.flow -o flow-diagram.png
```
* Upgrade nightmare to 2.5.1 the latest with Electron

Requirements
--------------
node.js, npm, phantomjs, handlebars

Setting up project
--------------

Clone project from git repository
```sh
git clone https://github.com/schrepfler/sequence-diagram-generator.git
```

Fetch dependencies
```sh
npm install
```

Generating sequence diagrams
--------------

Edit the sequence-diagrams.txt (or make your own) file according to the diagram syntax and after running the following command you will find a png with your image.

```sh
./generate-sequence-diagram.js -f sequence-diagram.txt -o sequence-diagram.png
```
TODO
=======

* Add an API eg.
```sh
var generator = require('generate-sequence-diagrams');
generator.generate('my dsl text', function (data) { // data is the output image });
```
* See if we can avoid having to modify the tpl after precompilation.
* Full lines seem not to be rendered, check with nightmare team or phantom or js-sequence-diagram project
* npm-ise and publish
* Add proper image caption above and below the image with stylesheet
* See if libs can be fetched as deps
* Tests
  * On body
  * On image
