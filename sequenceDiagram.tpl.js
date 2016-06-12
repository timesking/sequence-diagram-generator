(function() {
  var Handlebars              = require('handlebars');
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['sequenceDiagram'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        var diagram = Diagram.parse($('#language').val());\n        diagram.drawSVG('diagram', {theme: '"
    + escapeExpression(((helper = (helper = helpers.theme || (depth0 != null ? depth0.theme : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"theme","hash":{},"data":data}) : helper)))
    + "'});\n";
},"3":function(depth0,helpers,partials,data) {
  return "        var diagram = flowchart.parse($('#language').val());\n        diagram.drawSVG('diagram');\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<!DOCTYPE html>\n<!--[if lt IE 7]>\n<html class=\"no-js lt-ie9 lt-ie8 lt-ie7\"> <![endif]-->\n<!--[if IE 7]>\n<html class=\"no-js lt-ie9 lt-ie8\"> <![endif]-->\n<!--[if IE 8]>\n<html class=\"no-js lt-ie9\"> <![endif]-->\n<!--[if gt IE 8]><!-->\n<html class=\"no-js\"> <!--<![endif]-->\n<head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n    <title></title>\n</head>\n\n<textarea id=\"language\" rows=\"10\" cols=\"50\" style=\"display: none\">\n    ";
  stack1 = ((helper = (helper = helpers.diagramTxt || (depth0 != null ? depth0.diagramTxt : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"diagramTxt","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n</textarea>\n\n<div style=\"font-size:80%; text-align:center; display: inline-block\">\n    <div id=\"diagram\" style=\"padding-bottom:0.5em;\"></div>\n    "
    + escapeExpression(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"caption","hash":{},"data":data}) : helper)))
    + "\n</div>\n\n<!--<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js\"></script>-->\n<script src=\"jquery.min.js\"></script>\n\n<!--script src=\"underscore-min.js\"></script-->\n<script src=\"lodash.min.js\"></script>\n<script src=\"raphael-min.js\"></script>\n<!--script src=\"https://raw.github.com/DmitryBaranovskiy/raphael/master/raphael-min.js\"></script-->\n\n<script src=\"fonts/daniel/daniel_700.font.js\"></script>\n<!--\n<script src=\"../build/grammar.js\"></script>\n<script src=\"../src/diagram.js\"></script>\n<script src=\"../src/jquery-plugin.js\"></script>\n\n<script src=\"../src/sequence-diagram.js\"></script>\n-->\n\n<script src=\"sequence-diagram-min.js\"></script>\n<script src=\"flowchart.min.js\"></script>\n<script>\n    $(document).ready(function () {\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.sequenceDiagram : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.flowDiagram : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    });\n</script>\n</body>\n</html>\n";
},"useData":true});
})();
