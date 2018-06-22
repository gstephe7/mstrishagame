var canvas = document.getElementById('trisha');
var ctx = canvas.getContext('2d');

//Game score
var score = 0;

//function used to display the score
function displayScore() {
  var scoreNum = document.getElementById('scoreNum');
  scoreNum.innerHTML = score;
}

displayScore();

//Used to increase the score
function increaseScore() {
  score++;
  displayScore();
}

//Used to reset the score when the player is caught
function resetScore() {
  score = 0;
  displayScore();
}

//Initializes the canvas
function drawCanvas() {
  canvas.width = 400;
  canvas.height = 400;

  var trisha = new Image();
  var trishaLt = new Image();
  var trishaRtOpen = new Image();
  var trishaLtOpen = new Image();
  var gregrt = new Image();
  var greglt = new Image();
  var masonrt = new Image();
  var masonlt = new Image();
  var cookieDough = new Image();
  var zaxbys = new Image();
  var bread = new Image();
  var pizza = new Image();
  var pasta = new Image();
  var apple = new Image();
  var sushi = new Image();
  var points = new Image();
  var onePoint = new Image();
  var twoPoints = new Image();
  var threePoints = new Image();
  var fourPoints = new Image();
  var minusOnePoint = new Image();
  var minusFourPoints = new Image();
  var youLose = new Image();
  var loseText = new Image();

  trisha.src = '../img/trishart.png';
  trishaLt.src = '../img/trishalt.png';
  trishaRtOpen.src = '../img/trishartopen.png';
  trishaLtOpen.src = '../img/trishaltopen.png';
  gregrt.src = '../img/gregrt.png';
  greglt.src = '../img/greglt.png';
  masonrt.src = '../img/masonrt.png';
  masonlt.src = '../img/masonlt.png';
  cookieDough.src = '../img/cookie-dough.png';
  zaxbys.src = '../img/zaxbys.png';
  bread.src = '../img/bread.png';
  pizza.src = '../img/pizza.png';
  pasta.src = '../img/pasta.png';
  apple.src = '../img/apple.png';
  sushi.src = '../img/sushi.png';
  points.src = '';
  onePoint.src = '../img/onePoint.png';
  twoPoints.src = '../img/twoPoints.png';
  threePoints.src = '../img/threePoints.png';
  fourPoints.src = '../img/fourPoints.png';
  minusOnePoint.src = '../img/minusOnePoint.png';
  minusFourPoints.src = '../img/minusFourPoints.png';
  youLose.src = '';
  loseText.src = '../img/youLose.png';

  var randomCookieDough = Math.random() + 1000 * 3;
  var randomZaxbys = Math.random() + 1000 * 6;
  var randomBread = Math.random() + 1000 * 7;
  var randomPizza = Math.random() + 1000 * 5;
  var randomPasta = Math.random() + 1000 * 4;
  var randomApple = Math.random() + 1000 * 7;
  var randomSushi = Math.random() + 1000 * 7;
  var randomSpeed = Math.random() + 1;
  var trishax = 200;
  var trishay = 200;
  var gregx = -100;
  var gregy = Math.random() * 400;
  var masonx = Math.random() * 400;
  var masony = 100;
  var cookieDoughx = Math.random() * 800;
  var cookieDoughy = Math.random() * 800;
  var zaxbysx = Math.random() * 600;
  var zaxbysy = Math.random() * 600;
  var breadx = Math.random() * 600;
  var bready = Math.random() * 600;
  var pizzax = Math.random() * 600;
  var pizzay = Math.random() * 600;
  var pastax = Math.random() * 600;
  var pastay = Math.random() * 600;
  var applex = Math.random() * 600;
  var appley = Math.random() * 600;
  var sushix = Math.random() * 600;
  var sushiy = Math.random() * 600;

  var trishaOpen = false;
  var gregShake = false;
  var masonTurn = false;
  var showPoints = false;

  function generateRandomCookieDough() {
    randomCookieDough = Math.random() + 1000 * 3;
  }

  function generateRandomZaxbys() {
    randomZaxbys = Math.random() + 1000 * 6;
  }

  function generateRandomBread() {
    randomBread = Math.random() + 1000 * 7;
  }

  function generateRandomPizza() {
    randomPizza = Math.random() + 1000 * 5;
  }

  function generateRandomPasta() {
    randomPasta = Math.random() + 1000 * 4;
  }

  function generateRandomApple() {
    randomApple = Math.random() + 1000 * 7;
  }

  function generateRandomSushi() {
    randomSushi = Math.random() + 1000 * 7;
  }

  function generateRandomSpeed() {
    randomSpeed = Math.random() + 1;
  }

  setInterval(function() {
    gregShake = !gregShake;
  }, 100);

  setInterval(function() {
    masonTurn = !masonTurn;
  }, 750);

  window.addEventListener('load', function() {

    function drawTrisha() {
      ctx.drawImage(trisha, trishax, trishay);
    }

    function drawGreg() {
      ctx.drawImage(gregrt, gregx, gregy);
    }

    function drawMason() {
      ctx.drawImage(masonrt, masonx, masony);
    }

    function moveGreg() {
      if (gregx > 450) {
        gregx = -100;
        gregy = Math.random() * 400;
        generateRandomSpeed();
      } else {
        gregx = gregx + randomSpeed;
      }
      if (gregShake) {
        gregrt.src = greglt.src;
        drawGreg();
      } else {
        gregrt.src = '../img/gregrt.png';
        drawGreg();
      }
    }

    function moveMason() {
      if (masony < -50) {
        masony = 450;
        masonx = Math.random() * 400;
        generateRandomSpeed();
      } else {
        masony = masony - randomSpeed;
      }
      if (masonTurn) {
        masonrt.src = masonlt.src;
        drawMason();
      } else {
        masonrt.src = '../img/masonrt.png';
        drawMason();
      }
    }

    function drawCookieDough() {
      ctx.drawImage(cookieDough, cookieDoughx, cookieDoughy);
    }

    function drawZaxbys() {
      ctx.drawImage(zaxbys, zaxbysx, zaxbysy);
    }

    function drawBread() {
      ctx.drawImage(bread, breadx, bready);
    }

    function drawPizza() {
      ctx.drawImage(pizza, pizzax, pizzay);
    }

    function drawPasta() {
      ctx.drawImage(pasta, pastax, pastay);
    }

    function drawApple() {
      ctx.drawImage(apple, applex, appley);
    }

    function drawSushi() {
      ctx.drawImage(sushi, sushix, sushiy);
    }

    function drawGems() {
      drawCookieDough();
      drawZaxbys();
      drawBread();
      drawPizza();
      drawPasta();
      drawApple();
      drawSushi();
    }

    function resetCookieDough() {
      cookieDoughx = Math.random() * 600;
      cookieDoughy = Math.random() * 600;
      drawCookieDough();
    }

    function resetZaxbys() {
      zaxbysx = Math.random() * 600;
      zaxbysy = Math.random() * 600;
      drawZaxbys();
    }

    function resetBread() {
      breadx = Math.random() * 600;
      bready = Math.random() * 600;
      drawBread();
    }

    function resetPizza() {
      pizzax = Math.random() * 600;
      pizzay = Math.random() * 600;
      drawPizza();
    }

    function resetPasta() {
      pastax = Math.random() * 600;
      pastay = Math.random() * 600;
      drawPasta();
    }

    function resetApple() {
      applex = Math.random() * 600;
      appley = Math.random() * 600;
      drawApple();
    }

    function resetSushi() {
      sushix = Math.random() * 600;
      sushiy = Math.random() * 600;
      drawSushi();
    }

    function moveRt() {
      trishaOpen = !trishaOpen;
      if (trishaOpen) {
        trisha.src = trishaRtOpen.src;
      } else {
        trisha.src = '../img/trishart.png';
      }
      if (trishax > 350) {
        trishax = trishax;
      } else {
        trishax = trishax + 20;
      }
    }

    function moveLt() {
      trishaOpen = !trishaOpen;
      if (trishaOpen) {
        trisha.src = trishaLtOpen.src;
      } else {
        trisha.src = trishaLt.src;
      }
      if (trishax < -10) {
        trishax = trishax;
      } else {
        trishax = trishax - 20;
      }
    }

    function moveUp() {
      trishaOpen = !trishaOpen;
      if (trishaOpen) {
        trisha.src = trishaLtOpen.src;
      } else {
        trisha.src = '../img/trishalt.png';
      }
      if (trishay < 0) {
        trishay = trishay;
      } else {
        trishay = trishay - 20;
      }
    }

    function moveDn() {
      trishaOpen = !trishaOpen;
      if (trishaOpen) {
        trisha.src = trishaRtOpen.src;
      } else {
        trisha.src = '../img/trishart.png';
      }
      if (trishay > 320) {
        trishay = trishay;
      } else {
        trishay = trishay + 20;
      }
    }

    function displayPoints() {
      if (showPoints) {
        pointsx = trishax + 20;
        pointsy = trishay - 20;
        ctx.drawImage(points, pointsx, pointsy);
        setTimeout(function() {
          showPoints = false;
        }, 1000);
      }
    }

    function eatCookieDough() {
      score = score + 4;
      displayScore();
      resetCookieDough();
      showPoints = true;
      points.src = fourPoints.src;
    }

    function eatZaxbys() {
      score = score + 2;
      displayScore();
      resetZaxbys();
      showPoints = true;
      points.src = twoPoints.src;
    }

    function eatBread() {
      score = score + 2;
      displayScore();
      resetBread();
      showPoints = true;
      points.src = twoPoints.src;
    }

    function eatPizza() {
      score = score + 1;
      displayScore();
      resetPizza();
      showPoints = true;
      points.src = onePoint.src;
    }

    function eatPasta() {
      score = score + 3;
      displayScore();
      resetPasta();
      showPoints = true;
      points.src = threePoints.src;
    }

    function eatApple() {
      score = score -1;
      displayScore();
      resetApple();
      showPoints = true;
      points.src = minusOnePoint.src;
    }

    function eatSushi() {
      score = score -4;
      displayScore();
      resetSushi();
      showPoints = true;
      points.src = minusFourPoints.src;
    }

    //Detects player eating cookie dough
    document.addEventListener('keydown', function() {
      if (trishax > cookieDoughx - 60 && trishax < cookieDoughx + 60 && trishay > cookieDoughy - 70 && trishay < cookieDoughy + 30) {
        eatCookieDough();
      }
      if (trishax > zaxbysx - 60 && trishax < zaxbysx + 60 && trishay > zaxbysy - 70 && trishay < zaxbysy + 30) {
        eatZaxbys();
      }
      if (trishax > breadx - 60 && trishax < breadx + 60 && trishay > bready - 70 && trishay < bready + 30) {
        eatBread();
      }
      if (trishax > pizzax - 60 && trishax < pizzax + 60 && trishay > pizzay - 70 && trishay < pizzay + 30) {
        eatPizza();
      }
      if (trishax > pastax - 60 && trishax < pastax + 60 && trishay > pastay - 70 && trishay < pastay + 30) {
        eatPasta();
      }
      if (trishax > applex - 60 && trishax < applex + 60 && trishay > appley - 70 && trishay < appley + 30) {
        eatApple();
      }
      if (trishax > sushix - 60 && trishax < sushix + 60 && trishay > sushiy - 70 && trishay < sushiy + 30) {
        eatSushi();
      }
    })

    document.addEventListener('keydown', function(e) {
      if (e.keyCode == 39) {
        moveRt();
      } else if (e.keyCode == 37) {
        moveLt();
      } else if (e.keyCode == 38) {
        moveUp();
      } else if (e.keyCode == 40) {
        moveDn();
      }
    })

    function checkLose() {
      if (trishax > gregx - 60 && trishax < gregx + 60 && trishay > gregy - 65 && trishay < gregy + 60) {
        loseGame();
      }
      if (trishax > masonx - 60 && trishax < masonx + 60 && trishay > masony - 65 && trishay < masony + 60) {
        loseGame();
      }
    }

    function loseGame() {
      youLose.src = loseText.src;
      ctx.drawImage(youLose, 0, 50);
      setTimeout(function() {
        score = 0;
        trishax = 200;
        trishay = 200;
        displayScore();
        trisha.src = '../img/trishart.png';
        youLose.src = '';
      }, 1000);
    }

    setInterval(function () {
      resetCookieDough();
      generateRandomCookieDough();
    }, randomCookieDough);

    setInterval(function () {
      resetZaxbys();
      generateRandomZaxbys();
    }, randomZaxbys);

    setInterval(function () {
      resetBread();
      generateRandomBread();
    }, randomBread);

    setInterval(function () {
      resetPizza();
      generateRandomPizza();
    }, randomPizza);

    setInterval(function () {
      resetPasta();
      generateRandomPasta();
    }, randomPasta);

    setInterval(function () {
      resetApple();
      generateRandomApple();
    }, randomApple);

    setInterval(function () {
      resetSushi();
      generateRandomSushi();
    }, randomSushi);

    setInterval(function(points) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawTrisha();
      drawGreg();
      drawMason();
      drawGems();
      moveGreg();
      moveMason();
      checkLose();
      displayPoints();
    }, 10);

  })
}

drawCanvas();
