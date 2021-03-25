var onJOB = false;
var in_drop = false;

if(document.body.classList.contains("tag-the-croft")){
    window.onload = setCroft();
    onJOB = true;
} else {
    window.onload = setDefault();
    onJOB = false;
}
if(!onJOB) {
    var croft = document.getElementById("croft_head");
    var croft_drop_id = document.getElementById("croft_drop");
    var croft_drop = document.getElementsByClassName("croft_drop");

    croft.addEventListener("mouseover", function(evt) {
        // if(document.getElementById("croft_drop") === null)
        // console.log(evt);
        if(!evt.relatedTarget.classList.contains("croft_drop")) {
            var elements = document.getElementsByClassName("menu-wrapper");
            for (var i = 0; i < elements.length; i++) {
                // elements[i].style.backgroundColor = "#CF71EE";
                elements[i].animate([{backgroundColor:"#c2262f"},{backgroundColor:"#CF71EE"}],{duration:500});
                elements[i].style.backgroundColor = "#CF71EE";
            }
            croft_drop_id.animate([{backgroundColor:"#c2262f"},{backgroundColor:"#CF71EE"}],{duration:500});
            croft_drop_id.style.backgroundColor = "#CF71EE";
        }
    });
    croft.addEventListener("mouseout", function(evt) {
        if(!evt.relatedTarget.classList.contains("croft_drop")) {
            var elements = document.getElementsByClassName("menu-wrapper");
            for (var i = 0; i < elements.length; i++) {
                elements[i].animate([{backgroundColor:"#CF71EE"},{backgroundColor:"#c2262f"}],{duration:500});
                elements[i].style.backgroundColor = "#c2262f";
            }
        }
    });
}
for (var i = 0; i < croft_drop.length; i++) {
    croft_drop[i].addEventListener("mouseover", function() {
        in_drop = true;
    });
    croft_drop[i].addEventListener("mouseout", function(evt) {
        in_drop = false;

        console.log(evt);
        if(evt.relatedTarget.id !== "croft_head" && !evt.relatedTarget.classList.contains("croft_drop")) {
            var elements = document.getElementsByClassName("menu-wrapper");
            for (var i = 0; i < elements.length; i++) {
                elements[i].animate([{backgroundColor:"#CF71EE"},{backgroundColor:"#c2262f"}],{duration:500});
                elements[i].style.backgroundColor = "#c2262f";
            }
        }
    });
}

function setCroft() {
    document.getElementById("style").href = "/assets/css/style-croft.css?v=336cc0b901";
    document.getElementById("colour").href = "/assets/css/croft-color.css?v=336cc0b901";
}

function setDefault() {
    document.getElementById("style").href = "/assets/css/style.css?v=336cc0b901";
    document.getElementById("colour").href = "/assets/css/main-color.css?v=336cc0b901";
}

