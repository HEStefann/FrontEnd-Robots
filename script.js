const url = 'https://api.quotable.io/random?tags=technology';
const urlMembers = 'https://random-data-api.com/api/v2/users?size=3';
const quote = document.getElementById('quote');
const quoteAuth = document.getElementById('quoteAuth');
const containerMembers = document.getElementById('containerMembers')
const loadMoreMembers = document.getElementById('loadMoreMembers')
let counter = 0;
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        quote.innerHTML = data.content
        quoteAuth.innerHTML = data.author
    });
function memberCreator(data) {
    const div = document.createElement("div");
    div.setAttribute("class", "row mb-3")
    for (let i = 0; i < data.length; i++) {
        const secoundDiv = document.createElement("div");
        secoundDiv.setAttribute("class", "col-sm-12")
        secoundDiv.setAttribute("class", "col-lg-4")
        div.appendChild(secoundDiv)
        const img = document.createElement("img");
        img.src = data[i].avatar;
        img.setAttribute('class', 'rounded-circle shadow mb-4')
        secoundDiv.appendChild(img);
        const h5 = document.createElement("h5");
        h5.setAttribute("class", "teamMember")
        h5.innerHTML = data[i].first_name + ' ' + data[i].last_name
        secoundDiv.appendChild(h5)
        const p = document.createElement("p");
        p.innerHTML = `Email: ${data[i].email}`
        secoundDiv.appendChild(p)
        const p2 = document.createElement("p");
        p2.innerHTML = `Phone: ${data[i].phone_number}`
        secoundDiv.appendChild(p2)
    }
    containerMembers.appendChild(div)
}
printMembers()
function printMembers() {
    fetch(urlMembers)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            memberCreator(data);
        });
}

loadMoreMembers.addEventListener('click', function () {
    counter++
    printMembers()
    if (counter === 3){
        loadMoreMembers.classList.add("disabled")
    }
})