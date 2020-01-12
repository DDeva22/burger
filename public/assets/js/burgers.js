
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




