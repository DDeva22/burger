$("#input").on("submit", function(){
    event.preventDefault();


    const newBurger = {
        name: $("entry")
    }
    console.log(newBurger.name);

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