let latitude = null;
let longitude = null;

function getLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(showPosition,showError);

}

else{

document.getElementById("locationText").innerText="Geolocation not supported";

}

}

function showPosition(position){

latitude=position.coords.latitude;
longitude=position.coords.longitude;

document.getElementById("locationText").innerHTML=
"Latitude: "+latitude+"<br>Longitude: "+longitude;

}

function showError(){

document.getElementById("locationText").innerText="Location access denied";

}

function openNearbyMap(){

if(latitude===null || longitude===null){

alert("Click Get My Location first");
return;

}

const url="https://www.google.com/maps/search/mechanic/@"+latitude+","+longitude+",15z";

window.open(url,"_blank");

}

function searchMechanics(){

const place=document.getElementById("placeSearch").value;

if(place===""){

alert("Please enter a location");
return;

}

const url="https://www.google.com/maps/search/mechanic+near+"+place;

window.open(url,"_blank");

}

function askAI(){

const input=document.getElementById("userInput").value.toLowerCase();

const chatBox=document.getElementById("chatBox");

let response="";

if(input.includes("engine")){

response="Check fuel, battery and ignition system.";

}

else if(input.includes("battery")){

response="Battery issue detected. Try jump starting.";

}

else if(input.includes("tyre")){

response="Tyre issue detected. Replace spare tyre.";

}

else if(input.includes("fuel")){

response="Fuel might be empty.";

}

else{

response="Contact nearby mechanic.";

}

chatBox.innerHTML+="<p>You: "+input+"</p>";
chatBox.innerHTML+="<p>AI: "+response+"</p>";

document.getElementById("userInput").value="";

}