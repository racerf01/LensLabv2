const exposure_image = document.querySelector("#exposure-meter");

function calculateExposureLevel(iso, apt, ssp) {
  const ev = Math.log2((100 * (apt ** 2)) / (iso * ssp))

  if (Math.ceil(ev) > evLevel+6) {
    exposure_image.style.backgroundImage = "url('/img/exposure-6n.png')";
    if (evLevel == 16) {
      exposureLevel = 30; 
      darkenFilter(evLevel)
    } else if (evLevel == 15) {
      exposureLevel = 20; 
      darkenFilter(evLevel)
    } else if (evLevel == 14) {
      exposureLevel = 10; 
      darkenFilter(evLevel)
    } else if (evLevel == 13) {
      exposureLevel = 0; 
      darkenFilter(evLevel)
    } else if (evLevel == 12) {
      exposureLevel = 0; 
      darkenFilter(evLevel)
    } else if (evLevel == 11) {
      exposureLevel = 0; 
      darkenFilter(evLevel)
    }
  } else if (Math.ceil(ev) === evLevel+6) {
    exposure_image.style.backgroundImage = "url('/img/exposure-6n.png')";
    console.log('ev', ev)
    console.log('evLevel', evLevel)
    if (evLevel == 16) {
      exposureLevel = 40; 
      darkenFilter(evLevel)
    } else if (evLevel == 15) {
      exposureLevel = 30; 
      darkenFilter(evLevel)
    } else if (evLevel == 14) {
      exposureLevel = 20; 
      darkenFilter(evLevel)
    } else if (evLevel == 13) {
      exposureLevel = 10; 
      darkenFilter(evLevel)
    } else if (evLevel == 12) {
      exposureLevel = 0; 
      darkenFilter(evLevel)
    } else if (evLevel == 11) {
      exposureLevel = 0; 
      darkenFilter(evLevel)
    }
  } else if (Math.ceil(ev) === evLevel+5) {
    exposure_image.style.backgroundImage = "url('/img/exposure-5n.png')";
    console.log('ev', ev)
    console.log('evLevel', evLevel)
    if (evLevel == 16) {
      exposureLevel = 50; 
      darkenFilter(evLevel)
    } else if (evLevel == 15) {
      exposureLevel = 40; 
      darkenFilter(evLevel)
    } else if (evLevel == 14) {
      exposureLevel = 30; 
      darkenFilter(evLevel)
    } else if (evLevel == 13) {
      exposureLevel = 20; 
      darkenFilter(evLevel)
    } else if (evLevel == 12) {
      exposureLevel = 10; 
      darkenFilter(evLevel)
    } else if (evLevel == 11) {
      exposureLevel = 0; 
      darkenFilter(evLevel)
    }
  } else if (Math.ceil(ev) === evLevel+4) {
    exposure_image.style.backgroundImage = "url('/img/exposure-4n.png')";
    console.log('ev', ev)
    console.log('evLevel', evLevel)
    if (evLevel == 16) {
      exposureLevel = 60; 
      darkenFilter(evLevel)
    } else if (evLevel == 15) {
      exposureLevel = 50; 
      darkenFilter(evLevel)
    } else if (evLevel == 14) {
      exposureLevel = 40; 
      darkenFilter(evLevel)
    } else if (evLevel == 13) {
      exposureLevel = 30; 
      darkenFilter(evLevel)
    } else if (evLevel == 12) {
      exposureLevel = 20; 
      darkenFilter(evLevel)
    } else if (evLevel == 11) {
      exposureLevel = 10; 
      darkenFilter(evLevel)
    }
  } else if (Math.ceil(ev) === evLevel+3) {
    exposure_image.style.backgroundImage = "url('/img/exposure-3n.png')";
    console.log('ev', ev)
    console.log('evLevel', evLevel)
    if (evLevel == 16) {
      exposureLevel = 70; 
      darkenFilter(evLevel)
    } else if (evLevel == 15) {
      exposureLevel = 60; 
      darkenFilter(evLevel)
    } else if (evLevel == 14) {
      exposureLevel = 50; 
      darkenFilter(evLevel)
    } else if (evLevel == 13) {
      exposureLevel = 40; 
      darkenFilter(evLevel)
    } else if (evLevel == 12) {
      exposureLevel = 30; 
      darkenFilter(evLevel)
    } else if (evLevel == 11) {
      exposureLevel = 20; 
      darkenFilter(evLevel)
    }
  } else if (Math.ceil(ev) === evLevel+2) {
    exposure_image.style.backgroundImage = "url('/img/exposure-2n.png')";
    console.log('ev', ev)
    console.log('evLevel', evLevel)
    if (evLevel == 16) {
      exposureLevel = 80; 
      darkenFilter(evLevel)
    } else if (evLevel == 15) {
      exposureLevel = 70; 
      darkenFilter(evLevel)
    } else if (evLevel == 14) {
      exposureLevel = 60; 
      darkenFilter(evLevel)
    } else if (evLevel == 13) {
      exposureLevel = 50; 
      darkenFilter(evLevel)
    } else if (evLevel == 12) {
      exposureLevel = 40; 
      darkenFilter(evLevel)
    } else if (evLevel == 11) {
      exposureLevel = 30; 
      darkenFilter(evLevel)
    }
  } else if (Math.ceil(ev) === evLevel+1) {
    exposure_image.style.backgroundImage = "url('/img/exposure-1n.png')";
    console.log('ev', ev)
    console.log('evLevel', evLevel)
    if (evLevel == 16) {
      exposureLevel = 90; 
      darkenFilter(evLevel)
    } else if (evLevel == 15) {
      exposureLevel = 80; 
      darkenFilter(evLevel)
    } else if (evLevel == 14) {
      exposureLevel = 70; 
      darkenFilter(evLevel)
    } else if (evLevel == 13) {
      exposureLevel = 60; 
      darkenFilter(evLevel)
    } else if (evLevel == 12) {
      exposureLevel = 50; 
      darkenFilter(evLevel)
    } else if (evLevel == 11) {
      exposureLevel = 40; 
      darkenFilter(evLevel)
    }
  } else if (Math.ceil(ev) === evLevel) {
    exposure_image.style.backgroundImage = "url('/img/exposure-0.png')";
    console.log('ev', ev)
    console.log('evLevel', evLevel)
    if (evLevel == 16) {
      exposureLevel = 100; 
      darkenFilter(evLevel)
    } else if (evLevel == 15) {
      exposureLevel = 110; 
      darkenFilter(evLevel)
    } else if (evLevel == 14) {
      exposureLevel = 120; 
      darkenFilter(evLevel)
    } else if (evLevel == 13) {
      exposureLevel = 130; 
      darkenFilter(evLevel)
    } else if (evLevel == 12) {
      exposureLevel = 140; 
      darkenFilter(evLevel)
    } else if (evLevel == 11) {
      exposureLevel = 150; 
      darkenFilter(evLevel)
    }
  } else if (Math.ceil(ev) === evLevel-1) {
    exposure_image.style.backgroundImage = "url('/img/exposure-1p.png')";
    console.log('ev', ev)
    console.log('evLevel', evLevel)
    if (evLevel == 16) {
      exposureLevel = 110; 
      darkenFilter(evLevel)
    } else if (evLevel == 15) {
      exposureLevel = 120; 
      darkenFilter(evLevel)
    } else if (evLevel == 14) {
      exposureLevel = 130; 
      darkenFilter(evLevel)
    } else if (evLevel == 13) {
      exposureLevel = 140; 
      darkenFilter(evLevel)
    } else if (evLevel == 12) {
      exposureLevel = 150; 
      darkenFilter(evLevel)
    } else if (evLevel == 11) {
      exposureLevel = 160; 
      darkenFilter(evLevel)
    }
  } else if (Math.ceil(ev) === evLevel-2) {
    exposure_image.style.backgroundImage = "url('/img/exposure-2p.png')";
    console.log('ev', ev)
    console.log('evLevel', evLevel)
    if (evLevel == 16) {
      exposureLevel = 120; 
      darkenFilter(evLevel)
    } else if (evLevel == 15) {
      exposureLevel = 130; 
      darkenFilter(evLevel)
    } else if (evLevel == 14) {
      exposureLevel = 140; 
      darkenFilter(evLevel)
    } else if (evLevel == 13) {
      exposureLevel = 150; 
      darkenFilter(evLevel)
    } else if (evLevel == 12) {
      exposureLevel = 160; 
      darkenFilter(evLevel)
    } else if (evLevel == 11) {
      exposureLevel = 170; 
      darkenFilter(evLevel)
    }
  } else if (Math.ceil(ev) === evLevel-3) {
    exposure_image.style.backgroundImage = "url('/img/exposure-3p.png')";
    console.log('ev', ev)
    console.log('evLevel', evLevel)
    if (evLevel == 16) {
      exposureLevel = 130; 
      darkenFilter(evLevel)
    } else if (evLevel == 15) {
      exposureLevel = 140; 
      darkenFilter(evLevel)
    } else if (evLevel == 14) {
      exposureLevel = 150; 
      darkenFilter(evLevel)
    } else if (evLevel == 13) {
      exposureLevel = 160; 
      darkenFilter(evLevel)
    } else if (evLevel == 12) {
      exposureLevel = 170; 
      darkenFilter(evLevel)
    } else if (evLevel == 11) {
      exposureLevel = 180; 
      darkenFilter(evLevel)
    }
  } else if (Math.ceil(ev) === evLevel-4) {
    exposure_image.style.backgroundImage = "url('/img/exposure-4p.png')";
    console.log('ev', ev)
    console.log('evLevel', evLevel)
    if (evLevel == 16) {
      exposureLevel = 140; 
      darkenFilter(evLevel)
    } else if (evLevel == 15) {
      exposureLevel = 150; 
      darkenFilter(evLevel)
    } else if (evLevel == 14) {
      exposureLevel = 160; 
      darkenFilter(evLevel)
    } else if (evLevel == 13) {
      exposureLevel = 170; 
      darkenFilter(evLevel)
    } else if (evLevel == 12) {
      exposureLevel = 180; 
      darkenFilter(evLevel)
    } else if (evLevel == 11) {
      exposureLevel = 190; 
      darkenFilter(evLevel)
    }
  } else if (Math.ceil(ev) === evLevel-5) {
    exposure_image.style.backgroundImage = "url('/img/exposure-5p.png')";
    console.log('ev', ev)
    console.log('evLevel', evLevel)
    if (evLevel == 16) {
      exposureLevel = 150; 
      darkenFilter(evLevel)
    } else if (evLevel == 15) {
      exposureLevel = 160; 
      darkenFilter(evLevel)
    } else if (evLevel == 14) {
      exposureLevel = 170; 
      darkenFilter(evLevel)
    } else if (evLevel == 13) {
      exposureLevel = 180; 
      darkenFilter(evLevel)
    } else if (evLevel == 12) {
      exposureLevel = 190; 
      darkenFilter(evLevel)
    } else if (evLevel == 11) {
      exposureLevel = 200; 
      darkenFilter(evLevel)
    }
  } else if (Math.ceil(ev) === evLevel-6) {
    exposure_image.style.backgroundImage = "url('/img/exposure-6p.png')";
    console.log('ev', ev)
    console.log('evLevel', evLevel)
    if (evLevel == 16) {
      exposureLevel = 160; 
      darkenFilter(evLevel)
    } else if (evLevel == 15) {
      exposureLevel = 170; 
      darkenFilter(evLevel)
    } else if (evLevel == 14) {
      exposureLevel = 180; 
      darkenFilter(evLevel)
    } else if (evLevel == 13) {
      exposureLevel = 190; 
      darkenFilter(evLevel)
    } else if (evLevel == 12) {
      exposureLevel = 200; 
      darkenFilter(evLevel)
    } else if (evLevel == 11) {
      exposureLevel = 210; 
      darkenFilter(evLevel)
    }
  } else if (Math.ceil(ev) < evLevel-6) {
    exposure_image.style.backgroundImage = "url('/img/exposure-6p.png')";
    console.log('ev', ev)
    console.log('evLevel', evLevel)
    if (evLevel == 16) {
      exposureLevel = 170; 
      darkenFilter(evLevel)
    } else if (evLevel == 15) {
      exposureLevel = 180; 
      darkenFilter(evLevel)
    } else if (evLevel == 14) {
      exposureLevel = 190; 
      darkenFilter(evLevel)
    } else if (evLevel == 13) {
      exposureLevel = 200; 
      darkenFilter(evLevel)
    } else if (evLevel == 12) {
      exposureLevel = 210; 
      darkenFilter(evLevel)
    } else if (evLevel == 11) {
      exposureLevel = 220; 
      darkenFilter(evLevel)
    }
  }
  
  return ev;
}


