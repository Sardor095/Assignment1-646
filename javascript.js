 //STEP 16
 $(function() {
    $('body').on('click', '#sardor', function(){
        window.alert('Guess What? You Clicked the button that was DANGEROUS =)')
    });
});
// STEP 17
$(function(){
    $('#sarik').bind('click', function() {
        window.alert('Unbelievable MAN! You did that again!!');
    });
});
//STEP 18
$(function() {
    $('#sar').on('click', function() {
        window.alert('Oh Man You really like clicking a Buttons!hahaha =D!!!')
    });
});
// STEP 19
$(function () {
    $('body').on('click', '#Sar2', function() {
        window.alert('You really gotta see a Doctor');
    });
});
// STEP 20
$(function () {
    $('#sar3').css('width','400px')
            .css('height', '400px')
            .css('background-color','#ff6348');
    $('body').on({
        mouseenter: function () {
            window.alert('YOU ENTERED THE DENGEROUS ZONE!');
        },
        mouseleave: function () {
            window.alert('uhh! Thank goodness you left the DENGEROUS ZONE!')
        }
    }, '#sar3');
});
//STEP 21

// ANOTHER METHOD

// $(function(){
//     $('#sar4').css('width','200px')
//                 .css('height','200px')
//                 .css('background-color','silver');
//     $('#in').css('margin','50px')
            
//     $('body').on('mouseenter', 'span', function(){
//         window.alert('You Entered to the Narnia!');
//     });
//     $('body').on('mouseleave','span', function(){
//         window.alert('You left the Narnia. Why didn\'t you like it?');
//     });
//     $('body').on('click', 'span', function() {
//         window.alert('I am Jinny you clicked ME and now I\'m free! I will buy Coffee for that');
//     });
// });

$(function(){
    $('#sar4').css('width','300px')
                .css('height','300px')
                .css('background-color','#2ed573');
    $('#sar4').on({
        mouseenter: function(){
            $('#in').replaceWith('You Entered to the Narnia!<br>');
        },
        mouseleave:function() {
            $('#out').replaceWith('You left the Narnia!<br>');
        },
        click: function() {
            $('#clk').replaceWith('You clicked! You will get a cup of Coffee')
        }
    })
});
//STEP 22
$(function(){
    $('a').click(function(event) {
        var element = $(this);
        if(element.attr('href').match('google') ){
            event.preventDefault();
        }
    });
    $('a').css('color','red').click(function (){
        window.alert('This is Prevent Defualt function');
    });
});
// STEP 23
$(document).ready(function(){
    $(window).resize(function (){
        $('#width span').text($(window).width() + 'px');
        $('#height span').text($(window).height() + 'px');
    });
});
// STEP 24
$(function(){
    $('#fox').focus(function (){
        $('#fox').css('background-color','grey');
    });
    $('#fox').focusout(function (){
        $("#fox").css('background-color','white');
    });
});

// STEP 25
$(function () {
    $('#email_1').focus();

    $('#email_form').submit(function (event) {
        var isValid = true;

        var email = $('#email_1').val().trim(); 
        if (email == '') {
            alert('You left the Email field Empty')
            $('email_1').css('border','2px solid #ff4757');
            isValid = false;
        } else {
            $('email_1').css('border','2px solid #2ed573')
        }

        // FIRST NAME

        var name = $('#first_name').val().trim(); 
        if (name == '') {
            alert('You left the Name field Empty')
            $('first_name').css('border','2px solid #ff4757');
            isValid = false;
        } else {
            $('first_name').css('border','2px solid #2ed573')
        }
    })
});