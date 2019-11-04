let url = "http://jsonplaceholder.typicode.com/users";
let btn = document.getElementById("createUsers");

btn.addEventListener('click', e => {
    ajax({
        method: "get",
        url: url,
        loadAction: response => { console.log(response) }
    });
});

/*
@params config : {method, url, load, data}
*/
function ajax(config) {
    let xhr = new XMLHttpRequest;
    xhr.open(config.method, config.url);
    xhr.addEventListener('load', () => {
        config.loadAction(xhr.response)
    })
    xhr.send();

}