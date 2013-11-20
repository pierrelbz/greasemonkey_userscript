// ==UserScript==
// @name           Drupal Boost
// @namespace       
// @description    Displays a message when I found drupal boost module in source code 
// @include        http://*.*/*
// @include        https://*.*/*
// @include        file://*
// @version        1.0
// @copyright      Pierre
// ==/UserScript==
comments=document.evaluate("//comment()",document,null,6,null);
for(var i=0; i<comments.snapshotLength; i++) {
 
	//console.log(comments.snapshotItem(i).data);
	if(comments.snapshotItem(i).data.indexOf('Page cached by Boost')>0){
	   var boost=comments.snapshotItem(i).data;
       var div = document.createElement('div');
       
       
       div.textContent =boost;
       div.setAttribute('style', ' font-size: 12px;font-family: Lucida Console;box-shadow: 3px 3px 5px black;cursor:pointer;position:absolute; left:0; top:0; background:#000; color:#fff; padding:3px; z-index:99999;');
         div.addEventListener('click', function(){
            this.style.display = 'none';
            this.style.height = '0';
            this.style.width = '0';
              
             div.removeChild(div.childNodes[0]);
        }, false);
       document.body.insertBefore(div, document.body.firstChild);
	}
}
