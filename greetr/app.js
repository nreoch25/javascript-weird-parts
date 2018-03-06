
var g = G$("John", "Doe");
g.greet().setLang("es").greet(true);

jQuery("#login").click(function() {
  var loginGrtr = G$("John", "Doe");
  jQuery("#logindiv").hide();
  loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
})
