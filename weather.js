const API_KEY = `3ea2a0736f833ea110ed53a047a50563` ;

// var button = document.getElementById("button");

// var inputValue = document.getElementById("inputValue")

var desc = document.querySelector('.desc');


button.addEventListener( "click" , function(){
    doSearch();
})


function doSearch(){

        fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&APPID=3ea2a0736f833ea110ed53a047a50563")
        .then(res => res.json())
        .then(data => {

            console.log(data);
            document.getElementById('loc-name').innerText = data.name ;
            document.getElementById('loc-temp').innerText = data.main.temp ;
           
            var descValue = data['weather'][0]['description'];

            desc.innerHTML = descValue;

    } )

    .catch(err => alert("Wrong City Name!"));
}