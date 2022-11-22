getText('http://localhost:5500/XMLHttpRequest/simple.txt');

async function getText(url) {
    let x = await fetch(url);
    let y = await x.text();
    console.log(y);
}