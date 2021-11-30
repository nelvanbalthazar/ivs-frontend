const signup = () => {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(name);


    var result = null

fetch("http://18.117.223.198:3000/v1/masteruser/signup", {
  method: "POST",
  body: JSON.stringify({
   "name" :name,
   "email" : email,
   "password" : password
  }),
  headers: {"content-type": "application/json"},

})
.then(function(res) {
  if (res.ok) { // ok if status is 2xx
    alert("SIGN UP SUCCESS");
  } else {
    console.log('Request failed.  Returned status of ' + res.status);
  }

  return res.blob()
})
.then(function(blob) {
  result = blob
  // window.result = blob
})

}