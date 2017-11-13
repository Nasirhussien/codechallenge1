$( document ).ready(readyNow)
var clickCounter = 0

function readyNow(){
    console.log('jquery')

    $('#generateButton').on('click',function(){ 
        clickCounter ++;
        $('#div1').append('<p>'+ clickCounter +'</p>');
        $('#div1').append("<button id = 'swapButton'> Swap </button>");
        $('#div1').append("<button id = 'deleteButton'> Delete </button>");
        $("#swapButton").on("click", function() {
            $('#div1').css("background", "yellow");
        })
        $('#deleteButton').on('click', function(){
            $(this).parent().remove();

        }
    )
        

    })
}