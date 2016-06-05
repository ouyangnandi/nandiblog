"use strict";goog.provide("Blockly.Language.math");goog.require("Blockly.Language");Blockly.Language.math_number={helpUrl:Blockly.LANG_MATH_NUMBER_HELPURL,init:function(){this.setColour(230);this.appendDummyInput().appendTitle(new Blockly.FieldTextInput("0",Blockly.FieldTextInput.numberValidator),"NUM");this.setOutput(true,Number);this.setTooltip(Blockly.LANG_MATH_NUMBER_TOOLTIP)}};Blockly.Language.math_arithmetic={helpUrl:Blockly.LANG_MATH_ARITHMETIC_HELPURL,init:function(){this.setColour(230);this.setOutput(true,Number);this.appendValueInput("A").setCheck(Number);this.appendValueInput("B").setCheck(Number).appendTitle(new Blockly.FieldDropdown(this.OPERATORS),"OP");this.setInputsInline(true);var a=this;this.setTooltip(function(){var b=a.getTitleValue("OP");return a.TOOLTIPS[b]})}};Blockly.Language.math_arithmetic.OPERATORS=[["+","ADD"],["-","MINUS"],["\u00D7","MULTIPLY"],["\u00F7","DIVIDE"],["^","POWER"]];Blockly.Language.math_arithmetic.TOOLTIPS={ADD:Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_ADD,MINUS:Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS,MULTIPLY:Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY,DIVIDE:Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE,POWER:Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_POWER};Blockly.Language.math_single={helpUrl:Blockly.LANG_MATH_SINGLE_HELPURL,init:function(){this.setColour(230);this.setOutput(true,Number);this.appendValueInput("NUM").setCheck(Number).appendTitle(new Blockly.FieldDropdown(this.OPERATORS),"OP");var a=this;this.setTooltip(function(){var b=a.getTitleValue("OP");return a.TOOLTIPS[b]})}};Blockly.Language.math_single.OPERATORS=[[Blockly.LANG_MATH_SINGLE_OP_ROOT,"ROOT"],[Blockly.LANG_MATH_SINGLE_OP_ABSOLUTE,"ABS"],["-","NEG"],["ln","LN"],["log10","LOG10"],["e^","EXP"],["10^","POW10"]];Blockly.Language.math_single.TOOLTIPS={ROOT:Blockly.LANG_MATH_SINGLE_TOOLTIP_ROOT,ABS:Blockly.LANG_MATH_SINGLE_TOOLTIP_ABS,NEG:Blockly.LANG_MATH_SINGLE_TOOLTIP_NEG,LN:Blockly.LANG_MATH_SINGLE_TOOLTIP_LN,LOG10:Blockly.LANG_MATH_SINGLE_TOOLTIP_LOG10,EXP:Blockly.LANG_MATH_SINGLE_TOOLTIP_EXP,POW10:Blockly.LANG_MATH_SINGLE_TOOLTIP_POW10};Blockly.Language.math_trig={helpUrl:Blockly.LANG_MATH_TRIG_HELPURL,init:function(){this.setColour(230);this.setOutput(true,Number);this.appendValueInput("NUM").setCheck(Number).appendTitle(new Blockly.FieldDropdown(this.OPERATORS),"OP");var a=this;this.setTooltip(function(){var b=a.getTitleValue("OP");return a.TOOLTIPS[b]})}};Blockly.Language.math_trig.OPERATORS=[["sin","SIN"],["cos","COS"],["tan","TAN"],["asin","ASIN"],["acos","ACOS"],["atan","ATAN"]];Blockly.Language.math_trig.TOOLTIPS={SIN:Blockly.LANG_MATH_TRIG_TOOLTIP_SIN,COS:Blockly.LANG_MATH_TRIG_TOOLTIP_COS,TAN:Blockly.LANG_MATH_TRIG_TOOLTIP_TAN,ASIN:Blockly.LANG_MATH_TRIG_TOOLTIP_ASIN,ACOS:Blockly.LANG_MATH_TRIG_TOOLTIP_ACOS,ATAN:Blockly.LANG_MATH_TRIG_TOOLTIP_ATAN};Blockly.Language.math_constant={helpUrl:Blockly.LANG_MATH_CONSTANT_HELPURL,init:function(){this.setColour(230);this.setOutput(true,Number);this.appendDummyInput().appendTitle(new Blockly.FieldDropdown(this.CONSTANTS),"CONSTANT");this.setTooltip(Blockly.LANG_MATH_CONSTANT_TOOLTIP)}};Blockly.Language.math_constant.CONSTANTS=[["\u03c0","PI"],["e","E"],["\u03c6","GOLDEN_RATIO"],["sqrt(2)","SQRT2"],["sqrt(\u00bd)","SQRT1_2"],["\u221e","INFINITY"]];Blockly.Language.math_number_property={helpUrl:"",init:function(){this.setColour(230);this.appendValueInput("NUMBER_TO_CHECK").setCheck(Number);var a=new Blockly.FieldDropdown(this.PROPERTIES,function(b){var c=(b=="DIVISIBLE_BY");this.sourceBlock_.updateShape(c)});this.appendDummyInput().appendTitle(a,"PROPERTY");this.setInputsInline(true);this.setOutput(true,Boolean);this.setTooltip(Blockly.LANG_MATH_IS_TOOLTIP)},mutationToDom:function(){var a=document.createElement("mutation");var b=(this.getTitleValue("PROPERTY")=="DIVISIBLE_BY");a.setAttribute("divisor_input",b);return a},domToMutation:function(a){var b=(a.getAttribute("divisor_input")=="true");this.updateShape(b)},updateShape:function(b){var a=this.getInput("DIVISOR");if(b){if(!a){this.appendValueInput("DIVISOR").setCheck(Number)}}else{if(a){this.removeInput("DIVISOR")}}}};Blockly.Language.math_number_property.PROPERTIES=[[Blockly.LANG_MATH_IS_EVEN,"EVEN"],[Blockly.LANG_MATH_IS_ODD,"ODD"],[Blockly.LANG_MATH_IS_PRIME,"PRIME"],[Blockly.LANG_MATH_IS_WHOLE,"WHOLE"],[Blockly.LANG_MATH_IS_POSITIVE,"POSITIVE"],[Blockly.LANG_MATH_IS_NEGATIVE,"NEGATIVE"],[Blockly.LANG_MATH_IS_DIVISIBLE_BY,"DIVISIBLE_BY"]];Blockly.Language.math_change={helpUrl:Blockly.LANG_MATH_CHANGE_HELPURL,init:function(){this.setColour(230);this.appendValueInput("DELTA").setCheck(Number).appendTitle(Blockly.LANG_MATH_CHANGE_TITLE_CHANGE).appendTitle(new Blockly.FieldVariable(Blockly.LANG_MATH_CHANGE_TITLE_ITEM),"VAR").appendTitle(Blockly.LANG_MATH_CHANGE_INPUT_BY);this.setPreviousStatement(true);this.setNextStatement(true);var a=this;this.setTooltip(function(){return Blockly.LANG_MATH_CHANGE_TOOLTIP.replace("%1",a.getTitleValue("VAR"))})},getVars:function(){return[this.getTitleValue("VAR")]},renameVar:function(b,a){if(Blockly.Names.equals(b,this.getTitleValue("VAR"))){this.setTitleValue(a,"VAR")}}};Blockly.Language.math_round={helpUrl:Blockly.LANG_MATH_ROUND_HELPURL,init:function(){this.setColour(230);this.setOutput(true,Number);this.appendValueInput("NUM").setCheck(Number).appendTitle(new Blockly.FieldDropdown(this.OPERATORS),"OP");this.setTooltip(Blockly.LANG_MATH_ROUND_TOOLTIP)}};Blockly.Language.math_round.OPERATORS=[[Blockly.LANG_MATH_ROUND_OPERATOR_ROUND,"ROUND"],[Blockly.LANG_MATH_ROUND_OPERATOR_ROUNDUP,"ROUNDUP"],[Blockly.LANG_MATH_ROUND_OPERATOR_ROUNDDOWN,"ROUNDDOWN"]];Blockly.Language.math_on_list={helpUrl:Blockly.LANG_MATH_ONLIST_HELPURL,init:function(){var a=this;this.setColour(230);this.setOutput(true,Number);var b=new Blockly.FieldDropdown(this.OPERATORS,function(c){if(c=="MODE"){a.outputConnection.setCheck(Array)}else{a.outputConnection.setCheck(Number)}});this.appendValueInput("LIST").setCheck(Array).appendTitle(b,"OP").appendTitle(Blockly.LANG_MATH_ONLIST_INPUT_OFLIST);this.setTooltip(function(){var c=a.getTitleValue("OP");return a.TOOLTIPS[c]})}};Blockly.Language.math_on_list.OPERATORS=[[Blockly.LANG_MATH_ONLIST_OPERATOR_SUM,"SUM"],[Blockly.LANG_MATH_ONLIST_OPERATOR_MIN,"MIN"],[Blockly.LANG_MATH_ONLIST_OPERATOR_MAX,"MAX"],[Blockly.LANG_MATH_ONLIST_OPERATOR_AVERAGE,"AVERAGE"],[Blockly.LANG_MATH_ONLIST_OPERATOR_MEDIAN,"MEDIAN"],[Blockly.LANG_MATH_ONLIST_OPERATOR_MODE,"MODE"],[Blockly.LANG_MATH_ONLIST_OPERATOR_STD_DEV,"STD_DEV"],[Blockly.LANG_MATH_ONLIST_OPERATOR_RANDOM,"RANDOM"]];Blockly.Language.math_on_list.TOOLTIPS={SUM:Blockly.LANG_MATH_ONLIST_TOOLTIP_SUM,MIN:Blockly.LANG_MATH_ONLIST_TOOLTIP_MIN,MAX:Blockly.LANG_MATH_ONLIST_TOOLTIP_MAX,AVERAGE:Blockly.LANG_MATH_ONLIST_TOOLTIP_AVERAGE,MEDIAN:Blockly.LANG_MATH_ONLIST_TOOLTIP_MEDIAN,MODE:Blockly.LANG_MATH_ONLIST_TOOLTIP_MODE,STD_DEV:Blockly.LANG_MATH_ONLIST_TOOLTIP_STD_DEV,RANDOM:Blockly.LANG_MATH_ONLIST_TOOLTIP_RANDOM};Blockly.Language.math_modulo={helpUrl:Blockly.LANG_MATH_MODULO_HELPURL,init:function(){this.setColour(230);this.setOutput(true,Number);this.appendValueInput("DIVIDEND").setCheck(Number).appendTitle(Blockly.LANG_MATH_MODULO_INPUT_DIVIDEND);this.appendValueInput("DIVISOR").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendTitle("\u00F7");this.setInputsInline(true);this.setTooltip(Blockly.LANG_MATH_MODULO_TOOLTIP)}};Blockly.Language.math_constrain={helpUrl:Blockly.LANG_MATH_CONSTRAIN_HELPURL,init:function(){this.setColour(230);this.setOutput(true,Number);this.appendValueInput("VALUE").setCheck(Number).appendTitle(Blockly.LANG_MATH_CONSTRAIN_INPUT_CONSTRAIN);this.appendValueInput("LOW").setCheck(Number).appendTitle(Blockly.LANG_MATH_CONSTRAIN_INPUT_LOW);this.appendValueInput("HIGH").setCheck(Number).appendTitle(Blockly.LANG_MATH_CONSTRAIN_INPUT_HIGH);this.setInputsInline(true);this.setTooltip(Blockly.LANG_MATH_CONSTRAIN_TOOLTIP)}};Blockly.Language.math_random_int={helpUrl:Blockly.LANG_MATH_RANDOM_INT_HELPURL,init:function(){this.setColour(230);this.setOutput(true,Number);this.appendValueInput("FROM").setCheck(Number).appendTitle(Blockly.LANG_MATH_RANDOM_INT_INPUT_FROM);this.appendValueInput("TO").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendTitle(Blockly.LANG_MATH_RANDOM_INT_INPUT_TO);this.setInputsInline(true);this.setTooltip(Blockly.LANG_MATH_RANDOM_INT_TOOLTIP)}};Blockly.Language.math_random_float={helpUrl:Blockly.LANG_MATH_RANDOM_FLOAT_HELPURL,init:function(){this.setColour(230);this.setOutput(true,Number);this.appendDummyInput().appendTitle(Blockly.LANG_MATH_RANDOM_FLOAT_TITLE_RANDOM);this.setTooltip(Blockly.LANG_MATH_RANDOM_FLOAT_TOOLTIP)}};