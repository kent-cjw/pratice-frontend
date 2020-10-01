function insert(value){
    $(".display-result").val($(".display-result").val() + value);
}

function equal(){
    $(".display-result").val(eval($(".display-result").val()));
}

function delValue(){
    $(".display-result").val($(".display-result").val().substring(0,$(".display-result").val().length-1));
}

function cleanVal(){
    $(".display-result").val("");
}