let produtos = {};

function carregardados() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          produtos = JSON.parse(this.responseText);
          preencheHTML();
      }
    };
    xhttp.open("GET", "/dados/produtos.json", true);
    xhttp.send();
  }


  function preencheHTML(){
      document.querySelector("#titulo").innerText = produto.titulo;
      document.querySelector("#descricao").innerText = produto.descricao;
      document.querySelector("#imagem1").innerImagem1 = produto.imagem1;

  }
  carregarDados();


