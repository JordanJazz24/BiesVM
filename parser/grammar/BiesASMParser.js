// Generated from grammar/BiesASM.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import BiesASMVisitor from './BiesASMVisitor.js';

const serializedATN = [4,1,26,80,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,4,0,23,8,0,11,0,12,0,24,
1,0,1,0,1,1,1,1,1,1,3,1,32,8,1,1,1,3,1,35,8,1,1,1,1,1,4,1,39,8,1,11,1,12,
1,40,1,1,1,1,1,1,1,1,1,2,1,2,3,2,49,8,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,3,4,62,8,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,5,8,73,8,8,10,
8,12,8,76,9,8,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,4,3,0,5,8,13,
16,20,21,2,0,9,9,12,12,2,0,10,11,17,19,1,0,22,23,78,0,22,1,0,0,0,2,28,1,
0,0,0,4,48,1,0,0,0,6,50,1,0,0,0,8,61,1,0,0,0,10,63,1,0,0,0,12,65,1,0,0,0,
14,67,1,0,0,0,16,69,1,0,0,0,18,77,1,0,0,0,20,23,3,2,1,0,21,23,3,4,2,0,22,
20,1,0,0,0,22,21,1,0,0,0,23,24,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,26,
1,0,0,0,26,27,5,0,0,1,27,1,1,0,0,0,28,29,5,1,0,0,29,31,5,22,0,0,30,32,3,
16,8,0,31,30,1,0,0,0,31,32,1,0,0,0,32,34,1,0,0,0,33,35,5,2,0,0,34,33,1,0,
0,0,34,35,1,0,0,0,35,36,1,0,0,0,36,38,5,24,0,0,37,39,3,4,2,0,38,37,1,0,0,
0,39,40,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,42,1,0,0,0,42,43,5,3,0,0,
43,44,5,22,0,0,44,45,5,24,0,0,45,3,1,0,0,0,46,49,3,6,3,0,47,49,3,8,4,0,48,
46,1,0,0,0,48,47,1,0,0,0,49,5,1,0,0,0,50,51,5,22,0,0,51,52,3,8,4,0,52,7,
1,0,0,0,53,62,3,10,5,0,54,55,3,12,6,0,55,56,3,18,9,0,56,62,1,0,0,0,57,58,
3,14,7,0,58,59,3,18,9,0,59,60,3,18,9,0,60,62,1,0,0,0,61,53,1,0,0,0,61,54,
1,0,0,0,61,57,1,0,0,0,62,9,1,0,0,0,63,64,7,0,0,0,64,11,1,0,0,0,65,66,7,1,
0,0,66,13,1,0,0,0,67,68,7,2,0,0,68,15,1,0,0,0,69,74,3,18,9,0,70,71,5,4,0,
0,71,73,3,18,9,0,72,70,1,0,0,0,73,76,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,
75,17,1,0,0,0,76,74,1,0,0,0,77,78,7,3,0,0,78,19,1,0,0,0,8,22,24,31,34,40,
48,61,74];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class BiesASMParser extends antlr4.Parser {

    static grammarFileName = "BiesASM.g4";
    static literalNames = [ null, "'$FUN'", "';'", "'$END'", "','", "'ADD'", 
                            "'SUB'", "'MUL'", "'DIV'", "'LDV'", "'BST'", 
                            "'BLD'", "'LDF'", "'APP'", "'RET'", "'HLT'", 
                            "'PRN'", "'BR'", "'BT'", "'BF'", "'POP'", "'SWP'" ];
    static symbolicNames = [ null, null, null, null, null, "ADD", "SUB", 
                             "MUL", "DIV", "LDV", "BST", "BLD", "LDF", "APP", 
                             "RET", "HLT", "PRN", "BR", "BT", "BF", "POP", 
                             "SWP", "LABEL", "NUMBER", "NEWLINE", "COMMENT", 
                             "WS" ];
    static ruleNames = [ "program", "function", "instruction", "labeledInstruction", 
                         "mnemonicInstruction", "mnemonicNoParams", "mnemonicWithOneParam", 
                         "mnemonicWithTwoParams", "parameterList", "parameter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = BiesASMParser.ruleNames;
        this.literalNames = BiesASMParser.literalNames;
        this.symbolicNames = BiesASMParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, BiesASMParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 22;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	                this.state = 20;
	                this.function_();
	                break;
	            case 5:
	            case 6:
	            case 7:
	            case 8:
	            case 9:
	            case 10:
	            case 11:
	            case 12:
	            case 13:
	            case 14:
	            case 15:
	            case 16:
	            case 17:
	            case 18:
	            case 19:
	            case 20:
	            case 21:
	            case 22:
	                this.state = 21;
	                this.instruction();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 24; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8388578) !== 0));
	        this.state = 26;
	        this.match(BiesASMParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_() {
	    let localctx = new FunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, BiesASMParser.RULE_function);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(BiesASMParser.T__0);
	        this.state = 29;
	        this.match(BiesASMParser.LABEL);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22 || _la===23) {
	            this.state = 30;
	            this.parameterList();
	        }

	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 33;
	            this.match(BiesASMParser.T__1);
	        }

	        this.state = 36;
	        this.match(BiesASMParser.NEWLINE);
	        this.state = 38; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 37;
	            this.instruction();
	            this.state = 40; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8388576) !== 0));
	        this.state = 42;
	        this.match(BiesASMParser.T__2);
	        this.state = 43;
	        this.match(BiesASMParser.LABEL);
	        this.state = 44;
	        this.match(BiesASMParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, BiesASMParser.RULE_instruction);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.labeledInstruction();
	            break;
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.mnemonicInstruction();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	labeledInstruction() {
	    let localctx = new LabeledInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, BiesASMParser.RULE_labeledInstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(BiesASMParser.LABEL);
	        this.state = 51;
	        this.mnemonicInstruction();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mnemonicInstruction() {
	    let localctx = new MnemonicInstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, BiesASMParser.RULE_mnemonicInstruction);
	    try {
	        this.state = 61;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 53;
	            this.mnemonicNoParams();
	            break;
	        case 9:
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 54;
	            this.mnemonicWithOneParam();
	            this.state = 55;
	            this.parameter();
	            break;
	        case 10:
	        case 11:
	        case 17:
	        case 18:
	        case 19:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 57;
	            this.mnemonicWithTwoParams();
	            this.state = 58;
	            this.parameter();
	            this.state = 59;
	            this.parameter();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mnemonicNoParams() {
	    let localctx = new MnemonicNoParamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, BiesASMParser.RULE_mnemonicNoParams);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3269088) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mnemonicWithOneParam() {
	    let localctx = new MnemonicWithOneParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, BiesASMParser.RULE_mnemonicWithOneParam);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===12)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mnemonicWithTwoParams() {
	    let localctx = new MnemonicWithTwoParamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, BiesASMParser.RULE_mnemonicWithTwoParams);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 920576) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterList() {
	    let localctx = new ParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, BiesASMParser.RULE_parameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.parameter();
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 70;
	            this.match(BiesASMParser.T__3);
	            this.state = 71;
	            this.parameter();
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, BiesASMParser.RULE_parameter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        _la = this._input.LA(1);
	        if(!(_la===22 || _la===23)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

BiesASMParser.EOF = antlr4.Token.EOF;
BiesASMParser.T__0 = 1;
BiesASMParser.T__1 = 2;
BiesASMParser.T__2 = 3;
BiesASMParser.T__3 = 4;
BiesASMParser.ADD = 5;
BiesASMParser.SUB = 6;
BiesASMParser.MUL = 7;
BiesASMParser.DIV = 8;
BiesASMParser.LDV = 9;
BiesASMParser.BST = 10;
BiesASMParser.BLD = 11;
BiesASMParser.LDF = 12;
BiesASMParser.APP = 13;
BiesASMParser.RET = 14;
BiesASMParser.HLT = 15;
BiesASMParser.PRN = 16;
BiesASMParser.BR = 17;
BiesASMParser.BT = 18;
BiesASMParser.BF = 19;
BiesASMParser.POP = 20;
BiesASMParser.SWP = 21;
BiesASMParser.LABEL = 22;
BiesASMParser.NUMBER = 23;
BiesASMParser.NEWLINE = 24;
BiesASMParser.COMMENT = 25;
BiesASMParser.WS = 26;

BiesASMParser.RULE_program = 0;
BiesASMParser.RULE_function = 1;
BiesASMParser.RULE_instruction = 2;
BiesASMParser.RULE_labeledInstruction = 3;
BiesASMParser.RULE_mnemonicInstruction = 4;
BiesASMParser.RULE_mnemonicNoParams = 5;
BiesASMParser.RULE_mnemonicWithOneParam = 6;
BiesASMParser.RULE_mnemonicWithTwoParams = 7;
BiesASMParser.RULE_parameterList = 8;
BiesASMParser.RULE_parameter = 9;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesASMParser.RULE_program;
    }

	EOF() {
	    return this.getToken(BiesASMParser.EOF, 0);
	};

	function_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionContext);
	    } else {
	        return this.getTypedRuleContext(FunctionContext,i);
	    }
	};

	instruction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstructionContext);
	    } else {
	        return this.getTypedRuleContext(InstructionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof BiesASMVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesASMParser.RULE_function;
    }

	LABEL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BiesASMParser.LABEL);
	    } else {
	        return this.getToken(BiesASMParser.LABEL, i);
	    }
	};


	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BiesASMParser.NEWLINE);
	    } else {
	        return this.getToken(BiesASMParser.NEWLINE, i);
	    }
	};


	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	instruction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstructionContext);
	    } else {
	        return this.getTypedRuleContext(InstructionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof BiesASMVisitor ) {
	        return visitor.visitFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesASMParser.RULE_instruction;
    }

	labeledInstruction() {
	    return this.getTypedRuleContext(LabeledInstructionContext,0);
	};

	mnemonicInstruction() {
	    return this.getTypedRuleContext(MnemonicInstructionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof BiesASMVisitor ) {
	        return visitor.visitInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LabeledInstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesASMParser.RULE_labeledInstruction;
    }

	LABEL() {
	    return this.getToken(BiesASMParser.LABEL, 0);
	};

	mnemonicInstruction() {
	    return this.getTypedRuleContext(MnemonicInstructionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof BiesASMVisitor ) {
	        return visitor.visitLabeledInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MnemonicInstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesASMParser.RULE_mnemonicInstruction;
    }

	mnemonicNoParams() {
	    return this.getTypedRuleContext(MnemonicNoParamsContext,0);
	};

	mnemonicWithOneParam() {
	    return this.getTypedRuleContext(MnemonicWithOneParamContext,0);
	};

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	mnemonicWithTwoParams() {
	    return this.getTypedRuleContext(MnemonicWithTwoParamsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof BiesASMVisitor ) {
	        return visitor.visitMnemonicInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MnemonicNoParamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesASMParser.RULE_mnemonicNoParams;
    }

	ADD() {
	    return this.getToken(BiesASMParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(BiesASMParser.SUB, 0);
	};

	MUL() {
	    return this.getToken(BiesASMParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(BiesASMParser.DIV, 0);
	};

	APP() {
	    return this.getToken(BiesASMParser.APP, 0);
	};

	RET() {
	    return this.getToken(BiesASMParser.RET, 0);
	};

	HLT() {
	    return this.getToken(BiesASMParser.HLT, 0);
	};

	PRN() {
	    return this.getToken(BiesASMParser.PRN, 0);
	};

	POP() {
	    return this.getToken(BiesASMParser.POP, 0);
	};

	SWP() {
	    return this.getToken(BiesASMParser.SWP, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof BiesASMVisitor ) {
	        return visitor.visitMnemonicNoParams(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MnemonicWithOneParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesASMParser.RULE_mnemonicWithOneParam;
    }

	LDV() {
	    return this.getToken(BiesASMParser.LDV, 0);
	};

	LDF() {
	    return this.getToken(BiesASMParser.LDF, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof BiesASMVisitor ) {
	        return visitor.visitMnemonicWithOneParam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MnemonicWithTwoParamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesASMParser.RULE_mnemonicWithTwoParams;
    }

	BST() {
	    return this.getToken(BiesASMParser.BST, 0);
	};

	BLD() {
	    return this.getToken(BiesASMParser.BLD, 0);
	};

	BR() {
	    return this.getToken(BiesASMParser.BR, 0);
	};

	BT() {
	    return this.getToken(BiesASMParser.BT, 0);
	};

	BF() {
	    return this.getToken(BiesASMParser.BF, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof BiesASMVisitor ) {
	        return visitor.visitMnemonicWithTwoParams(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesASMParser.RULE_parameterList;
    }

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof BiesASMVisitor ) {
	        return visitor.visitParameterList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BiesASMParser.RULE_parameter;
    }

	NUMBER() {
	    return this.getToken(BiesASMParser.NUMBER, 0);
	};

	LABEL() {
	    return this.getToken(BiesASMParser.LABEL, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof BiesASMVisitor ) {
	        return visitor.visitParameter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




BiesASMParser.ProgramContext = ProgramContext; 
BiesASMParser.FunctionContext = FunctionContext; 
BiesASMParser.InstructionContext = InstructionContext; 
BiesASMParser.LabeledInstructionContext = LabeledInstructionContext; 
BiesASMParser.MnemonicInstructionContext = MnemonicInstructionContext; 
BiesASMParser.MnemonicNoParamsContext = MnemonicNoParamsContext; 
BiesASMParser.MnemonicWithOneParamContext = MnemonicWithOneParamContext; 
BiesASMParser.MnemonicWithTwoParamsContext = MnemonicWithTwoParamsContext; 
BiesASMParser.ParameterListContext = ParameterListContext; 
BiesASMParser.ParameterContext = ParameterContext; 
