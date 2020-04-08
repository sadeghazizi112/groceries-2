$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault()
    var grocerylist = $("#groceries").val();
    var newarray = grocerylist.split(", ");

    console.log(grocerylist)
    console.log(newarray)

    newarray.sort();
    newarray.forEach(function(listitem) {
      console.log(listitem.toUpperCase())
      $(".groceries").append("<li>" + listitem + "</li>");
    });
  });
});
