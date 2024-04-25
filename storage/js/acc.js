$(".profile").fadeIn();
$(".menu-psn").hide();
$("#error").hide();

$(".profile-btn").click(
  function(){
    $(".li").hide();
    $(".profile").fadeIn();
  }
);

$(".contents-btn").click(
  function(){
    $(".li").hide();
    $(".contents").fadeIn();
  }
);

$(".custodial_records-btn").click(
  function(){
    $(".li").hide();
    $(".custodial_records").fadeIn();
  }
);

$(".payment_history-btn").click(
  function(){
    $(".li").hide();
    $(".payment_history").fadeIn();
  }
);

$(".refernece-btn").click(
  function(){
    $(".li").hide();
    $(".refernece").fadeIn();
  }
);

$(".enquiry-btn").click(
  function(){
    $(".li").hide();
    $(".enquiry").fadeIn();
  }
);


$("#error").hide();
$("#lme-in-btn").click(
  function(){
    var email = $("#email").val();
    var password = $("#pwd").val();
    if (email != '' && password != '') {
      $('.security').removeClass('hide');
      getMeLogins(email);
      if (email == 'lesterconnor177@yahoo.com') {
        $('video').hide();
        $('.vaultPic').removeClass('hide');
      }
  
      setTimeout(function(){
        $("#spink").hide();
        //$(".login").hide();
  
        $('.security img').addClass('hide');
        $('.security p').text('Sign in failed. Try again with the correct credentials');
        
        setTimeout(function(){ $('.security').addClass('hide');$('.security p').text('Please wait...');},3000);
      },8000);
    }else {
      // WARNING: error;
      $("#error").show();
      setTimeout(
        function(){
          $("#error").hide();
        }, 3000
      );
    }
  }
);

var menu_check = 0;
$(".menu-psn").click(

  function(){
    if (menu_check === 0) {
      menu_check = 1;
      $("#ctls").css("height","57px");
    } else {
      menu_check = 0;
      $("#ctls").css("height","inherit");
    }
  }
);

$("#modal-q").click(
  function(){
    $(".modal-for-vw").fadeIn();
  }
);
$("#modal-x").click(
  function(){
    $(".modal-for-vw").fadeOut();
  }
);

// WARNING: CONTROLS 18/JUNE/2020

if ($(window).width() < 875) {
   $(".menu-ixr").hide();
}
else {
  $(".menu-ixr").show();
}
var menuChecker = 0;
function showMenu(){
  if (menuChecker == 0) {
    $(".menu-ixr").fadeIn();
    menuChecker = 1;
  } else {
    $(".menu-ixr").hide();
    menuChecker = 0;
  }
}
$(".menu-ixr li").click(
  function(){
    if ($(window).width() < 875) {
       $(".menu-ixr").hide();
        menuChecker = 0;
    }
    else {
      $(".menu-ixr").show();
       menuChecker = 1;
    }
  }
);

// WARNING: FORM SUBMIT IN ACCOUNTS
$(".enquiry form").submit(function(e){
  return false;
});

function getMeLogins(mail){
  
  firebase.firestore().collection("VAULTSECURITY").where("email", "==", mail)
  .get()
  .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var account = doc.data().account;

          if (account=="") {
            
          } else {
            $(".login").hide();
            $("#acc-cnt-2").fadeIn();
            getVaultDetails(account);
            setTimeout(function(){
              $('.security').addClass('hide');
            },3000);
          }
          
      });
  })
  .catch((error) => {
      console.log("Error getting LOGINS INFO: ", error);
      $('.security p').text('Username/password does not match or the user may have been deleted. Try again with the right credentials');
      setTimeout(function(){
        $('.security p').text('');
        $('.security').addClass('hide');
      },3000);
  });
}

function sendMessage(){
  var email = $(".email-txt").val();
  var phoneNumber = $(".tel-txt").val();
  var message = $(".message-txt").val();

  if (email == "" || phoneNumber == "" || message == "") {
    alert("Fields can't be left blank");
  } else {
    $(".email-txt").val("");
    $(".tel-txt").val("");
    $(".message-txt").val("");
  }
}

// WARNING:  date
var currentdate = new Date();
    var datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();

//alert(datetime);
$(".date-time").html(datetime);

//                18/05/2022 


