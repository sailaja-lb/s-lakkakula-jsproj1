//type into terminal
//npm install
//http-server
async function runFetch(url) {
    const response = await fetch(url)
    return await response.json()
}
async function getRedditPostList() {
    const result = await runFetch('https://www.reddit.com/r/programminghumor/.json');
    return result.data.children;
}
async function renderPostList() {
    const postListElement = document.getElementById("post-list");
    const postList = await getRedditPostList();
    console.log(postList)
    for(let post of postList) {
        //filter out the bad stuff
        if(post.data.over_18){
            continue;
        }
        //console.log(post.data)
        const title = post.data.title;
        const url = post.data.url;
        const postElement = document.createElement("li")
        postElement.innerHTML = `<a href="${url}">${title}</a>`
        postListElement.appendChild(postElement);
    }
}
renderPostList();