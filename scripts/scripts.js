$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var first = $("#first-name").val();
    var last = $("#last-name").val();
    var contact = {};
    contact.firstName = first;
    contact.lastName = last;

    $("ul.contacts").append("<li>" +contact.firstName+" "+contact.lastName+"</li>")

  });
});
