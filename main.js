console.log("connected");

$(document).ready(() => { 
    // console.log( "Hey dev")
    
    const locationKey = "AIzaSyAnWv2oiIa4VbD5Bx-OyYYlEtm5trLhrcE";

    function ApiCaller(url){
        $.ajax({
        url: url, 
        method: "get"
        })
        .then((res) => { return res })
        .catch((err) => { console.log(err)});  
    }
    

    ApiCaller()
})
