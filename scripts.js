
function openTab(evt, tab) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

function openScene(evt, scene) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("panel");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("accordion");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(scene).style.display = "block";
    evt.currentTarget.className += " active";
}

function openDesafio(evt) {
    var i, desafios;

    desafios = document.getElementsByClassName("desafio");
    for (i = 0; i < desafios.length; i++) {
        desafios[i].className = desafios[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
}

var width = document.getElementById('Jornada').clientWidth;
var height = document.getElementById('Jornada').clientHeight;

var stageDraw = new Konva.Stage({
	container: 'Jornada',
 	width: width,
  	height: height
});

var layerDraw = new Konva.Layer();
var tooltipLayer = new Konva.Layer();

function addCena(evt) {
	
    var novaCena = document.getElementById('cenaSelector');
    var numeroCena = novaCena.getElementsByClassName('accordion').length + 1;
    $('#cenaSelector').append('<button class="accordion" onclick="openScene(event, \'cena' + numeroCena + '\')\">Cena ' + numeroCena + '</button>\n' 
            + '<div id=\"cena' + numeroCena + '\" class=\"panel\">\n' 
            + ' \t<div id=\"desafio' + numeroCena + '\"></div>\n' 
            + ' \t<button class=\"subaccordion\" onclick=\"addDesafio(event, \'desafio' + numeroCena + '\')\">+ Adicionar Desafio</button>\n' 
            + '</div>');
    

    var newCircle = new Konva.Circle({
        name: "Cena " + numeroCena,
        radius: 20,
        stroke: 'black',
        strokeWidth: 1,
        fill: '#f5f5dc',
        x: 50,
        y: 50
    });

    newCircle.on("mousemove", function()
    {
        var mousePos = stageDraw.getPointerPosition();
        tooltip.position({
            x : mousePos.x + 10,
            y : mousePos.y + 10
        });
        tooltip.text(newCircle.name());
        tooltip.show();
        tooltipLayer.batchDraw();
    });

    newCircle.on("mouseout", function(){
        tooltip.hide();
        tooltipLayer.draw();
    });

    newCircle.on("dragmove", function()
    {
        tooltip.hide();
        tooltipLayer.draw();
    });

    newCircle.draggable(true);
    layerDraw.add(newCircle);
    layerDraw.draw();
}

function addDesafio(evt, cena) {
    var para = document.createElement("button");
    var novaCena = document.getElementById(cena);
    var numeroDesafio = novaCena.getElementsByTagName('button').length + 1;
    var t = document.createTextNode("Desafio " + numeroDesafio);
    para.appendChild(t);
    para.classList.add("subaccordion");
    para.classList.add("desafio");
    para.setAttribute("onclick","openDesafio(event)");
    novaCena.appendChild(para);
}

var tooltip = new Konva.Text({
        text: "",
        fontFamily: "Calibri",
        fontSize: 20,
        padding: 5,
        textFill: "white",
        fill: "black",
        alpha: 0.75,
        visible: false
});


tooltipLayer.add(tooltip);
stageDraw.add(layerDraw);
stageDraw.add(tooltipLayer);
