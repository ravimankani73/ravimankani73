
function btn()
{
  var inp= document.getElementById('input').value
  var requestOptions = 
  {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(`http://www.omdbapi.com/?s=${inp}&apikey=6a162b8b`,requestOptions)
    .then(response=>
      {
        return response.json();
      }).then(data=>
        {
         //console.log(data);
         var str='';
          for(let i=0;i<data.Search.length;i++)
          {
            let id=data.Search[i].imdbID;
            //console.log(id);
           //console.log(data.Search[i]);

            str= str+`<tr><td onclick="details('${data.Search[i].imdbID}')">${data.Search[i].Title}<td> 
            <td>${data.Search[i].Year}</td>
             <td>${data.Search[i].imdbID}</td>
              <td>${data.Search[i].Type}</td>
               <td class="rotated"><img class="rotate-icon bnw" id="rotate-icon" 
               src ="${data.Search[i].Poster}"</td><tr/>`;
            
          }  
          var style= document.getElementById("tab")
          // var tdata = document.createElement('tr');
          style.innerHTML=str;
       })  
      
 }

 function details(id)
 {
  fetch(`http://www.omdbapi.com/?i=${id}&apikey=6a162b8b`)
  .then(response=>
    {
      return response.json();
    }).then(data=>
      {
     // console.log(data);
      //console.log(data);
       var str1='';
  
        str1= str1+`<tr>Poster<td><img src ="${data.Poster}"</td></tr>
        <tr>Title<td>Title:${data.Title}</td></tr> 
        <tr>Year<td>Year:${data.Year}</td></tr>
        <tr>IMDB ID<td>IMDB ID:${data.imdbID}</td></tr> 
        <tr>Type<td> Type:${data.Type}</td></tr>
         <tr>Actors<td>Actors:${data.Actors}</td></tr>
        <tr>Awards<td>Awards:${data.Awards}</td></tr>
        <tr>Director<td>Director:${data.Director}</td></tr>
        <tr>Country<td>Country:${data.Country}</td></tr>
        <tr>Language<td>Language:${data.Language}</td></tr>
        <tr>Plot<td>Plot:${data.Plot}</td></tr> `;
        
        var style= document.getElementById("tab1");
           style.innerHTML=str1;
            
      });     
 }
 


 







 
