const first = document.getElementById('first');
first.innerHTML = 'I am first';
first.style.backgroundColor = 'yellow';
console.log(first.attributes);

// const manMade = document.createElement('div');
// document.appendChild(manMade);

console.log(document.anchors);
console.log(document.applets);
console.log(document.baseURI);
console.log(document.body);
console.log(document.cookie);
console.log(document.doctype);
console.log(document.documentElement);
console.log(document.documentURI);
console.log(document.domain);
console.log(document.lastModified);
console.log(document.URL);

const article = document.querySelector('#electric-cars');
console.log(article.dataset.columns);
console.log(article.dataset.indexNumber);
article.dataset.parent = 'bike';
console.log(article.dataset.parent);
