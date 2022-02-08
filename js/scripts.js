$(document).ready(function(){
    $("#groceries-form").click(function(){
        $("#form").show();
    });
    $("#hide").click(function(){
        $("#form").hide();
    })
    $("#form").submit(function(event){
        event.preventDefault();
        const firstItem = $("#item1").val();
        const secondItem = $("#item2").val();
        const thirdItem = $("#item3").val();
        const forthItem = $("#item4").val();

        const groceryItem = [];
        groceryItem.push(firstItem);
        groceryItem.push(secondItem);
        groceryItem.push(thirdItem);
        groceryItem.push(forthItem);

        groceryItem.sort();
        groceryItem.forEach(function(items){
            $("#list").append("<li class = 'it'>"+items.toUpperCase() + "</li>")
        })
        $('#form').hide();
    })
})