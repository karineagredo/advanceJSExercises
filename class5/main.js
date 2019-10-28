
const xhr = new XMLHttpRequest();
xhr.open("GET", "1mbImage.jpg");
xhr.responseType = 'blob';
let progressBar = document.getElementById('progressBar')
xhr.addEventListener('progress', e => {
    const prog = e.loaded * 100 / e.total;
    progressBar.value = prog;
})

xhr.addEventListener('load', e => {
    if (xhr.status == 200) {
        let img = xhr.response;
        let url = URL.createObjectURL(img);
        console.log(url);
        const picture = document.createElement('img');
        picture.src = url;
        document.body.appendChild(picture);
    }
});
xhr.send();


// function ajax(method, url) {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.send();
//     return xhr
// }