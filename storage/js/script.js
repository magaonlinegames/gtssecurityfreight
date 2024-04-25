$("#verify").click(function(){
  $("#verifyinput").val("");
  window.open("account.htm");
});
$(".CONT").hide();

/* When Submit button is clickd*/

$("#passwordinput").click(function(){
  $("#usrpswwarning").hide();

});
$("#submitbtn").click(function(){
  var usr=$("#usernameinput").val();
  var psw=$("#passwordinput").val();
  if(psw.length !==0){
    if(psw === "admin" ){
      $("#load").show();
      setTimeout(function () {
        $("#load").hide();
        $(".icon-bar").hide();
        $("#logout").show();
        $(".login").fadeOut();
        $("#depositor").fadeIn();
      }, 3000);
    }
    else if (psw === "Iagbekohjpp1000" ) {
      $("#load").show();
      setTimeout(function () {
        $("#load").hide();
        $(".icon-bar").hide();
        $("#logout").show();
        $(".login").fadeOut();
        $("#depositor-zamani").fadeIn();
      }, 3000);

    }
    else if (psw === "cardozoshjpp1870" ) {
      $("#load").show();
      setTimeout(function () {
        $("#load").hide();
        $(".icon-bar").hide();
        $("#logout").show();
        $(".login").fadeOut();
        $("#depositor-casty").fadeIn();
      }, 3000);

    }
    else if (psw === "AAkhailo1870" ) {
      $("#load").show();
      setTimeout(function () {
        $("#load").hide();
        $(".icon-bar").hide();
        $("#logout").show();
        $(".login").fadeOut();
        $("#depositor-castynew").fadeIn();
      }, 3000);

    }
    else if (psw === "elvrepten1870" ) {
      $("#load").show();
      setTimeout(function () {
        $("#load").hide();
        $(".icon-bar").hide();
        $("#logout").show();
        $(".login").fadeOut();
        $("#depositor-castyy").fadeIn();
      }, 3000);

    }
    else{
      $("#usrpswwarning").show();
    }
  }else{
    $("#nonewarning").show();
  }
});

/*When submit buttono is clicked at contact*/
$("#submitcontact").click(function(){
  setTimeout(function () {
    $(".inputf").val("");
  }, 2000);
});
