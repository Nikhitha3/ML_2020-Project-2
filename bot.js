messages = document.getElementById('messages');
input = document.getElementById('input');
botblock = document.getElementById('botblock');
userblock = document.getElementById('userblock');

msgno = 0; //ID

var flag=false;
var loadFile = function(event) {
   var image = document.getElementById('myphoto');
   image.src = URL.createObjectURL(event.target.files[0]);
};
var mobiles ={
  "iphone12":{
    "price":"₹80,000",
    "priceimg":"https://m-cdn.phonearena.com/images/article/122732-two_1200/Big-iPhone-12-Pro-leak-details-64MP-cameras-bigger-battery-notch-plans-5G-and-more.jpg",
    "storage":" Storage - 64GB , RAM - 4GB ",
    "battery":"2815 mAh",
    "camera":" Front Camera - 12MP , Rear Camera - 12 MP + 12 MP",
    "cameraimg":"https://m-cdn.phonearena.com/images/article/126865-two_1200/Here-is-how-iPhone-12-camera-will-allegedly-outdo-iPhone-11-without-upping-megapixels.jpg"
  },
  "oneplus8pro":{
    "price":"₹60,000",
    "priceimg":"https://images-na.ssl-images-amazon.com/images/I/61n6Ovq6EdL._SL1500_.jpg",
    "storage":" Storage - 128GB , RAM - 8GB ",
    "battery":"4510 mAh",
    "camera":" Front Camera - 16MP , Rear Camera - 48 MP + 8 MP + 48 MP + 5 MP",
    "cameraimg":"https://4.img-dpreview.com/files/p/E~C80x0S640x480T1200x900~articles/5444207277/EVkuAImWkAAHntA.jpeg"
 },
 "realmex3":{
    "price":"₹35,000",
    "priceimg":"https://www.xda-developers.com/files/2020/07/X3Feature2.jpg",
    "storage":" Storage - 256GB , RAM - 12GB ",
    "battery":"4200 mAh",
    "camera":" Front Camera - 32MP + 8 MP , Rear Camera - 64 MP + 8 MP + 8 MP + 2 MP",
    "cameraimg":"https://fdn.gsmarena.com/imgroot/news/20/06/realme-x3-super-zoom-buds-q-india-lauch/-727/gsmarena_001.jpg"
 }
}
function taketheinput(event) {
   if(event.key === "Enter"){
      messages.innerHTML += userblock.outerHTML;
      msgno += 1;
      messages.lastChild.id = msgno;
      messages.lastChild.childNodes[3].textContent = input.value;
      processinput(input.value.toLowerCase());
      input.value = "";

   }
}

function processinput(inputval){

   if(inputval!=""){
      messages.innerHTML += botblock.outerHTML
      msgno += 1
      messages.lastChild.id = msgno
      messages.lastChild.childNodes[3].textContent = reply(inputval)
   }

}
function reply(inputval) {

   result = inputval.match(/(how)|(\w+)/g)
   var poss = "how water days to grow soil mango greengram hibiscus tomato cotton  thank you thanks";
   if(poss.includes(inputval)==false && flag==false){
      flag=true;
      return "Hi "+inputval.toUpperCase()+", Enter the mobile name you want?"
   }
   if(result.includes("price")){
      var img = document.createElement('img');
      img.src=recentproduct.priceimg; 
      document.getElementById(msgno).appendChild(img);
      return recentproduct.price
   }
   if(result.includes("storage")){
      document.getElementById(msgno);
      return recentproduct.storage
   }
   if(result.includes("battery")){ 
      document.getElementById(msgno);
      return recentproduct.battery
   }
   if(result.includes("camera")){
      var img = document.createElement('img');
      img.src=recentproduct.cameraimg; 
      document.getElementById(msgno).appendChild(img);
      return recentproduct.camera
   }
   if(result.includes("thanks")){
         return "Always Welcome..."
   }
   a="";
   result.forEach(function(product){
      if(mobiles.hasOwnProperty(product)){
      a = "Enter the Specifications you want to know. For Ex: 1) price, 2) storage, 3) battery, 4) camera etc.,"
      recentproduct = mobiles[product];
      }
   })
   if(a){
      return a;
   }
   return "Sorry " + inputval + " is not available!";
}
