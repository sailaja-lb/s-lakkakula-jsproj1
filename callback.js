import fetch from "node-fetch"



function runFetch(url, callback) {
    fetch(url)
        .then(callback)
}

function main() {

    const callback = (response) =>
    ', {
        response.json()
            .then((jsonData) => {
                console.log(jsonData)
            })
    });
runFetch('https://www.reddit.com/r/programminghumor/.json')
}

main();