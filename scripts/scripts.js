$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var first = $("#first-name").val();
    var last = $("#last-name").val();
    var contact = {};
    contact.firstName = first;
    contact.lastName = last;
    contact.addresses = [];
    $(".new-addresses").each(function() {
      var inputtedStreet = $(this).find(".street").val();
      var inputtedCity = $(this).find(".city").val();
      var inputtedState = $(this).find(".state").val();
      var address = {};
      address.street = inputtedStreet;
      address.city = inputtedCity;
      address.state = inputtedState;
      contact.addresses.push(address);
    });
    $("ul.contacts").append("<li>" +contact.firstName+" "+contact.lastName+"</li>");
    $("ul.contacts li").last().click(function() {
      $('ul.address-list').text('');
      contact.addresses.forEach(function(address){
          $("ul.address-list").append("<li>"+address.street+" "+ address.city+", "+address.state+"</li>")
      });
    });
    $("#first-name").val('');
    $("#last-name").val('');
    $(".street").val('');
    $(".city").val('');
    $(".state").val('');
    $('div.delet').remove();
  });
  $('button#add-address').click(function() {
    $('div.address-appends').append(
      '<div class="new-addresses delet">'+
        '<input class="street" type="text" placeholder="Enter street name">' +
        '<input class="city" type="text" placeholder="Enter city name">' +
        '<input class="state" type="text" placeholder="Enter state name">' +
      '</div>' );
  });
});
