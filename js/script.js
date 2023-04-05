let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
let mostrarFilme = document.getElementById('mostrar-filme');
let theBack = document.getElementById('showFilme');
let navzeira = document.querySelector('#nav-favoritos');
let casa = document.querySelector("#voltar-home")
let btnFechar = document.getElementById("btnfecha");

btnFechar.onclick = () => {
    mostrarFilme.style.display = "none";
    btnFechar.style.display = "none";
    card.style.display="flex";
}


function desapareceDiv(){
    theBack.style.display = "none";
    mostrarFilme.style.display = "none";
}

btnBuscarFilme.onclick = () =>{
   if(inputBuscarFilme.value.length > 0){
       let filmes = new Array();
       fetch("https://www.omdbapi.com/?apikey=ba316868&s="+inputBuscarFilme.value, {mode:"cors"})
       .then((resp)=>resp.json())
       .then((resp)=>{
           resp.Search.forEach((item)=>{
               let filme=new Filme(
                   item.imdbID,
                   item.Title,
                   item.Year,
                   null,
                   null,
                   item.Poster,
                   null,
                   null,
                   null,
                   null,
                   null
               );
               filmes.push(filme);
           });
           listarFilmes(filmes)
       })
   }
   return false;
}


let listarFilmes = async (filmes)=>{
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";
    if (filmes.length > 0){
        filmes.forEach(async(filme)=>{
            listaFilmes.appendChild(filme.getCard());
            filme.getBtnDetalhes().onclick=()=>{
                detalhesFilme(filme.id);
                mostrarFilme.innerHTML = "";            
                btnFechar.style.display= "block";
                mostrarFilme.style.display = "block";
                theBack.style.display = "block";
            }
        });
    }
}


let detalhesFilme = async (id)=>{
    fetch("https://www.omdbapi.com/?apikey=ba316868&i="+id)
    .then((resp)=> resp.json())
    .then((resp)=> {
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.Runtime,
            resp.Poster,
            resp.Plot,
            resp.Director,
            resp.Actors.split(","),
            resp.Awards,
            resp.imdbRating
        )

        mostrarFilme.appendChild(filme.getDetalhesFilme());
        console.log(filme);

        document.querySelector('#botaoSave').onclick = () =>{
            salvarFilme(filme);
        }
        
    })

}
let salvarFilme = (filme) => {
    let filmesString = localStorage.getItem('favouritesMovies');
    let filmes = null;
    if(filmesString){
        filmes=JSON.parse(filmesString);
        filmes.push(filme);
    }
    else{
        filmes=[filme];
    }
    filmes = JSON.stringify(filmes);
    localStorage.setItem('favouritesMovies',filmes);
    

}
  
navzeira.onclick = () =>{

    listarFavoritos();
}

casa.onclick = () => {
    listarFilmes()
}


function listarFavoritos(){
    let favouritesMovies = localStorage.getItem('favouritesMovies');
    favouritesMovies=JSON.parse(favouritesMovies);
    let filmes = new Array();
    favouritesMovies.forEach((item) =>{
        let filme = new Filme(
            item.id,
            item.titulo,
            item.ano,
            item.genero,
            item.duracao,
            item.cartaz,
            item.direcao,
            item.elenco,
            item.classificacao,
            item.avaliacao
        );
        filmes.push(filme);
    });
    listarFilmes(filmes);
}