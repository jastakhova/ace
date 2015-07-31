define(function(require, exports, module) {
"use strict";

var oop = require("../../lib/oop");
var Range = require("../../range").Range;
var BaseFoldMode = require("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function() {};
oop.inherits(FoldMode, BaseFoldMode);

(function() {

    // regular expressions that identify starting and stopping points
    this.foldingStartMarker = /^rule/; 
    this.foldingStopMarker = /^end$/;

    this.getFoldWidgetRange = function(session, foldStyle, row) {
	var startRow = row,
	    startRowLength = session.getLine(row).length,
	    endRow = session.getLength();
	while (++row < endRow) {
		var line = session.getLine(row);
		if (line.match(this.foldingStopMarker)) {
			return new Range(startRow, startRowLength, row, line.length);
		}
	}
	return new Range(startRow, startRowLength, endRow-1, session.getLine(endRow-1).length);
    };

}).call(FoldMode.prototype);

});

