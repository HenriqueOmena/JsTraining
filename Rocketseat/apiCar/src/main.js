function imgCreate(src, alt, title, width, height = 32) {
    const img = document.createElement('img');
    img.src = src;
    if ( alt != null ) img.alt = alt;
    if ( title != null ) img.title = title;
    if ( width != null ) img.width = width;
    if ( height != null ) img.height = height;
    return img;
}

function createCardBs(srcImg, title) {

    return `
    <div class="card" style="width: 18rem;">
    <img src="${srcImg}" class="card-img-top" height="150px" widht="600" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text"></p>
            <a href="#" class="btn btn-primary">Testando</a>
        </div>
    </div>
    `

}

const apiContries = 'https://restcountries.eu/rest/v2/all';
const html = document.getElementById('app');
const allCountries = fetch(apiContries)
.then( respo => respo.json()) //dont forgot .json() return a another promisse hahahahahahhaah
.then( json => {
    return json.map( data => {
        const { name, capital, alpha3Code, flag, population} = data
        //const img = imgCreate(flag)
        const cardHtml = createCardBs(flag, alpha3Code)
        const p = document.createElement('li')

        p.setAttribute('style', 'border: solid 1px red; float:left; list-style-type:none;')
        p.setAttribute('class', 'm-1')
        //p.appendChild(cardHtml);
        p.innerHTML = cardHtml;

        document.getElementById('list-flags').appendChild(p)
        //console.log(flag);
    })


    return console.log(json);
})
.catch( error => console.warn('error', error))





