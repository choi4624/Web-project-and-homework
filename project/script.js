window.onload=function(){

    $(".btnEventHot").on("click", function() {
        alert("온도가 1도 올라가게 설정합니다. ");
        
      });
    
    $(".btnEventCold").on("click", function() {
        alert("온도가 1도 내려가게 설정합니다. ");
        
      });

      $.ajax({
        url: "//ziot.i4624.tk/sql/meka/table/final",
        method: "GET",
        dataType: "json",
        success: function(data) {
          $.each(data, function(index, item){
            $("#temperature").append(item.temperature + " ");
            $("#CO2").append(item.co2 + " ");
            $("#humidity").append(item.humi);
          })

        }
       })
}

