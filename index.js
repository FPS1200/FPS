let produtos = {};

function carregardados() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          produtos = this.responseText;
      }
    };
    xhttp.open("GET", "/dados/produtos.json", true);
    xhttp.send();
  }assertinfoassert