const livros = [
    {
    titulo: "O Sol é Para Todos",
    autor: "Harper Lee",
    categoria: "Drama / Direitos Civis",
    imagem: "Imagens/91WKPd60P4L._UF1000,1000_QL80_.jpg",
    link: "livro1.html"
    },
    {
    titulo: "Capitães da Areia",
    autor: "Jorge Amado",
    categoria: "Literatura Brasileira",
    imagem: "Imagens/81t7altQZxL.jpg",
    link: "livro2.html"
    },
    {
    titulo: "Sobrevivendo no Inferno",
    autor: "Racionais MC's",
    categoria: "Poesia / Cultura Urbana",
    imagem: "Imagens/71peoM4V0lL._SY466_.jpg",
    link: "livro3.html"
    },
    {
    titulo: "1984",
    autor: "George Orwell",
    categoria: "Ficção / Distopia",
    imagem: "Imagens/819js3EQwbL._UF1000,1000_QL80_DpWeblab_.jpg",
    link: "livro4.html"
    },
    {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    categoria: "Romance Clássico",
    imagem: "Imagens/61Z2bMhGicL.jpg",
    link: "livro5.html"
    },
  {
    titulo: "O Código Da Vinci",
    autor: "Dan Brown",
    categoria: "Suspense / Mistério",
    imagem: "Imagens/91QSDmqQdaL._SY425_.jpg",
    link: "livro6.html"
  }
];

function exibirLivros(lista) {
  const container = document.getElementById("livrosContainer");
  container.innerHTML = "";
  lista.forEach(livro => {
    container.innerHTML += `
      <div class="card">
        <img src="${livro.imagem}" alt="Capa de ${livro.titulo}">
        <h3>${livro.titulo}</h3>
        <p><strong>Autor:</strong> ${livro.autor}</p>
        <p><strong>Categoria:</strong> ${livro.categoria}</p>
        <a href="${livro.link}">Saiba mais</a>
      </div>
    `;
  });
}

function buscarLivro() {
  const termo = document.getElementById("searchInput").value.trim().toLowerCase();
  const resultado = livros.filter(livro =>
    livro.titulo.toLowerCase().includes(termo)
  );

  const mensagem = document.getElementById("mensagem");
  if (resultado.length > 0) {
    mensagem.textContent = "";
    exibirLivros(resultado);
  } else {
    document.getElementById("livrosContainer").innerHTML = "";
    mensagem.textContent = "Livro não encontrado no acervo.";
  }
}

window.onload = () => exibirLivros(livros);

document.getElementById("form-contato").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const motivo = document.getElementById("motivo").value;

  if (!nome || !email || !mensagem || !motivo) {
    alert("Preencha todos os campos!");
    return;
  }

  if (!email.match(/^[\w.-]+@[\w.-]+\.\w+$/)) {
    alert("E-mail inválido!");
    return;
  }

  alert("Mensagem enviada com sucesso!");
});