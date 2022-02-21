async function apiCall(url) {
    //add api call logic here
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


function appendArticles(articles, main) {
    //add append logic here
    articles.map((items) => {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = items.urlToImage;

        let title = document.createElement("h3");
        title.textContent = `Title: ${items.source.name}`;

        let content = document.createElement("p");
        content.textContent = `Content: ${items.content}`;

        div.onclick = () => {
            localStorage.setItem("article", JSON.stringify(items));
            window.location.href = 'news.html';
        }
        div.append(image, title, content);
        main.append(div);
    });
}

export { apiCall, appendArticles }
