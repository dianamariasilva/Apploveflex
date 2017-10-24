/*
 * Archivo principal de funcionalidad de JS
 */
var div= document.createElement('DIV');
var btn = document.createElement('BUTTON');
var btnDer=document.createElement('BUTTON');
var body= document.getElementsByTagName('BODY')[0];
//var body= document.body;
btn.setAttribute('class','btnDiv');
btn.setAttribute('id','btn1');
var text= document.createTextNode('✘');


/*
for (var i=1; i<9; i++){
	document.getElementById('a'+i).onclick = function () {
		this.elemIndex = i;
		div.setAttribute('class','divNuevo');
	 	 //div.classList.add('divNuevo');
	 	 //btn.id = 'btn1';
	 	 // text.setAttribute('class','text');
	 	 var img1= document.createElement('img');
	 	 console.log(this.elemIndex);
	 	 img1.setAttribute('src','assets/images/img-'+this.elemIndex+'.jpg');
	 	 img1.setAttribute('class','imgDiv');
	 	 btn.appendChild(text);
	 	 div.appendChild(btn);
	 	 div.appendChild(btnDer);
	 	 div.appendChild(img1);
	 	 body.appendChild(div);
	}	
}
*/
var myMap = {}
for (var i=1; i<=9; i++) {
	myMap[i] = document.getElementById('a'+i);
	myMap[i].elemIndex = i;
	myMap[i].onclick = function () {
		div.setAttribute('class','divNuevo');
	 	 //div.classList.add('divNuevo');
	 	 //btn.id = 'btn1';
	 	 // text.setAttribute('class','text');
	 	 var img1= document.createElement('img');
	 	 img1.setAttribute('src','assets/images/img-'+this.elemIndex+'.jpg');
	 	 img1.setAttribute('class','imgDiv');
	 	 btn.appendChild(text);
	 	 div.appendChild(btn);
	 	 div.appendChild(btnDer);
	 	 div.appendChild(img1);
	 	 body.appendChild(div);
	}
}
console.log(myMap);

// document.getElementById('btnDer').onclick = function cambDer (a2) {
// document.getElementById('imagen').style.backgroundImage = 'img2.jpg';


function elimDiv(){
	body.removeChild(div);
}

btn.onclick=function(){
	elimDiv();
}