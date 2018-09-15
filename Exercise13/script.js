function user() {
  var username, password;

  function doLogin(usr, pwd) {
    username = usr;
    password = pwd;

    console.log("Username: " + username);
    console.log("Password: " + password);
  }

  publicAPI = {
    login: doLogin
  };

  return publicAPI;
}
var mark = user();
mark.login("markdino21", "6df4h68gsd54t5w1gh");
