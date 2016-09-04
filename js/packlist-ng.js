otree = new XML.ObjTree()
xhttp = new XMLHttpRequest()
var botdata;
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        botdata = otree.parseXML(this.responseText)
        p.k = botdata['iroffer']['packlist']['pack']
        p.flush();
    }
}
xhttp.open('GET', 'bot.xml', true);

init = function() {
    p.init();
    xhttp.send();
}
