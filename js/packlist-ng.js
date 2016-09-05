otree = new XML.ObjTree()
xhttp = new XMLHttpRequest()
var botdata;
var converted_packlist = [];
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        botdata = otree.parseXML(this.responseText)
        packlist = botdata['iroffer']['packlist']['pack']
        for (i=0; i<packlist.length; i++) {
            var tmp = {};
            var pack = packlist[i];
            tmp['s'] = Math.floor((parseInt(pack['packbytes'])/1024)/1024);
            tmp['b'] = 'Teacup';
            tmp['n'] = parseInt(pack['packnr']);
            tmp['f'] = pack['packname'];
            converted_packlist.push(tmp);
        };
        p.k = converted_packlist;
        p.flush();
    }
}
xhttp.open('GET', 'bot.xml', true);

dosearch = function() {
    var search = document.getElementById('search').value.toLowerCase();
    console.log(search);
    var search_list = [];
    if (search != '') {
        for (i=0; i<converted_packlist.length; i++) {
            pack = converted_packlist[i];
            if (pack['f'].toLowerCase().includes(search)) {
                search_list.push(pack);
                console.log(pack);
            };
        };
        p.k = search_list;
    } else {
        p.k = converted_packlist;
        console.log('nope');
    };
    p.flush();
}


init = function() {
    console.log('init');
    p.init();
    xhttp.send();
}
