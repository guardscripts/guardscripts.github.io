var list = document.querySelector('#list')
var a
var url
var name
fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)
    
    data.forEach(element => {
        a = document.createElement('a');
        url = element.url
        buttonName = element.name
        a.classList.add("game")
        if (element.hosted) { url = url.replace('%s',`//${window.location.hostname}`); } else { a.classList.add("warning") }
        if (typeof element.noloader != "undefined" && element.noloader) { a.href=url } else { a.setAttribute('onclick',`window.open('./loader.html?url=${url}&name=${buttonName}')`)}
        a.textContent = buttonName
        list.appendChild(a);
    });
});
