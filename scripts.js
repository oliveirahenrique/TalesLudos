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

function addCena(evt) {
    var novaCena = document.getElementById('cenaSelector');
    var numeroCena = novaCena.getElementsByClassName('accordion').length + 1;
    $('#cenaSelector').append('<button class="accordion" onclick="openScene(event, \'cena' + numeroCena + '\')\">Cena ' + numeroCena + '</button>\n' 
            + '<div id=\"cena' + numeroCena + '\" class=\"panel\">\n' 
            + ' \t<div id=\"desafio' + numeroCena + '\"></div>\n' 
            + ' \t<button class=\"subaccordion\" onclick=\"addDesafio(event, \'desafio' + numeroCena + '\')\">+ Adicionar Desafio</button>\n' 
            + '</div>');
}

function addDesafio(evt, cena) {
    var para = document.createElement("button");
    var novaCena = document.getElementById(cena);
    var numeroDesafio = novaCena.getElementsByTagName('button').length + 1;
    var t = document.createTextNode("Desafio " + numeroDesafio);
    para.appendChild(t);
    para.classList.add("subaccordion");
    novaCena.appendChild(para);
}