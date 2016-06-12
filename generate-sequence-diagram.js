#!/usr/bin/env node
var argv = require('yargs')
    .usage('Generate a sequence diagram from a diagram DSL file and output it as a png image with a given name. \nUsage: $0')
    .example('$0 -f diagram-file.txt -o output-file.png -t [hand|simple]')
    .demand('f')
    .alias('f', 'input')
    .describe('f', 'Input filename with the diagram DSL')
    .demand('o')
    .alias('o', 'output')
    .describe('o', 'Output filename. Supported formats include .png, .gif, .jpeg, and .pdf.')
    .alias('t', 'type')
    .describe('t', 'Diagram type.')
    .default('hand')
    .argv;

var fs = require('fs');
var Nightmare = require('nightmare');
var Handlebars = require('handlebars');
var sequenceDiagramTemplate = require('./sequenceDiagram.tpl.js');

var sequenceDiagram;
var sequenceDiagramCaption = "";
// console.log("type of :" +argv.type)
var sequenceDiagramTheme = "hand";//argv.type;
var tempFile = ".tmp.html";


var path = require('path');
var ext = path.extname(argv.f).substring(1);
console.log(ext);
sequenceDiagram = fs.readFileSync(argv.f, 'utf8');

var handlebarsContext = {
    "diagramTxt": sequenceDiagram,
    "caption": sequenceDiagramCaption,
    "theme": sequenceDiagramTheme
    // "sequenceDiagram": true
    // "flowDiagram": true
};

switch (ext) {
  case "flow":
    handlebarsContext.flowDiagram = true;
    break;
  case "sequence":
    handlebarsContext.sequenceDiagram = true;
    break;
  default:

}

var sequenceDiagramOutput = Handlebars.templates.sequenceDiagram(handlebarsContext);

fs.writeFileSync(tempFile, sequenceDiagramOutput);

// get below codes from https://github.com/segmentio/nightmare/pull/358

Nightmare.action('screenshotSelector', function (path, selector, done) {
  console.log('.screenshotSelector()');
  if (typeof selector === 'function') {
    done = selector;
    selector = path;
    path = undefined;
  };
  var self = this;

  this.evaluate_now(function (selector) {
    var element = document.querySelector(selector);
    if (element) {
      var rect = element.getBoundingClientRect();
      return {
        x: Math.round(rect.left),
        y: Math.round(rect.top),
        width: Math.round(rect.width),
        height: Math.round(rect.height)
      };
    }
  }, function (a, clip) {
    if (!clip) {
      throw new Error('invalid selector "' + selector + '"');
    }
    console.log('width:'+clip.width+" height:"+clip.height)
    self.child.call('screenshot', path, clip, function (error, img) {
        var buf = new Buffer(img.data);
        console.log('.screenshot() captured with length %s', buf.length);
        path ? fs.writeFile(path, buf, done) : done(null, buf);
    });

    //not work with nightmare 2.5.1
    // self.child.once('screenshot', function (img) {
    //   var buf = new Buffer(img.data);
    //   console.log('.screenshotSelector() captured with length %s', buf.length);
    //   path ? fs.writeFile(path, buf, done) : done(null, buf);
    // });
    // self.child.emit.('screenshot', path, clip);

  }, selector);
})

new Nightmare()
        .goto('file://' + __dirname +'/'+ tempFile)
        .screenshotSelector(argv.o, 'svg').end().then()
