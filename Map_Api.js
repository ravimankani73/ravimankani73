var map = L.map('map').setView([0,0], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmF2aW1hbmthbmk3MyIsImEiOiJjbDBubmVkcWIxaGtnM29vdDkxZGxqeXJpIn0.6BIt8TAR8arAMOpv_7TYgw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmF2aW1hbmthbmk3MyIsImEiOiJjbDBubmVkcWIxaGtnM29vdDkxZGxqeXJpIn0.6BIt8TAR8arAMOpv_7TYgw'
}).addTo(map);
var myHeaders = new Headers();
    myHeaders.append("Host", "api.traveltimeapp.com");  
    myHeaders.append("Accept", "application/json");
    myHeaders.append("X-Application-Id", "8b6b1674");
    myHeaders.append("X-Api-Key", "4ddfa8851731938db294f9723e3dc344");
    myHeaders.append("Accept-Language", "en-US");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
function fun1()
{
    var s= document.getElementById("first").value
    let arr_name = [];
    arr_name = s.split(',');
    //Icon Function............................
    var greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      var goldIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
      var blueIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'img/marker-shadow.pnghttps://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    //Icon function End.............................
    let arry_icon = [];
    for(let i = 0;i < arr_name.length;i++){
        console.log(arr_name[i])
        fetch(`http://api.traveltimeapp.com/v4/geocoding/search?query=${arr_name[i]}`, requestOptions)
        .then(response => 
        {
            return response.json();
        }).then(data =>
            {
                console.log(data);
                if(i == 0){
                    var marker= L.marker([data.features[0].geometry.coordinates[1],data.features[0].geometry.coordinates[0]],{icon: blueIcon}).addTo(map);
                }
                else if(i == 1){
                    var marker= L.marker([data.features[0].geometry.coordinates[1],data.features[0].geometry.coordinates[0]],{icon: greenIcon}).addTo(map);
                }
                else if(i == 2){
                    var marker= L.marker([data.features[0].geometry.coordinates[1],data.features[0].geometry.coordinates[0]],{icon: redIcon}).addTo(map);
                }
                else{
                    var marker= L.marker([data.features[0].geometry.coordinates[1],data.features[0].geometry.coordinates[0]],{icon: goldIcon}).addTo(map);
                   
                }
                //var marker = L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);
            }).catch(error => alert("Wrong City Entered"));
    }
}
 