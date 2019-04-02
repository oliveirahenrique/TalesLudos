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
    evt.currentTarget.parentNode.className += " active";
}

function openDesafio(evt) {
    var i, desafios;

    desafios = document.getElementsByClassName("desafio");
    for (i = 0; i < desafios.length; i++) {
        desafios[i].className = desafios[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
}

var sceneNumber = 0;

function addCena(evt) {
    sceneNumber++;
    var textBlock = '';
    textBlock += '<div class="accordion">';
    textBlock += '  <button class=\"col-8\" onclick="openScene(event, \'cena' + sceneNumber + '\')\">Cena ' + sceneNumber + '</button>\n';
    textBlock += '  <button class=\"close col-4\" onclick="deleteCena(event, \'cena' + sceneNumber + '\')">x</button>';
    textBlock += '</div>';
    textBlock += '<div id=\"cena' + sceneNumber + '\" class=\"panel\">\n';
    textBlock += '  <div id=\"desafioSelector' + sceneNumber + '\"></div>\n';
    textBlock += '  <div class=\"subaccordion\">';
    textBlock += '    <button onclick="addDesafio(event, \'desafioSelector' + sceneNumber + '\')">+ Adicionar Desafio</button>';
    textBlock += '  </div>';
    textBlock += '</div>';
    $('#cenaSelector').append(textBlock);
    
    addSceneCircleInJourney(sceneNumber);
}

function addDesafio(evt, selector) {
    var numeroDesafio = document.getElementById(selector).getElementsByClassName('subaccordion').length + 1;
    var textBlock = '';
    textBlock += '<div class=\"subaccordion\">';
    textBlock += '  <button class=\"col-8\" onclick=\"openDesafio(event)\">Desafio ' + numeroDesafio + '</button>';
    textBlock += '  <button class=\"close col-4\" onclick=\"deleteDesafio(event)\">x</button>';
    textBlock += '</div>';
    $('#' + selector).append(textBlock);
}

function deleteCena(evt, cena) {
    var element = evt.currentTarget.parentNode;
    var desafios = document.getElementById(cena);
    desafios.parentNode.removeChild(desafios);
    element.parentNode.removeChild(element);
    
    var numeroCena = cena.substring(4);

    console.log(numeroCena);
    
    removeSceneCircleFromJourney(numeroCena);
}

function deleteDesafio(evt) {
    var element = evt.currentTarget.parentNode;
    element.parentNode.removeChild(element);
}

$("#selecionar-imagem").change(function(){
	var file = this.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
       $('#Jornada').css('background-image', 'url("' + reader.result + '")');
       $('#Jornada').css('background-size', 'cover');
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
    }
});





