var form;

form.onsubmit = function (e) {
  // stop the regular form submission
  e.preventDefault();

  // collect the form data while iterating over the inputs
 

var data = {
  "expr": "[{a.lon, a.lat} | a <~ postalcodes, a.countryCode==\"US\", postalCode=="+55116+"]",
  "limit":1
}
var jData = JSON.stringify(data);

  // construct an HTTP request
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://data.mingle.io/");
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  //xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
//var target = this;
  // send the collected data as JSON
 xhr.onload = function() {parseJSON(xhr)};
  xhr.send(jData);
  
function parseJSON(xhr) {  
  
if (xhr.status == 200) {  
    var jsonResponse = JSON.parse(xhr.responseText);
    console.log(jsonResponse);
}


  //xhr.onloadend = function () {
    // done
  }