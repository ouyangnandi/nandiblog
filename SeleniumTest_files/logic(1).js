'use strict';goog.provide('Blockly.JavaScript.logic');goog.require('Blockly.JavaScript');Blockly.JavaScript.logic_compare=function(){var mode=this.getTitleValue('OP');var operator=Blockly.JavaScript.logic_compare.OPERATORS[mode];var order=(operator=='=='||operator=='!=')?Blockly.JavaScript.ORDER_EQUALITY:Blockly.JavaScript.ORDER_RELATIONAL;var argument0=Blockly.JavaScript.valueToCode(this,'A',order)||'0';var argument1=Blockly.JavaScript.valueToCode(this,'B',order)||'0';var code=argument0+' '+ operator+' '+ argument1;return[code,order];};Blockly.JavaScript.logic_compare.OPERATORS={EQ:'==',NEQ:'!=',LT:'<',LTE:'<=',GT:'>',GTE:'>='};Blockly.JavaScript.logic_operation=function(){var operator=(this.getTitleValue('OP')=='AND')?'&&':'||';var order=(operator=='&&')?Blockly.JavaScript.ORDER_LOGICAL_AND:Blockly.JavaScript.ORDER_LOGICAL_OR;var argument0=Blockly.JavaScript.valueToCode(this,'A',order)||'false';var argument1=Blockly.JavaScript.valueToCode(this,'B',order)||'false';var code=argument0+' '+ operator+' '+ argument1;return[code,order];};Blockly.JavaScript.logic_negate=function(){var order=Blockly.JavaScript.ORDER_LOGICAL_NOT;var argument0=Blockly.JavaScript.valueToCode(this,'BOOL',order)||'false';var code='!'+ argument0;return[code,order];};Blockly.JavaScript.logic_boolean=function(){var code=(this.getTitleValue('BOOL')=='TRUE')?'true':'false';return[code,Blockly.JavaScript.ORDER_ATOMIC];};Blockly.JavaScript.logic_null=function(){return['null',Blockly.JavaScript.ORDER_ATOMIC];};Blockly.JavaScript.logic_ternary=function(){var value_if=Blockly.JavaScript.valueToCode(this,'IF',Blockly.JavaScript.ORDER_CONDITIONAL)||'false';var value_then=Blockly.JavaScript.valueToCode(this,'THEN',Blockly.JavaScript.ORDER_CONDITIONAL)||'null';var value_else=Blockly.JavaScript.valueToCode(this,'ELSE',Blockly.JavaScript.ORDER_CONDITIONAL)||'null';var code=value_if+' ? '+ value_then+' : '+ value_else
return[code,Blockly.JavaScript.ORDER_CONDITIONAL];};