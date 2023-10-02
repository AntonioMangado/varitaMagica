//al hacer click en un elemento...

//reemplazar imagenes por gif
let images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", cambiarFuente);
    
    function cambiarFuente() {
        images[i].src = "./assets/magic-1.gif"
    }
}


//cambiar color y fondo a parrafos
let parrafos = document.querySelectorAll("p")

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener("click", cambiarColor)
    
    function cambiarColor() {
        parrafos[i].style.backgroundColor = "red";
        parrafos[i].style.color = "green";
    }
}


//cambiar color a article y section


let section = document.querySelectorAll("section")
let article = document.querySelectorAll("article")

for ( i = 0; i < article.length; i++) {
    article[i].addEventListener("click", cambiarColor2)

    function cambiarColor2() {
        article[i].style.backgroundColor = "yellow";
    }
}

for (let i = 0; i < section.length; i++) {
    section[i].addEventListener("click", cambiarColor2)

    function cambiarColor2() {
        section[i].style.backgroundColor = "yellow";
    }
}  


//al pasar el raton por un elemento...

//cambiar la imagen
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", function(){
        let defaultSrc = images[i].src;
        images[i].src = "./assets/abracadabra.gif"
        images[i].addEventListener("mouseout", function(){
            images[i].src = defaultSrc;
        })
    });
}


//cambiar color y fondo a parrafos
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener("mouseover", function (){
        let defautColor = parrafos[i].style.color;
        let defaultBckCol = parrafos[i].style.backgroundColor;

        parrafos[i].style.backgroundColor = "blue";
        parrafos[i].style.color = "yellow";
        parrafos[i].addEventListener("mouseout", function(){
            parrafos[i].style.backgroundColor = defaultBckCol;
            parrafos[i].style.color = defautColor;
        })
    })  
}

//cambiar color a articles y sections
for (let i = 0; i < article.length; i++) {
    article[i].addEventListener("mouseover", function (){
        
        let defaultArtCol = article[i].style.backgroundColor;

        article[i].style.backgroundColor = "purple";
        
        article[i].addEventListener("mouseout", function(){
            article[i].style.backgroundColor = defaultArtCol;
            
        })
    })  
}