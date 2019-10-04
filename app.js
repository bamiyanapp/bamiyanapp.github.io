function getPosition(){
  navigator.geolocation.getCurrentPosition(
    function(position){
      alert("緯度："+position.coords.latitude+"、経度"+position.coords.longitude);

      let nowLatitude = position.coords.latitude;
      let nowLongitude = position.coords.longitude;
    },
  );
}
