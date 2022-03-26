console.log('Hello');


var btn = document.getElementById('btn');
var show = document.getElementById('moviesPrint');
btn.addEventListener('click', function(){
    var txt = document.querySelector('#Inp1').value;
    url = 'http://www.omdbapi.com/?s='+ txt +'&apikey=5d60469c';
    fetch(url).then(res => res.json()).then((data)=>{    
        console.log(data)  
        var list="";     
        for(let d of data.Search){
             list += ` 
            <div class="movie"  style="background-color:black;color:white;margin:auto;width:230px;opacity:0.8;" onmouseover="hoverActive(this)" onmouseout="hoverInactive(this)">
                <img style="float:left" class = "rounded" width="200" height= "200" src="${d.Poster}"/  >
                <h6> ${d.Title} </h6>
                <p>  
                Type -> ${d.Type} <br>
                Year -> ${d.Year} <br>
                Imdb Id -> ${d.imdbID}
                
                </p>    
            </div>
            `;
            show.innerHTML = list;
        }
    })
    
})

function hoverActive(event) {
    event.style.transform = 'rotate(' + 360 + 'deg)';
}

function hoverInactive(event) {
    event.style.transform = 'rotate(' + 0 + 'deg)';
}