var packlist = function() {
    this.converted_packlist = [];

    this.fetch_bot = function(name, url) {
        var otree = new XML.ObjTree();
        var xhttp = new XMLHttpRequest();
        var botdata;
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                botdata = otree.parseXML(xhttp.responseText);
                packlist = botdata['iroffer']['packlist']['pack'];
                for (i=0; i<packlist.length; i++) {
                    var tmp = {};
                    var pack = packlist[i];
                    tmp['s'] = Math.floor((parseInt(pack['packbytes'])/1024)/1024);
                    tmp['b'] = name;
                    tmp['n'] = parseInt(pack['packnr']);
                    tmp['f'] = pack['packname'];
                    this.converted_packlist.push(tmp);
                };
                p.k = this.converted_packlist;
                p.flush();
            }
        }
        xhttp.open('GET', url, true);
        xhttp.send();
    }
    this.dosearch = function() {
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


    this.init = function() {
        console.log('init');
        p.init();
        this.fetch_bot();
    }
}
var pl = new packlist();
