const container = document.querySelector("#container");
console.log(container)

// on récupère ce qui se trouve dans le localStorage
let favoriteQuotes = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];


for (quote of quotes) {
    // on crée une balise html div avec la méthode createElement()
    const citation = document.createElement("div");
    // on ajoute une classe à la balise div avec la méthode
    // add() de la propriété classList
    citation.classList.add("citation")
    
    const heartIcon = document.createElement("div");
    heartIcon.classList.add('heart');
    heartIcon.setAttribute('data-id', quote.id);
    heartIcon.innerHTML =`<i class='${favoriteQuotes.includes(quote.id) ? "fa-solid active" : "fa-regular"} fa-heart' title='Add favorite'></i>`;

    citation.appendChild(heartIcon);
    
    heartIcon.addEventListener('click', () => toggleFavorite(quote.id));

    const title = document.createElement("p");
    title.classList.add("title");
    title.innerHTML = `${quote.title}`;
    citation.appendChild(title);

    const content = document.createElement("p");
    content.classList.add("content");
    // on ajoute la propriété innerHTML pour récupérer ou définir le contenu de l'élément content créé
    //plus haut
    content.innerHTML = `« ${quote.content} »`;
    // on ajoute l'élément p au DOM, on le lie à l'élément citation
    citation.appendChild(content);

    const author = document.createElement("small");
    author.classList.add("author");
    author.innerHTML = `${quote.author}`;
    citation.appendChild(author);

    // on ajoute au container tout notre bloc citation
    container.appendChild(citation)
}

function toggleFavorite(quoteId) {
    const heartIcon = document.querySelector(`.heart[data-id='${quoteId}'] i`);

    if (favoriteQuotes.includes(quoteId)) {
        // enlever la citation des favoris
        favoriteQuotes = favoriteQuotes.filter(id => id !== quoteId);
        heartIcon.classList.remove('fa-solid', 'active');
        heartIcon.classList.add('fa-regular');
    } else {
        //ajouter la citation aux favoris
        favoriteQuotes.push(quoteId);
        heartIcon.classList.add('fa-solid', 'active');
        heartIcon.classList.remove('fa-regular');
    }

    // MàJ du localStorage avec les dernières citations favorites
    localStorage.setItem('favoriteQuotes', JSON.stringify(favoriteQuotes));
}










// for (quote of quotes) {
//     console.log(quote.author);
// } 
    
// for (quote of quotes) {
//     console.log(quote.content);
// }
        
// for (quote of quotes) {
//     console.log(`${quote.author} : "${quote.content}"` );
// } 