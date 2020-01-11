

$(".create-form").on("submit", function(){
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

