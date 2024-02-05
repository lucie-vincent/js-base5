const container = document.querySelector("#container");
console.log(container)

// on récupère ce qui se trouve dans le localStorage
let favoriteQuotes = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];

// on parcourt le fichier quotes avec un forEach (fonctionne mieux que le le for of dans ce cas)
quotes.forEach(quote => {
    // on crée une balise html div avec la méthode createElement()
    let citation = document.createElement("div");
    // on ajoute à cette balise la classe citation
    citation.classList.add("citation");
    // on ajoute la propriété innerHTML pour récupérer ou définir le contenu de l'élément content créé
    // on y ajoute les classes et on les lie aux clés du fichier quotes
    citation.innerHTML =
    `<div class=''>
        <p class='title'>${quote.title}</p>
        <p class='id'>${quote.id}</p>
        <p class='content'>“${quote.content}”</p>
        <p class='author'>- ${quote.author}</p>
    </div>`;

    // on crée l'élément div dans lequel on ajoute la classe heart + attribut data-id
    const heartIcon = document.createElement("div");
    heartIcon.classList.add('heart');
    // on ajoute l'attribut data-* pour pouvoir manipuler cette valeur
    heartIcon.setAttribute('data-id', quote.id);
    heartIcon.innerHTML =`<i class='${favoriteQuotes.includes(quote.id) ? "fa-solid active" : "fa-regular"} fa-heart' title='Add favorite'></i>`;
    // on ajoute cet élément dans la div citation
    citation.appendChild(heartIcon);

    // on crée un écouteur d'événement auquel on rattache la fonction toggleFavorite
    heartIcon.addEventListener('click', () => toggleFavorite(quote.id));

    // on ajoute au container tout notre bloc citation
    container.appendChild(citation) 
});
    
// fonction qui va permettre d'alterner entre le coeur vide et le coeur plein pour marquer les favoris
// permet également d'ajouter/ retirer les id des citations dans le tableau de favoris
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


// // on crée une balise html div avec la méthode createElement()
// const citation = document.createElement("div");
// // on ajoute une classe à la balise div avec la méthode
// // add() de la propriété classList
// citation.classList.add("citation")

// const title = document.createElement("p");
// title.classList.add("title");
// title.innerHTML = `${quote.title}`;
// citation.appendChild(title);

// const content = document.createElement("p");
// content.classList.add("content");
// // on ajoute la propriété innerHTML pour récupérer ou définir le contenu de l'élément content créé
// //plus haut
// content.innerHTML = `« ${quote.content} »`;
// // on ajoute l'élément p content  au DOM, on le lie à l'élément citation
// citation.appendChild(content);

// const author = document.createElement("small");
// author.classList.add("author");
// author.innerHTML = `${quote.author}`;
// citation.appendChild(author);