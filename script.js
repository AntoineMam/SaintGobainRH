$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#myTab a[href="#menu01"]').tab('show') // Sélection de l'onglet par le nom
$('#myTab a:first').tab('show') // Sélectionne le premier onglet
$('#myTab a:last').tab('show') // Sélectionne le dernier onglet
$('#myTab li:eq(2) a').tab('show') // Sélectionne le 3ème (indexé à partir de 0)

$(function(){
  setInterval(function(){
    $(".slideshow ul").animate({marginLeft:-350},800,function(){
      $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
    })
  }, 3500);
});
