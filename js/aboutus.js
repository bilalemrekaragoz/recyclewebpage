$(document).ready(function(){
    
   

	var ourRequest = new XMLHttpRequest();
	ourRequest.overrideMimeType("application/json");
		
	ourRequest.open('GET','https://trackrecycle.herokuapp.com/aboutus-api.php');

	ourRequest.onload=function(){
		var ourData=JSON.parse(ourRequest.responseText);
		for(i=0 ; i<ourData.length; i++)
		{
			$("#img3").attr("src",ourData[i].image);
			$("p").text(ourData[i].text);
			console.log(ourData[i].text);
		}
	};
	ourRequest.send();


});





