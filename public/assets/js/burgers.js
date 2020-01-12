
//Can't get this to work. Even tried rearranging to directly match the MvC example.
//Without this I can't add anything. Console.logs do not work.
$(document).ready(function() {
  $("#thing").click(function(event){
    event.preventDefault();
    console.log($("#eat").val());


    const newBurger = {
        burger_name: $("#eat").val(),
        devoured: 0
    }
    console.log(newBurger.burger_name);

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log(`BURGER ADDED`);
          // Reload the page to get the updated list
          location.reload();
        }
      );



});
});


$(document).ready(function(){
  $(".butoneat").click(function(event){
    console.log(`clicked!`);
    event.preventDefault();
    
    const id = $(this).attr("id");
    
    let newDevour = $(this).data("newdevour");
    if (newDevour === false){
      newDevour = true;
      
    }


    console.log(`${id} ${newDevour}`);
    const devourState = {
      devoured: newDevour
    };




    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devourState
    }).then(
      function() {
        console.log("CHANGED DEVOUR TO", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
    



  });


});




