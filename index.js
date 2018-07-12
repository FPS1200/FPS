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
      const produto = produtos[1];
      const produto = produtos[2];

      document.querySelector("#titulo").innerText = produto.titulo;
      document.querySelector("#descricao").innerText = produto.descricao;
      document.querySelector("#preco").innerText = produto.preco$;
      document.querySelector("#imagem-ativa").src = produto.imagens[0];
      document.querySelector("#imagem1").src = produto.imagens[0];
      document.querySelector("#imagem2").src = produto.imagens[1];
      document.querySelector("#imagem3").src = produto.imagens[2];
      document.querySelector("#imagem4").src = produto.imagens[3];
    

  }
  carregarDados();


