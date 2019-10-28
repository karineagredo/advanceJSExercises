const links = document.querySelectorAll('a');
const main = document.getElementById("mainContent");

const loadContent = () => {
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault;
            e.stopPropagation;
            const id = link.id;
            const fileName = id + '.html';
            history.pushState(null, '', id)
            const xhr = ajax('get', fileName)
            xhr.addEventListener('load', (e) => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    main.innerHTML = xhr.response;
                }
            })
        })
    })
}
loadContent();

function ajax(method, url) {
    const xhr = new XMLHttpRequest;
    xhr.open(method, url);
    xhr.send();
    return xhr
}
window.addEventListener('popstate', (e) => {
    const pathToFile = location.pathname.split('/')[1] + '.html';
    const xhr = ajax('get', pathToFile)
    xhr.addEventListener('load', (e) => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            main.innerHTML = xhr.response;
        }
    })
})