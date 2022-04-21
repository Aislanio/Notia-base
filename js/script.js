let img = ["img/cap1.png","img/cap2.png"];
let title = ["como ficar rico com html","site de galeria"];
let paragrafo = ["sensacional","accesse"];

var numb = 0 ;

function start(){
    document.querySelector("#imgId").src = img[numb];
    document.querySelector(".title").innerHTML = title[numb];
    document.querySelector(".paragrafo").innerHTML = paragrafo[numb];
   proximo();

};
function mais(){
	++numb;
	  if(numb > img.length -1){
         numb = 0;
     };
	
	start();
};

function menos(){
	--numb;
     if(numb == -1){
     	numb = img.length-1;
     }
	console.log(numb)
	start();
};
function proximo(){
	setTimeout(function function_name() {
		++numb;
		if(numb > img.length-1){
         numb = 0;
         };
         
		start();
	},9000);
};

