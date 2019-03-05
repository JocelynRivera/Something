$("button").click(function(){
    var age = $(".age").val();
    $(".sentence").text("You are " + age + " years old!");
});


$("button").click(function(){
    var hair = $("#hair").val();
    $("#sentence").text(hair);
});

$("button").click(function(){
    var products = $("#products").val();
    $("#sentence").text(products);
});

$("button").click(function(){
    var age = $(".age").val();
    var products = $("#products").val();
    var hair = $("#hair").val();
    $("#sentence").text("Hey, congrates you guessed age, hair, and products right👏;" + age + products + hair);
});








