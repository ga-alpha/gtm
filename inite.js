

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
})();
