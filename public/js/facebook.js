function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  
  function statusChangeCallback(response) {
    console.log('Facebook login status changed.');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
          console.log('Successfully logged in with Facebook');
           FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    }



  }

     function changeUser(response) {
    //Add code to change name and image 
    //$(".facebookLogin").hide()
    //$().hide()
    //$("h1#name").text(response.name)
   // $("img#photo").attr("src",response.picture.data.url)
    
    //$("p.facebookLogin").show();
    //$("p.facebookLogin").hide();
    //$("#name").text(response.name);
    //$("#photo").attr("src", response.picture.data.url);

    

    var username = response.name
    $.post('saveUsername', {user: username}, postCallback)
    window.location = ("https://a7-doctorate-dre.herokuapp.com/home")
    return false
  }   

  function postCallback(res){
    return;
  }