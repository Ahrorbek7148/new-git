$(document).ready(function(){



    $("#getData").click(function(){

        var todos = [];

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos",
            type: "GET",
            success:function (data){
                todos = data;
            },
            error: function (err){
                console.log(err);
            },
            beforeSend: function () {
                $("#getData").attr("disabled", "disabled");
                $("#getData .spinner-border").toggleClass("d-none");
            },
            complete: function () {
                $("#getData").removeAttr("disabled");
                $("#getData .spinner-border").toggleClass("d-none");
            },
            async: false,
        })
        var i = 0;
        for(var t of todos){
            if(t.completed == true){
                var todo = "<div class = 'card mt-3'>" + "<div class = 'card-body d-flex'>" + "<input class = 'mt-2 xxx' type = 'checkbox' checked>" + "<p class = ' mx-2 my-0 font-weight-bold'>" + t.title + "</p>" + "</div>" + "</div>";
                $("#todo-data").append(todo);
            } else {
                var todo2 = "<div class = 'card mt-3'>" + "<div class = 'card-body d-flex'>" + "<input class = 'mt-2 xxx' type = 'checkbox'>" + "<p class = ' mx-2 my-0 font-weight-bold'>" + t.title + "</p>" + "</div>" + "</div>";
                $("#todo-data").append(todo2);
            }
            i++;
        }
        $("#jami").append("Jami: " + i + " ta");
    })


})