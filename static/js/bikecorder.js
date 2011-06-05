function salvar(form){
    var date = form.date.value;
    var distance = form.distance.value;
    var time = form.time.value;
    var avg_speed = form.avg_speed.value;
    var max_speed = form.max_speed.value;
    var path = form.path.value;
    var observation = form.observation.value;
    
    alert("date: " + date + "\n" +
          "distance: " + distance + "\n" +
          "time: " + time + "\n" +
          "avg_speed: " + avg_speed + "\n" +
          "max_speed: " + max_speed + "\n" +
          "path: " + path + "\n" +
          "observation: " + observation
          );
}