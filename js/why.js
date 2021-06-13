$(document).ready(function(){
    
   var text = "";

	var ourRequest = new XMLHttpRequest();
	ourRequest.overrideMimeType("application/json");
		
	ourRequest.open('GET','why.json');

	ourRequest.onload=function(){
		var ourData=JSON.parse(ourRequest.responseText);
        textCreator(ourData);
	};
	ourRequest.send();

    function textCreator(ourData)
    {
        for(i=0 ; i<ourData.length; i++)
        {
            text += '<h3>' + ourData[i].title + '</h3>' +
            '<div>' +  '<p>' + ourData[i].text + '</p> </div>';

            $(".why-container").html(text);
            console.log("anan");
        }
        
    }

});