
class Ator{
    constructor(id, nome){
        this.nome=nome;
        this.id=id;
    }
}

class Diretor{
    constructor(id, nome){
        this.nome=nome;
        this.id=id;
    }
}

class Filme{
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao){
        this.id=id;
        this.titulo=titulo;
        this.ano=ano;
        this.genero=genero;
        this.duracao=duracao;
        this.sinopse=sinopse;
        this.cartaz=cartaz;
        this.direcao=direcao;
        this.elenco=elenco;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;
        this.btnDetalhes=null;
    }
    getCard = () => {
        let card = document.createElement("div");
        card.setAttribute("class","card");
        let imgCartaz= document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src",this.cartaz);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body"); 
        let hCardTitle=document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title"); 
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style","display:flex; justify-content:space-aroud;");
        let divGenero= document.createElement("div");
        divGenero.setAttribute("style", "flex-grow:1;"); 
        let divAnoProducao= document.createElement("div");
        divAnoProducao.setAttribute("style","flex-grow:1;");
        let divClassificacao= document.createElement("div");
        divClassificacao.setAttribute("style","flex-grow:1;"); 
        hCardTitle.appendChild(document.createTextNode(this.titulo)); 
        divGenero.appendChild(document.createTextNode(this.genero)); 
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);

        this.setbtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());
        return card;
    }


    setbtnDetalhes= ()=>{
        this.btnDetalhes = document.createElement('button');
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id",this.id);
        this.btnDetalhes.setAttribute("class","btn btn-primary btnDetalhesFilme");
    }


    getBtnDetalhes=()=>{
        return this.btnDetalhes
    }


    getDetalhesFilme=()=>{
        let principalDiv = document.createElement('div');
        principalDiv.setAttribute('class','card mb-3');
        let divrow = document.createElement('div');
        divrow.setAttribute('class','row g-0');
        principalDiv.appendChild(divrow);
        let colA = document.createElement('div');
        colA.setAttribute('class','col-md-4');
        divrow.appendChild(colA);
        let photo = document.createElement('img');
        photo.style.float = 'left';
        photo.setAttribute('src',this.cartaz);
        photo.setAttribute('class','img-fluid rounded-start');
        photo.setAttribute('alt','...');
        colA.appendChild(photo);
        let botaoSave = document.createElement('button');
        botaoSave.appendChild(document.createTextNode('Salvar'));
        botaoSave.setAttribute('id', 'botaoSave');
        botaoSave.setAttribute('class','btn btn-info');
        let botaoDiv = document.createElement('div');
        botaoDiv.appendChild(botaoSave);
        colA.appendChild(botaoDiv);
        let botaoRemover = document.createElement('button');
        botaoRemover.appendChild(document.createTextNode('Remover'));
        botaoRemover.setAttribute('id', 'botaoRemover');
        botaoRemover.setAttribute('class','btn btn-info');
        let divRemover = document.createElement('div');
        divRemover.appendChild(botaoRemover);
        colA.appendChild(divRemover);
        let colB = document.createElement('div');
        colB.setAttribute('class','col-md-8');
        divrow.appendChild(colB);
        let corpoCard = document.createElement('div');
        corpoCard.setAttribute('class','card-body');
        colB.appendChild(corpoCard);
        let title = document.createElement('h5');
        title.setAttribute('class','card-title');
        title.appendChild(document.createTextNode(this.titulo));
        corpoCard.appendChild(title);
        let year = document.createElement('p');
        year.setAttribute('class','card-text');
        year.appendChild(document.createTextNode(this.ano));
        corpoCard.appendChild(year);
        let sinopseText = document.createElement('p');
        sinopseText.setAttribute('class','card-text');
        sinopseText.appendChild(document.createTextNode(this.sinopse));
        corpoCard.appendChild(sinopseText);
        let genre = document.createElement('p');
        genre.setAttribute('class','card-text');
        genre.appendChild(document.createTextNode(this.genero));
        corpoCard.appendChild(genre);        
        let duracao = document.createElement('p');
        duracao.setAttribute('class','card-text');
        duracao.appendChild(document.createTextNode(this.duracao));
        corpoCard.appendChild(duracao); 
        let directors = document.createElement('p');
        directors.setAttribute('class','card-text');
        directors.appendChild(document.createTextNode(this.direcao));
        corpoCard.appendChild(directors);
        let elencoFilme = document.createElement('p');
        elencoFilme.setAttribute('class','card-text');
        elencoFilme.appendChild(document.createTextNode(this.elenco));
        corpoCard.appendChild(elencoFilme);
        let classification = document.createElement('p');
        classification.setAttribute('class','card-text');
        classification.appendChild(document.createTextNode(this.classificacao));
        corpoCard.appendChild(classification);        
        let notaDoFilme = document.createElement('p');
        notaDoFilme.setAttribute('class','card-text');
        notaDoFilme.appendChild(document.createTextNode(this.avaliacao));
        corpoCard.appendChild(notaDoFilme); 



        return principalDiv;

    }
}

