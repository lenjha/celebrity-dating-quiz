$(document).ready(function() {
  $("form#celeb-form").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("option#gender").val();
    var personality =  $("input:radio[name=personality]:checked").val();
    var name =  $("input#name").val();

    if (gender === "#female" && age <= 30 && personality === "#goofy" || personality === "#laidback") {
      $("#mcjagger").show()
    }

    event.preventDefault();
  });
});
