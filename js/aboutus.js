$(document).ready(function(){
    
   

	var ourRequest = new XMLHttpRequest();
	ourRequest.overrideMimeType("application/json");
		
	ourRequest.open('GET','aboutus.json');

	ourRequest.onload=function(){
		var ourData=JSON.parse(ourRequest.responseText);
		var imgID;
		var nameID;
		for(i=0 ; i<ourData.length; i++)
		{
			imgID = "#img"+i;
			$(imgID).attr("src",ourData[i].image);
			
			nameID = "#name"+i;
			$(nameID).text(ourData[i].text);
		}
	};
	ourRequest.send();


});





