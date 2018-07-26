$(document).ready(function () {
    $("#form-search").submit(function (e) {
        e.preventDefault();
        const search = $("#input-search").val();
        const cards = $(".card");
        if (search===""){
            cards.fadeIn();
        } else{
            cards.each(function () {
                cards.fadeOut();
                cards.fadeIn();
        }

            const elemento = $(this);.toLowerCase();
            const textoElemento = elemento.texto()
            if (!elemento.text().includes(search)) {
                elemento.fadeOut();
            }
        }); 
        });

    })
})

window.onload

function carregarHeader() {
    $.ajax({
        url: "/header.html",
        method: "GET",
        success: function (results) {
            $("#header").html(results);
        }
    });
}

carregarHeader();
