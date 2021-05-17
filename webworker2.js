onmessage = function (e) {
    var data = JSON.parse(e.data);
    var suma_wszystkich_liter = 0;
    
    function getCount(str) {
      var sum = 0;
      var i = 0;
      for (i = 0; i < str.length; ++i) {
        sum += str.charCodeAt(i);
      }
      return sum;
    }
    
    
    Object.keys(data).forEach(function (key) { 
      suma_wszystkich_liter += getCount(data[key]);
    })
    var red = suma_wszystkich_liter % 255;
    var green = 255 - (suma_wszystkich_liter % 255);
    var blue = (0.5 * red > 125) ? 99 : 199; 
    const newRGB = {
      R: red, 
      G: green,
      B: blue,
    }


    self.postMessage(JSON.stringify(newRGB));
  };