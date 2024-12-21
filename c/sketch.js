let button;
let play_status = false; // 状態を管理するフラグ
let window_height;
let img;
let x; //最初の丸のX座標
let y;
let Speed; //丸の動く速度
let moveleft = true; //左に動いているかどうかのステータス
let img2;
let moveleft2 = false;
let x2 = 0;
let Speed2 = 5;
let p68;
let img3;
let img4;
let img5;
var yyy;
var w = 1100;
var h = 780;
var n = 0.001;
var snows = new Array(200);
var integrations = new Array(w / 4);
var v = 2;

function preload() {
     mysound = loadSound('christmas-music-merry-christmas-264517.mp3');
  img = loadImage("reindeer-and-santa.gif");
  img2 = loadImage("568.png");
  p68 = loadImage("sori.png");
  b1 = loadImage("images.png");
  img4 = loadImage("116c998e39760744b47057b25ff87625.gif");
  img5 = loadImage("winter_snow_illust_1799.png");
  img6 = loadImage("00-24-20-649_512.gif");
}

function setup() {
  // 画面縦幅
  window_height = (8.5 * windowWidth) / 16;

  // キャンバスを描画
  createCanvas(windowWidth, window_height);

  // ボタンを作成
  button = createButton("再生");
  button.position(10, 10); // ボタンの位置

  // ボタンが押されたときの動作
  button.mousePressed(() => {
    play_status = !play_status; // 状態を切り替え
    if (play_status) {
       mysound.loop();
      button.html("停止");
      y = window_height - 600;
      x = windowWidth; // 円の初期位置
      Speed = 3.5; // 円の速度
      for (i = 0; i < snows.length; i++) {
        snows[i] = [random(w), random(h), random(3, 10)];
      }

      for (j = 0; j < integrations.length; j++) {
        integrations[j] = 0;
      }
    } else {
       mysound.stop();
      button.html("再生");
    }
  });
}

function draw() {
  if (play_status) {
    background(0, 100, 200); // 再生状態の背景色
    christmas();
  } else {
    background(0); // 停止状態の背景色
  }
}

function christmas() {
  // 再生状態のときに表示する内容
  image(img4, 0, 0, windowWidth, 700);
  image(img6, windowWidth/2-200, 250, 400, 400);
  image(img, x, y - 100, 300, 300);
  //左への動き
  if (moveleft) {
    x = x - Speed;
    y = y - 0.2;
    if (x < -301) {
      y = window_height - 600;
      x = windowWidth;
    }
  }
  image(img2, x2, 130, 160, 160);
  image(p68, x2, 157, 230, 230);
  image(b1, x2, 157, 70, 70);
  if (moveleft2) {
    x2 = x2 - Speed2;
    if (x2 < -100) {
      moveleft2 = false;
    }
  }
  //右への動き
  if (!moveleft2) {
    x2 = x2 + Speed2;
    if (x2 > windowWidth - windowWidth / 12) {
      moveleft2 = true;
    }
  }
  // 再生状態のときに表示する内容
  noStroke();
  for (j = 0; j < snows.length; j++) {
    drawLight(snows[j]);
    snows[j][1] += v;
  }

  drawIntegrate();
  var index = int(random(w / 4));
  integrations[index] = integrations[index] + 1;
}
function drawLight(snow) {
  for (i = 0; i < n; i++) {
    fill(255, 255 / n);
    ellipse(snow[0], snow[1] % h, (snow[2] / n) * (n - i));
  }
}

function drawIntegrate() {
  for (j = 0; j < integrations.length; j++) {
    fill(255, 200);
    ellipse(j * 4, h, integrations[j] * 4, integrations[j] * 2);
  }
}
