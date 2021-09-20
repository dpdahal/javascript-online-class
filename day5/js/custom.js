function getNewsDocument() {
    let xmlHttpResponse = new XMLHttpRequest();
    xmlHttpResponse.onload = function () {
        // status:1-4,
        if (this.readyState == 4 && this.status == 200) {
            let getUserInfo = JSON.parse(this.response);
            outPut = "<div>"
            getUserInfo.forEach((news) => {
                outPut += `<h1>${news.title}</h1>`;
                outPut += `<p>${news.body}</p>`;

            });
            outPut += "</div>"
            document.getElementById('show_record').innerHTML = outPut;
        }

    }

    let getUrl = "https://jsonplaceholder.typicode.com/posts";
    xmlHttpResponse.open('GET', getUrl, true);
    xmlHttpResponse.send();


}

