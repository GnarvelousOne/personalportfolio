let bgi = document.getElementById('bgi');
let childquarn = document.getElementById('childquarn');
let quarncolor = document.getElementById('quarncolor');
let goldtotal = document.getElementById('goldtotal');
let goldbtn = document.getElementById('goldbtn');
let numgold = 0;
let getcup = document.getElementById('getcup');
let getsword = document.getElementById('getsword');
let getwand = document.getElementById('getwand');
let getdisk = document.getElementById('getdisk');
let ascendbtn = document.getElementById('ascendbtn');
let titles = document.getElementById('titles');
let titlebtn = document.getElementById('titlebtn');
let tetris1 = document.getElementById('tetris1');
let tetris2 = document.getElementById('tetris2');
let tetris3 = document.getElementById('tetris3');
let tetris4 = document.getElementById('tetris4');
let tetrissecret = document.getElementById('tetrissecret');
let tetristext = document.getElementById('tetristext');

/*  Need a better way to read a txt file or to get data from python web scraper

document.getElementById('fileInput').addEventListener('change', function selectedFileChanged() {
  if (this.files.length === 0) {
    console.log('No file selected, bah humbug.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function fileReadCompleted() {
    // when the reader is done, the content is in reader.result.
    console.log(reader.result);
    var readerlist = reader.result.split(";");
    // titles.innerHTML = readerlist[rgb(readerlist.length)];
    for (let i = 0; i <= readerlist.length; i ++) {
      setInterval(function(){ titles.innerHTML = "<i>Here are the current articles posted on c4ss:  </i><br>" + readerlist[rgb(readerlist.length-1)]; }, 3000);
    };
    // titles.innerHTML = readerlist[2];
    // titles.innerHTML = reader.result;
  };
  reader.readAsText(this.files[0]);
});


/*function readTextFile(file, button) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                button.innerHTML = allText;
            }
        }
    }
    rawFile.send(null);
}*/

function rgb(num) {
  return Math.floor(Math.random() * num);
}
/*
tetris1.onclick = function () {
  tetris1.innerHTML = "<strong>TETRIS</strong>"
  if (tetris1.innerHTML == "<strong>TETRIS</strong>" && tetris2.innerHTML == "<strong>TETRIS</strong>" && tetris3.innerHTML == "<strong>TETRIS</strong>" && tetris4.innerHTML == "<strong>TETRIS</strong>") {
    tetrissecret.style.display = "inline";
  };
};
tetris2.onclick = function () {
  tetris2.innerHTML = "<strong>TETRIS</strong>"
  if (tetris1.innerHTML == "<strong>TETRIS</strong>" && tetris2.innerHTML == "<strong>TETRIS</strong>" && tetris3.innerHTML == "<strong>TETRIS</strong>" && tetris4.innerHTML == "<strong>TETRIS</strong>") {
    tetrissecret.style.display = "inline";
  };
};
tetris3.onclick = function () {
  tetris3.innerHTML = "<strong>TETRIS</strong>"
  if (tetris1.innerHTML == "<strong>TETRIS</strong>" && tetris2.innerHTML == "<strong>TETRIS</strong>" && tetris3.innerHTML == "<strong>TETRIS</strong>" && tetris4.innerHTML == "<strong>TETRIS</strong>") {
    tetrissecret.style.display = "inline";
  };
};
tetris4.onclick = function () {
  tetris4.innerHTML = "<strong>TETRIS</strong>"
  if (tetris1.innerHTML == "<strong>TETRIS</strong>" && tetris2.innerHTML == "<strong>TETRIS</strong>" && tetris3.innerHTML == "<strong>TETRIS</strong>" && tetris4.innerHTML == "<strong>TETRIS</strong>") {
    tetrissecret.style.display = "inline";
  };
};

tetrissecret.onclick = function () {
  if (quarncolor.style.backgroundImage != 'url("tetris.jpeg")') {
    quarncolor.style.backgroundImage = 'url("tetris.jpeg")';
    //quarncolor.style.filter = 'grayscale(100%)';

  } else {
    quarncolor.style.backgroundImage = '';
  };
};
//*/

bgi.onmouseover = function () {
  bgi.style.filter = 'grayscale(0%)';
  childquarn.style.color = '#990000';
};

bgi.onmouseout = function () {
  bgi.style.filter = 'grayscale(100%)';
  childquarn.style.color = '';
};

function quarnColor() {
  quarncolor.style.transition = '0.1s';
  const randomColor = () => {
    number = Math.floor(Math.random() * 8);
    switch (number) {
      case 0:
        return "#1f4060"; //blue
      case 1:
        return "#004d00"; //green
      case 2:
        return "#800000"; //red
      case 3:
        return "#000000"; //black
      case 4:
        return "#e65c00"; //orange
      case 5:
        return "#cccc00"; //yellow
      case 6:
        return "#660066"; //purple
      case 7:
        return "#999966"; //silver

      }
    };
  quarncolor.style.backgroundColor = randomColor();
};

function quarnAcid() {
  quarncolor.style.backgroundColor = "#ffffff";
  quarncolor.style.transition = '5s';
};

function goldHover() {
  goldbtn.style.color = "#ffcc00";
};

var inventory = "";

function getGold() {
  numgold += 1;
  goldtotal.style.display = "block";
  goldtotal.innerHTML = 'Gold Total: '+ numgold + ' // Inventory: ' + inventory;
  if (numgold > 9) {
    getcup.style.display = "inline";
    getcup.onclick = function() {
      if (numgold >= 10) {
        numgold -= 10;
        cup = true;
        inventory += '{CUP}';
        goldtotal.innerHTML = 'Gold Total: '+ numgold + ' // Inventory: ' + inventory;
      };
      if (inventory == '{CUP}{SWORD}{WAND}{DISK}') {
        ascendbtn.style.display = "inline";
      };
    }
  } else {
      getcup.style.display = "none"
    };
  if (numgold > 19) {
    getsword.style.display = "inline";
    getsword.onclick = function() {
      if (numgold >= 20) {
        numgold -= 20;
        sword = true;
        inventory += '{SWORD}';
        goldtotal.innerHTML = 'Gold Total: '+ numgold + ' // Inventory: ' + inventory;
      };
      if (inventory == '{CUP}{SWORD}{WAND}{DISK}') {
        ascendbtn.style.display = "inline";
      };
    }
  } else {
      getsword.style.display = "none";
    };
  if (numgold > 29) {
    getwand.style.display = "inline";
    getwand.onclick = function() {
      if (numgold >= 30) {
        numgold -= 30;
        wand = true;
        inventory += '{WAND}';
        goldtotal.innerHTML = 'Gold Total: '+ numgold + ' // Inventory: ' + inventory;
      };
      if (inventory == '{CUP}{SWORD}{WAND}{DISK}') {
        ascendbtn.style.display = "inline";
      };
    };
  } else {
      getwand.style.display = "none";
    };
  if (numgold > 39) {
    getdisk.style.display = "inline";
    getdisk.onclick = function() {
      if (numgold >= 40) {
        numgold -= 40;
        disk = true;
        inventory += '{DISK}';
        goldtotal.innerHTML = 'Gold Total: '+ numgold + ' // Inventory: ' + inventory;
      };
      if (inventory == '{CUP}{SWORD}{WAND}{DISK}') {
        ascendbtn.style.display = "inline";
      };
    }
  } else {
      getdisk.style.display = "none";
    };

};

// create a list from titles.txt, split on the semicolon. then call each title one at a time, transition css fade in

window.onscroll = function() {myFunction()};
quarncolor.onscroll = function() {quarnColor()};
quarncolor.onkeypress = function() {quarnColor()};
goldbtn.onclick = function() {getGold()};
goldbtn.onmouseover = function() {goldHover()};
ascendbtn.onmouseover = function() {quarnAcid()};
ascendbtn.onmouseout = function() {quarnColor()};
// titlebtn.onclick = function() {readTextFile("titles.txt", "titlebtn")};

function myFunction() {
  var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) /
   (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  if (scrollpercent > .2 && scrollpercent < .4) {
    document.getElementById("pagescroll").style.backgroundColor = '#1f4060';
  } else if (scrollpercent > .4 && scrollpercent < .6) {
    document.getElementById("pagescroll").style.backgroundColor = '#004d00';
  } else if (scrollpercent > .6 && scrollpercent < .8) {
    document.getElementById("pagescroll").style.backgroundColor = '#800000';
  } else {
    document.getElementById("pagescroll").style.backgroundColor = "";
  }
};

/*function myFunction() {
  if (document.body.scrollTop > 100 && document.body.scrollTop < 400 ||
     document.documentElement.scrollTop > 100 && document.documentElement.scrollTop < 400){
    document.getElementById("pagescroll").style.backgroundColor = '#1f4060';
  } else if (document.body.scrollTop > 400 && document.body.scrollTop < 700 ||
     document.documentElement.scrollTop > 400 && document.documentElement.scrollTop < 700){
    document.getElementById("pagescroll").style.backgroundColor = '#006600';
  } else {
    document.getElementById("pagescroll").style.backgroundColor = "";
  }
};*/
/*let zombie = document.getElementById('zombie');

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
};

function loadSound() {
  mySound = new sound("zombie.mp3");
}

/*zombie.onclick = function {
  mySound.play();
};*/
