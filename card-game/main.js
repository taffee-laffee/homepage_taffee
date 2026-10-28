$(document).ready(function(){
    $(".button").click(function() {
        $(this).hide(); 
        $(this).siblings(".picture").addClass("show"); 
    });
});

$('reset').click(function() {
    location.reload();
});


