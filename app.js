const express=require("express");
const bodyParser = require("body-parser");
const app=express();

//--------------body-parser
app.use(bodyParser.urlencoded({extended:true}));

var links=new Map();
var count=1;
var sameFlag=0;
app.get("/",(req,res)=>{
	//res.render("home.ejs");
	res.render("main.ejs",{sameFlag:sameFlag});
});

app.post("/addLink",(req,res)=>{
	var myLink=req.body.myLink;
	//var ans="link"+count;
	var ans=req.body.keyword;
	if(myLink.length===0 || ans.length===0 ){
		res.render("main.ejs",{sameFlag:sameFlag});
	}
	//count++;
	if(links.has(ans)){
		flag=1;
		res.render("main.ejs",{sameFlag:sameFlag});
		// alert("Fill every field!!");
	}
	links.set(ans,myLink);
	ans="https://tothemoon.run.goorm.io/"+ans;
	
	res.render("secondary.ejs",{ans:ans});
	
});

app.get("/:newLink",(req,res)=>{
	var subLink=req.params.newLink;
	var genLink=links.get(subLink);
	//res.send("you get: "+genLink);
	res.redirect(genLink);
});

//---------------------------------------------------------------------------------------------------------
 app.listen(3000,()=>{
	 console.log("server listening on port 3000");
 });
















