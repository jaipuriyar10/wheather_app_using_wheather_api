const express = require("express");
const app = express();
const https=require("https");
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.listen(3000,function(req,req){
  console.log("Server has Started!!!!!!!!!!!!");
});

app.get("/",function(req,res){

  res.sendFile(__dirname+"/index.html");



});


app.post("/",function(req,res){


  var city=req.body.cityname;

  console.log(req.body.cityname);
  res.send("Thanks for sending the info!!");
    https.get(url,function(ress){
    ress.on("data",function(data){
      const apikey="6ee3a079d6387445bfdf839e13eaeaa5";


      const url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=6ee3a079d6387445bfdf839e13eaeaa5";

      var whetherinfo=JSON.parse(data);
      //console.log(whetherinfo);
      var wet1=whetherinfo.weather[0].main;
      var temp=whetherinfo.main.temp;
      var wet=whetherinfo.wind.speed;
      var place = whetherinfo.name;
      var icon = whetherinfo.weather[0].icon;
      var imgurl="http://openweathermap.org/img/wn/"+icon+"@2x.png";
      res.write("The weather in "+place+ " is: "+wet1);
      res.write("The temperature in Hyderabad is: "+temp);
      res.write("The wind speed in Hyderabad is: "+wet);
      res.send();
      console.log(wet);

    });
  });


});
