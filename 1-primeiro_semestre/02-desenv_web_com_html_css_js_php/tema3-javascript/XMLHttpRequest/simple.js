
    const request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:5500/XMLHttpRequest/simple.txt');
    request.onload = () => {
        console.log(request.responseText);
    }
    request.send();
