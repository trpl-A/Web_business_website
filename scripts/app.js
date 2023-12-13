function getStatus(url) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState === 4){
            request.status;//this contains the status code
            // setHtml('disp', request.status);
        }
    };

    request.open("GET", url, true);
    request.send(); 
    console.log("Status code: ", request.status);

    if (request.status != 200){
        window.location.href = "404.html"
    }
} 


function runAll(){
    let currentUrl = window.location.href 
    console.log(currentUrl)
    
    getStatus(currentUrl);
}
