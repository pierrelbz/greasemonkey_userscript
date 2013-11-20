// ==UserScript==
// @name           abo LeMonde.fr
// @author         pierrelbz
// @description    modifie l'user agent pour le journal du monde 
// @include        http://www.lemonde.fr/*
// @include        https://www.lemonde.fr/*
// @version        0.1
// @run-at document-start
// ==/UserScript==
 
window.navigator.__defineGetter__('userAgent', function () {
    return 'Mozilla/5.0 ( google ) google';
});
