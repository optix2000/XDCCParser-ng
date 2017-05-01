var packlist = function() {
    this.config = null;
    this.converted_packlist = [];

    this.fetch_config = function () {
        var xhttp = new XMLHttpRequest();
        var _this = this
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                _this.config = JSON.parse(xhttp.responseText);
            }
        }
        xhttp.open('GET', 'config.json', false);
        xhttp.send();
    }
    this.fetch_bot = function(name, url) {
        var otree = new XML.ObjTree();
        var xhttp = new XMLHttpRequest();
        var botdata;
        var _this = this
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
                    _this.converted_packlist.push(tmp);
                };
                p.k = _this.converted_packlist;
                p.flush();
            }
        }
        xhttp.open('GET', url, true);
        xhttp.send();
    }
    this.dosearch = function() {
        var search = document.getElementById('search').value.toLowerCase();
        var search_list = [];
        if (search != '') {
            for (i=0; i<this.converted_packlist.length; i++) {
                pack = this.converted_packlist[i];
                if (pack['f'].toLowerCase().includes(search)) {
                    search_list.push(pack);
                    console.log(pack);
                };
            };
            p.k = search_list;
        } else {
            p.k = this.converted_packlist;
        };
        p.flush();
    }


    this.init = function() {
        console.log('Initializing')
        p.init();
        this.fetch_config();
        var bots = this.config.bots
        for (var i = 0; i<bots.length; i++) {
            console.log('Loading '+ bots[i]['name'])
            this.fetch_bot(bots[i]['name'], bots[i]['url']);
        }
        console.log('Initialized');
    }
}
var pl = new packlist();
