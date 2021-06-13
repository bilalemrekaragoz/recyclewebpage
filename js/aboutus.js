$(document).ready(function() {
	
		var ourRequest = new XMLHttpRequest();
		ourRequest.overrideMimeType("application/json");
			 
		ourRequest.open('GET','https://trackrecycle.herokuapp.com/aboutus-api.php');

		ourRequest.onload=function(){
			var ourData=JSON.parse(ourRequest.responseText);
			for(i=0 ; i<ourData.lenght; i++)
			{
				var imgID = "#img"+i;
				$(imgID).attr("src",ourData[i].image);
			}
		};
		ourRequest.send();	

	
	}); // end ready