$(document).ready(function() {
  $("form#celeb-form").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var personality = $("input:radio[name=personality]:checked").val();
    var name = $("input#name").val();

    if (gender === "female" && age >= 30) {
      $("#mcjagger").show()
    }
    if (gender === "female" && age <= 30) {
      $("#marilyn-manson").show()
    }
    if (gender === "male" && age <= 100) {
      $("#beyonce").show()
    }
  
    event.preventDefault();
  });
});
