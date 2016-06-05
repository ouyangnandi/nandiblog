"use strict";goog.provide("Blockly.JavaScript.text");goog.require("Blockly.JavaScript");Blockly.JavaScript.text=function(){var a=Blockly.JavaScript.quote_(this.getTitleValue("TEXT"));return[a,Blockly.JavaScript.ORDER_ATOMIC]};Blockly.JavaScript.text_join=function(){var a;if(this.itemCount_==0){return["''",Blockly.JavaScript.ORDER_ATOMIC]}else{if(this.itemCount_==1){var c=Blockly.JavaScript.valueToCode(this,"ADD0",Blockly.JavaScript.ORDER_NONE)||"''";a="String("+c+")";return[a,Blockly.JavaScript.ORDER_FUNCTION_CALL]}else{if(this.itemCount_==2){var c=Blockly.JavaScript.valueToCode(this,"ADD0",Blockly.JavaScript.ORDER_NONE)||"''";var b=Blockly.JavaScript.valueToCode(this,"ADD1",Blockly.JavaScript.ORDER_NONE)||"''";a="String("+c+") + String("+b+")";return[a,Blockly.JavaScript.ORDER_ADDITION]}else{a=new Array(this.itemCount_);for(var d=0;d<this.itemCount_;d++){a[d]=Blockly.JavaScript.valueToCode(this,"ADD"+d,Blockly.JavaScript.ORDER_COMMA)||"''"}a="["+a.join(",")+"].join('')";return[a,Blockly.JavaScript.ORDER_FUNCTION_CALL]}}}};Blockly.JavaScript.text_append=function(){var b=Blockly.JavaScript.variableDB_.getName(this.getTitleValue("VAR"),Blockly.Variables.NAME_TYPE);var a=Blockly.JavaScript.valueToCode(this,"TEXT",Blockly.JavaScript.ORDER_NONE)||"''";return b+" = String("+b+") + String("+a+");\n"};Blockly.JavaScript.text_length=function(){var a=Blockly.JavaScript.valueToCode(this,"VALUE",Blockly.JavaScript.ORDER_FUNCTION_CALL)||"''";return[a+".length",Blockly.JavaScript.ORDER_MEMBER]};Blockly.JavaScript.text_isEmpty=function(){var a=Blockly.JavaScript.valueToCode(this,"VALUE",Blockly.JavaScript.ORDER_MEMBER)||"''";return["!"+a,Blockly.JavaScript.ORDER_LOGICAL_NOT]};Blockly.JavaScript.text_endString=function(){var d=this.getTitleValue("END")=="FIRST";var a;var c=Blockly.JavaScript.valueToCode(this,"NUM",Blockly.JavaScript.ORDER_COMMA)||"1";var b=Blockly.JavaScript.valueToCode(this,"TEXT",Blockly.JavaScript.ORDER_MEMBER)||"''";if(d){var c=Blockly.JavaScript.valueToCode(this,"NUM",Blockly.JavaScript.ORDER_COMMA)||"1";a=b+".substring(0, "+c+")"}else{var c=Blockly.JavaScript.valueToCode(this,"NUM",Blockly.JavaScript.ORDER_UNARY_NEGATION)||"1";if(c.match(/^\d+$/)&&!c.match(/^0+$/)){a=b+".slice(-"+c+")"}else{a=b+".slice(- "+c+" || Infinity)"}}return[a,Blockly.JavaScript.ORDER_FUNCTION_CALL]};Blockly.JavaScript.text_indexOf=function(){var a=this.getTitleValue("END")=="FIRST"?"indexOf":"lastIndexOf";var d=Blockly.JavaScript.valueToCode(this,"FIND",Blockly.JavaScript.ORDER_NONE)||"''";var c=Blockly.JavaScript.valueToCode(this,"VALUE",Blockly.JavaScript.ORDER_MEMBER)||"''";var b=c+"."+a+"("+d+") + 1";return[b,Blockly.JavaScript.ORDER_MEMBER]};Blockly.JavaScript.text_charAt=function(){var b=this.getTitleValue("WHERE")||"FROM_START";var a=Blockly.JavaScript.valueToCode(this,"AT",Blockly.JavaScript.ORDER_UNARY_NEGATION)||"1";var f=Blockly.JavaScript.valueToCode(this,"VALUE",Blockly.JavaScript.ORDER_MEMBER)||"''";switch(b){case"FIRST":var d=f+".charAt(0)";return[d,Blockly.JavaScript.ORDER_FUNCTION_CALL];case"LAST":var d=f+".slice(-1)";return[d,Blockly.JavaScript.ORDER_FUNCTION_CALL];case"FROM_START":if(a.match(/^-?\d+$/)){a=parseInt(a,10)-1}else{a+=" - 1"}var d=f+".charAt("+a+")";return[d,Blockly.JavaScript.ORDER_FUNCTION_CALL];case"FROM_END":var d=f+".slice(-"+a+").charAt(0)";return[d,Blockly.JavaScript.ORDER_FUNCTION_CALL];case"RANDOM":if(!Blockly.JavaScript.definitions_.text_random_letter){var e=Blockly.JavaScript.variableDB_.getDistinctName("text_random_letter",Blockly.Generator.NAME_TYPE);Blockly.JavaScript.text_charAt.text_random_letter=e;var c=[];c.push("function "+e+"(text) {");c.push("  var x = Math.floor(Math.random() * text.length);");c.push("  return text[x];");c.push("}");Blockly.JavaScript.definitions_.text_random_letter=c.join("\n")}d=Blockly.JavaScript.text_charAt.text_random_letter+"("+f+")";return[d,Blockly.JavaScript.ORDER_FUNCTION_CALL]}throw"Unhandled option (text_charAt)."};Blockly.JavaScript.text_changeCase=function(){var f=this.getTitleValue("CASE");var a=Blockly.JavaScript.text_changeCase.OPERATORS[f];var c;if(a){var e=Blockly.JavaScript.valueToCode(this,"TEXT",Blockly.JavaScript.ORDER_MEMBER)||"''";c=e+a}else{if(!Blockly.JavaScript.definitions_.text_toTitleCase){var d=Blockly.JavaScript.variableDB_.getDistinctName("text_toTitleCase",Blockly.Generator.NAME_TYPE);Blockly.JavaScript.text_changeCase.toTitleCase=d;var b=[];b.push("function "+d+"(str) {");b.push("  return str.replace(/\\S+/g,");b.push("      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});");b.push("}");Blockly.JavaScript.definitions_.text_toTitleCase=b.join("\n")}var e=Blockly.JavaScript.valueToCode(this,"TEXT",Blockly.JavaScript.ORDER_NONE)||"''";c=Blockly.JavaScript.text_changeCase.toTitleCase+"("+e+")"}return[c,Blockly.JavaScript.ORDER_FUNCTION_CALL]};Blockly.JavaScript.text_changeCase.OPERATORS={UPPERCASE:".toUpperCase()",LOWERCASE:".toLowerCase()",TITLECASE:null};Blockly.JavaScript.text_trim=function(){var c=this.getTitleValue("MODE");var a=Blockly.JavaScript.text_trim.OPERATORS[c];var b=Blockly.JavaScript.valueToCode(this,"TEXT",Blockly.JavaScript.ORDER_MEMBER)||"''";return[b+a,Blockly.JavaScript.ORDER_FUNCTION_CALL]};Blockly.JavaScript.text_trim.OPERATORS={LEFT:".trimLeft()",RIGHT:".trimRight()",BOTH:".trim()"};Blockly.JavaScript.text_print=function(){var a=Blockly.JavaScript.valueToCode(this,"TEXT",Blockly.JavaScript.ORDER_NONE)||"''";return"window.alert("+a+");\n"};Blockly.JavaScript.text_prompt=function(){var c=Blockly.JavaScript.quote_(this.getTitleValue("TEXT"));var b="window.prompt("+c+")";var a=this.getTitleValue("TYPE")=="NUMBER";if(a){b="window.parseFloat("+b+")"}return[b,Blockly.JavaScript.ORDER_FUNCTION_CALL]};