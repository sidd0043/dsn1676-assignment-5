var $theCircle = $('.circle');
var $moveDownBtn = $('.move-down');
var $moveUpBtn = $('.move-up');
var $moveLeftBtn = $('.move-left');
var $moveRightBtn = $('.move-right');
var $form = $('form');
var $input = $('#the-color');



//$theCircle.remove();
//$theCircle.css('border', '3px solid black');

$moveDownBtn.on('click', function () {
    //$theCircle.addClass('highlight');
    var currentlocation = $theCircle.offset();
    console.log(currentlocation);
    
    $theCircle.css('top', currentlocation.top + 10);
});

$moveUpBtn.on('click', function () {
    //$theCircle.addClass('highlight');
    var currentlocation = $theCircle.offset();
    console.log(currentlocation);
    
    $theCircle.css('top', currentlocation.top - 10);
});

$moveLeftBtn.on('click', function () {
    //$theCircle.addClass('highlight');
    var currentlocation = $theCircle.offset();
    console.log(currentlocation);
    
    $theCircle.css('left', currentlocation.left + 10);
});

$moveRightBtn.on('click', function () {
    //$theCircle.addClass('highlight');
    var currentlocation = $theCircle.offset();
    console.log(currentlocation);
    
    $theCircle.css('left', currentlocation.left - 10);

});

$form.on('submit', function(eventObject) {
    eventObject.preventDefault();
     $theCircle.css('background', $input.val());
    
    var $theH2 = $('<h2>');
    $theH2.html($input.val());
    $theCircle.append($theH2);
    
    $input.val('');
    
});
     
     