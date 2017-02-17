$(document).ready(function () {

    $('#example2').raindrops({
        color:'#99d4a5',
        canvasHeight:300,
            density: 0.1,
            frequency: 0
    });

    frequencyNum = 0;

    $('#button').click(function (){
        
        frequencyNum +=5;

        console.log(frequencyNum);
        
        $('#example2').raindrops({
            color:'#99d4a5',
            density: 0.1,
            frequency: frequencyNum});

        })


    })

 


