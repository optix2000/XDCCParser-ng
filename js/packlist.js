/**
 * XDCC Parser
 * |- Javascript Module
 *
 * This software is free software and you are permitted to
 * modify and redistribute it under the terms of the GNU General
 * Public License version 3 as published by the Free Sofware
 * Foundation.
 *
 * @link http://xdccparser.is-fabulo.us/
 * @version 1.2.0
 * @author Alex 'xshadowfire' Yu <ayu@xshadowfire.net>
 * @author DrX
 * @copyright 2008-2009 Alex Yu and DrX
 */

function p() {
	this.setSkin=function(id) {
		document.getElementById("skin").href = "css/style"+id+".css";
		var exdate=new Date();
		exdate.setDate(exdate.getDate()+7);
		document.cookie="skin"+"="+escape(id)+";expires="+exdate.toGMTString();
	};
}

var p = new p();
