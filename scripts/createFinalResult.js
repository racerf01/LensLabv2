
function takeShot() {
  var element = document.getElementById('viewfinder'); 
  document.getElementById('viewfinder-marker').style.display = 'none'
  domtoimage.toPng(element)
    .then(function(dataUrl) {
      var shootResult = document.getElementById('shoot-result');
      shootResult.style.backgroundImage = 'url(' + dataUrl + ')';
      shootResult.style.backgroundSize = 'cover';
      document.getElementById('viewfinder-marker').style.display = 'initial'
    })
    .catch(function(error) {
      console.error('Error capturing DOM to image:', error);
      document.getElementById('viewfinder-marker').style.display = 'initial'
    });
}


  
  function applyNoiseEffect(context, width, height) {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 50; // Adjust the noise intensity as needed
      
      data[i] += noise; // Red channel
      data[i + 1] += noise; // Green channel
      data[i + 2] += noise; // Blue channel
    }
    
    context.putImageData(imageData, 0, 0);
  }
  
  function applyMotionBlurFilter(context, width, height) {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
    const blurRadius = 5; // Adjust the blur radius as needed
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pixelIndex = (y * width + x) * 4;
        let totalR = 0;
        let totalG = 0;
        let totalB = 0;
        let count = 0;
        
        for (let i = -blurRadius; i <= blurRadius; i++) {
          const offsetX = x + i;
          
          if (offsetX >= 0 && offsetX < width) {
            const blurPixelIndex = (y * width + offsetX) * 4;
            totalR += data[blurPixelIndex];
            totalG += data[blurPixelIndex + 1];
            totalB += data[blurPixelIndex + 2];
            count++;
          }
        }
        
        data[pixelIndex] = totalR / count; // Red channel
        data[pixelIndex + 1] = totalG / count; // Green channel
        data[pixelIndex + 2] = totalB / count; // Blue channel
      }
    }
    
    context.putImageData(imageData, 0, 0);
  }
  

