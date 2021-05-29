var clickNum=0;
function startCounter()
{
    $('#progressBar').progressBarTimer().start();
}
   
function checkInput()
{
    if(!$("#codeInput").val())
    {
        alert("you must enter tracking code");
    }
    else if(clickNum == 0)
    {
        startCounter();
        clickNum++;
        setTimeout(
            function() 
            {
              //do something special
              $(".situationText").replaceWith('<h6 class="card-subtitle mb-2 text-muted situationText"><br />Working On It</h6>');
            }, 8000);
        
    }
}



window.onload = function () {
	$('#progressBar').progressBarTimer({ baseStyle: 'bg-info', warningStyle: 'bg-info', completeStyle: 'bg-success' , label : { show: true, type: 'percent' }});
    $(".startBtn").click(checkInput);
    clickNum = 0;
};