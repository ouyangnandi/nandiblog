'use strict';goog.provide('Blockly.Language.logic');goog.require('Blockly.Language');Blockly.Language.logic_compare={helpUrl:Blockly.LANG_LOGIC_COMPARE_HELPURL,init:function(){this.setColour(120);this.setOutput(true,Boolean);this.appendValueInput('A');this.appendValueInput('B').appendTitle(new Blockly.FieldDropdown(this.OPERATORS),'OP');this.setInputsInline(true);var thisBlock=this;this.setTooltip(function(){var op=thisBlock.getTitleValue('OP');return thisBlock.TOOLTIPS[op];});}};Blockly.Language.logic_compare.OPERATORS=[['=','EQ'],['\u2260','NEQ'],['<','LT'],['\u2264','LTE'],['>','GT'],['\u2265','GTE']];Blockly.Language.logic_compare.TOOLTIPS={EQ:Blockly.LANG_LOGIC_COMPARE_TOOLTIP_EQ,NEQ:Blockly.LANG_LOGIC_COMPARE_TOOLTIP_NEQ,LT:Blockly.LANG_LOGIC_COMPARE_TOOLTIP_LT,LTE:Blockly.LANG_LOGIC_COMPARE_TOOLTIP_LTE,GT:Blockly.LANG_LOGIC_COMPARE_TOOLTIP_GT,GTE:Blockly.LANG_LOGIC_COMPARE_TOOLTIP_GTE};Blockly.Language.logic_operation={helpUrl:Blockly.LANG_LOGIC_OPERATION_HELPURL,init:function(){this.setColour(120);this.setOutput(true,Boolean);this.appendValueInput('A').setCheck(Boolean);this.appendValueInput('B').setCheck(Boolean).appendTitle(new Blockly.FieldDropdown(this.OPERATORS),'OP');this.setInputsInline(true);var thisBlock=this;this.setTooltip(function(){var op=thisBlock.getTitleValue('OP');return thisBlock.TOOLTIPS[op];});}};Blockly.Language.logic_operation.OPERATORS=[[Blockly.LANG_LOGIC_OPERATION_AND,'AND'],[Blockly.LANG_LOGIC_OPERATION_OR,'OR']];Blockly.Language.logic_operation.TOOLTIPS={AND:Blockly.LANG_LOGIC_OPERATION_TOOLTIP_AND,OR:Blockly.LANG_LOGIC_OPERATION_TOOLTIP_OR};Blockly.Language.logic_negate={helpUrl:Blockly.LANG_LOGIC_NEGATE_HELPURL,init:function(){this.setColour(120);this.setOutput(true,Boolean);this.appendValueInput('BOOL').setCheck(Boolean).appendTitle(Blockly.LANG_LOGIC_NEGATE_INPUT_NOT);this.setTooltip(Blockly.LANG_LOGIC_NEGATE_TOOLTIP);}};Blockly.Language.logic_boolean={helpUrl:Blockly.LANG_LOGIC_BOOLEAN_HELPURL,init:function(){this.setColour(120);this.setOutput(true,Boolean);this.appendDummyInput().appendTitle(new Blockly.FieldDropdown(this.BOOLEANS),'BOOL');this.setTooltip(Blockly.LANG_LOGIC_BOOLEAN_TOOLTIP);}};Blockly.Language.logic_boolean.BOOLEANS=[[Blockly.LANG_LOGIC_BOOLEAN_TRUE,'TRUE'],[Blockly.LANG_LOGIC_BOOLEAN_FALSE,'FALSE']];Blockly.Language.logic_null={helpUrl:Blockly.LANG_LOGIC_NULL_HELPURL,init:function(){this.setColour(120);this.setOutput(true,null);this.appendDummyInput().appendTitle(Blockly.LANG_LOGIC_NULL);this.setTooltip(Blockly.LANG_LOGIC_NULL_TOOLTIP);}};Blockly.Language.logic_ternary={helpUrl:Blockly.LANG_LOGIC_TERNARY_HELPURL,init:function(){this.setColour(120);this.appendValueInput('IF').setCheck(Boolean).appendTitle(Blockly.LANG_LOGIC_TERNARY_CONDITION);this.appendValueInput('THEN').setCheck(null).appendTitle(Blockly.LANG_LOGIC_TERNARY_IF_TRUE);this.appendValueInput('ELSE').setCheck(null).appendTitle(Blockly.LANG_LOGIC_TERNARY_IF_FALSE);this.setOutput(true,null);this.setTooltip(Blockly.LANG_LOGIC_TERNARY_TOOLTIP);}};