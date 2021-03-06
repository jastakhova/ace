/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2012, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

/* This file was autogenerated from  (uuid: ) */
/****************************************************************************************
 * IT MIGHT NOT BE PERFECT ...But it's a good start from an existing *.tmlanguage file. *
 * fileTypes                                                                            *
 ****************************************************************************************/

define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var numRe = exports.numRe = "\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))";

var DroolsHighlightRules = function() {
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = {
        "start" : [
            {
              token : "comment", // multi line comment
              regex : "\\/\\*",
              push : "comment"
            },
            {
              token : "comment",
              regex : "//",
              next : "singleLineComment"
            },
            {
                token : "keyword",
                regex : "import"
            },
            {
                token : "keyword.operator",
                regex : "rule",
                next : "rule"
            }
        ],
        "content" : [
            {
                token : "keyword.operator",
                regex : "rule",
                next : "rule"
            },
            {
              token : "comment", // multi line comment
              regex : "\\/\\*",
              push : "comment"
            },
            {
              token : "comment",
              regex : "//",
              next : "singleLineComment"
            }
        ],
        "rule" : [
            {
                token : "variable.parameter",
                regex : "\"",
                next : "name"
            },
            {
              token : "comment", // multi line comment
              regex : "\\/\\*",
              push : "comment"
            },
            {
              token : "comment",
              regex : "//",
              next : "singleLineComment"
            }
        ],
        "name" : [
            {
                token : "variable.parameter",
                regex : "\"",
                next : "when"
            },
            {
                defaultToken : "variable.parameter"
            }
        ],
        "when" : [
            {
                token : "keyword.operator",
                regex : "when",
                next : "whenclause"
            },
            {
              token : "comment", // multi line comment
              regex : "\\/\\*",
              push : "comment"
            },
            {
              token : "comment",
              regex : "//",
              next : "singleLineComment"
            }
        ],
        "whenclause" : [
            {
                token : "keyword.operator",
                regex : "then",
                next : "body"
            },
            {
              token : "comment", // multi line comment
              regex : "\\/\\*",
              push : "comment"
            },
            {
              token : "comment",
              regex : "//",
              next : "singleLineComment"
            },
            {
              token : "string", // single line
              regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            },
            {
              token : "constant.numeric",
              regex : numRe
            }
        ],
        "body" : [
            {
                token : "keyword.operator",
                regex : "end",
                next : "content"
            },
            {
              token : "comment", // multi line comment
              regex : "\\/\\*",
              push : "comment"
            },
            {
              token : "comment",
              regex : "//",
              next : "singleLineComment"
            },
            {
              token : "string", // single line
              regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            },
            {
              token : "constant.numeric",
              regex : numRe
            }
        ],
        "comment" : [{
            token : "comment",
            regex : "\\*\\/",
            next : "pop"
          }, {
            defaultToken : "comment"
          }
        ],
        "singleLineComment" : [{
            token : "comment",
            regex : /\\$/,
            next : "singleLineComment"
          }, {
            token : "comment",
            regex : /$/,
            next : "pop"
          }, {
            defaultToken: "comment"
          }
        ]
    };

    this.normalizeRules();
};

oop.inherits(DroolsHighlightRules, TextHighlightRules);

exports.DroolsHighlightRules = DroolsHighlightRules;
});

