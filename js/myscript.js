//document.getElementById('name').innerHTML = mydata[0].nombre;;
function load() {
  var mydata = data;
  var precio1 = document.getElementById('precio');
  var nombre1 = document.getElementById('nombre');
  var nombre2 = document.getElementById('nombre4');
  var precio2 = document.getElementById('precio4');
  var nombre3 = document.getElementById('nombre11');
  var precio3 = document.getElementById('precio11');
  precio1.innerHTML = mydata[8].precio;
  nombre1.innerHTML = mydata[8].nombre;
  precio2.innerHTML = mydata[4].precio4;
  nombre2.innerHTML = mydata[4].nombre4;
  precio3.innerHTML = mydata[10].precio11;
  nombre3.innerHTML = mydata[10].nombre11;
  // for (var x in mydata) {
  //
  // }
}

// data.forEach( function(obj) {
//   var img = new Image();
//   img.src = "img/" + obj.foto;
//   img.setAttribute("class", "banner-img");
//   img.setAttribute("alt", "effy");
//   document.getElementById("img-container").appendChild(img);
//   //console.log(obj.nombre);
//   console.log(obj.foto);
// });

// var para = document.createElement("p");
// var node = document.createTextNode(mydata[0].nombre);
// para.appendChild(node);
//
// var element = document.getElementById("nombre");
// element.appendChild(para);
