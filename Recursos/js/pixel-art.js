var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var indicadorDeColor = document.getElementById("indicador-de-color");
var borrar = document.getElementById("borrar");
var guardar = document.getElementById("guardar")
var imgbatman = document.getElementById("batman");
var imgwonder = document.getElementById("wonder");
var imgflash = document.getElementById("flash");
var imginvisible = document.getElementById("invisible");

// Creá una función que recorra la lista de colores nombreColores, 
// y por cada color cree un elemento div y le asigne un background-color: color 
// y la clase color-paleta. El elemento que cree tu función deberá ser agregado como 
// hijo del elemento paleta.

function agregarDivColores (){
  for (let i = 0; i < nombreColores.length; i++) {
    var color = document.createElement("div");
  
    color.style.backgroundColor = nombreColores[i];
    paleta.appendChild(color);
  }
  paleta.addEventListener("click", function(event) {
    modificarColor(event.target.style.backgroundColor)
  })
}

/*La creación de la grilla tiene una estructura similar a la creación de la paleta de colores. 
Tendremos que pensar cada pixel como un <div> y agregarlo a la grilla-pixeles. 
Para que funcione con los recursos descargables, el tamaño de la grilla deberá ser de 1750 pixeles.
*/


//REVISAR ESTE BUG
// ver que onda cuando salir aprentando y soltas y entras !!!!

var banderaPintar = false;

function crearGrilla (){
  for (let i = 0; i < 1750; i++) {
    var espacioDibujo = document.createElement("div");
    espacioDibujo.classList.add ("divConClase");
    grillaPixeles.appendChild(espacioDibujo);  
  }
  grillaPixeles.addEventListener("mousedown", function (event){
    banderaPintar = true;
    event.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
  })
  grillaPixeles.addEventListener("mouseup", function (event){
    banderaPintar = false;
  })
  grillaPixeles.addEventListener("mouseover", function (event){
    if (banderaPintar) {
      event.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
    };
  })
}

// Function que le da el evento click a borrar
borrar.addEventListener("click", function(event){
  var divs = document.getElementsByClassName("divConClase");
  for (let i = 0; i < divs.length; i++) {
    const element = divs[i];
    element.style.backgroundColor = "white"
  }
})

//Guardar el dibujo

guardar.addEventListener("click", function(event){
  guardarPixelArt();
  }
)

/*
Creación de la funcion que captura el color seleccionado y lo pone en indicador-de-color
*/

function modificarColor(color) {
  if (color !== "") {
    indicadorDeColor.style.backgroundColor = color
  }
}

//cargar las imagenes en base a que superheroe quieren

imgbatman.addEventListener("click", function(event){
    cargarSuperheroe(batman);
  }
);
imgwonder.addEventListener("click", function(event){
  cargarSuperheroe(wonder);
}
);
imgflash.addEventListener("click", function(event){
  cargarSuperheroe(flash);
}
);
imginvisible.addEventListener("click", function(event){
  cargarSuperheroe(invisible);
}
);



function agregarDivColores (){
  for (let i = 0; i < nombreColores.length; i++) {
    var color = document.createElement("div");
  
    color.style.backgroundColor = nombreColores[i];
    paleta.appendChild(color);
  }
  paleta.addEventListener("click", function(event) {
    modificarColor(event.target.style.backgroundColor)
  })
}

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual


  })
);


crearGrilla();
agregarDivColores();
