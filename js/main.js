const container = document.querySelector("#container");
console.log(container)

for (quote of quotes) {
    // on crée une balise html div avec la méthode createElement()
    const citation = document.createElement("div");
    // on ajoute une classe à la balise div avec la méthode
    // add() de la propriété classList
    citation.classList.add("citation")
    
    const icone = document.createElement("i");
    icone.classList.add("fa-regular");
    icone.classList.add("fa-star");
    icone.classList.add("icone");
    citation.appendChild(icone);

    const iconeClicked = document.createElement("i");
    iconeClicked.classList.add("fa-solid");
    iconeClicked.classList.add("fa-star");
    iconeClicked.classList.add("icone-clicked");
    citation.appendChild(iconeClicked);
    
    // icone.addEventListener("click", function() {
    //     icones.classList.toggle("icone-clicked");
    // })

    const content = document.createElement("p");
    // on ajoute la propriété innerHTML pour récupérer ou définir le contenu de l'élément content créé
    //plus haut
    content.innerHTML = `« ${quote.content} »`;
    // on ajoute l'élément p au DOM, on le lie à l'élément citation
    citation.appendChild(content);

    const author = document.createElement("small");
    author.classList.add("author");
    author.innerHTML = `${quote.author}`;
    citation.appendChild(author);

    const title = document.createElement("small");
    title.classList.add("title");
    title.innerHTML = ` - ${quote.title}`;
    citation.appendChild(title);
    
    // on ajoute au container tout notre bloc citation
    container.appendChild(citation)
}


localStorage.setItem("favoris1",`${quote.id}`);
console.log(localStorage.getItem("favoris1"));










// for (quote of quotes) {
//     console.log(quote.author);
// } 
    
// for (quote of quotes) {
//     console.log(quote.content);
// }
        
// for (quote of quotes) {
//     console.log(`${quote.author} : "${quote.content}"` );
// } 