$('html, body').animate({
  scrollTop: $("#logistics_solutions").offset().top 
});

//window.location.replace("/#logistics_solutions");  ///#logistics_solutions

//window.location.replace("https://gtssecurityfreight.com/#logistics_solutions");


function moveTO(x){
    if (x == 'services') {
        window.location.replace("https://gtssecurityfreight.com/#logistics_solutions");
    }
    if (x == 'logistics_solutions') {
        window.location.replace("https://gtssecurityfreight.com/#logistics_solutions");
    }
    if (x == 'contact') {
        window.location.replace("https://gtssecurityfreight.com/#contact");
    }
}