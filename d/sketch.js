let button;
let play_status = false; // 状態を管理するフラグ
let window_height;

let img;
let diameter=1;
let y=300;
let big = false; //大きくなっているどうかのステータス
let Speed=1;

let imgt;
let img1;
let a = false;

let yo; //最初の丸のy座標
let Speedx; //丸の動く速度
let Speedy; //丸の動く速度
let movetop = false; //上に動いているかどうかのステータス
let x; //最初の丸のX座標
let x2;
let moveleft = false; //左に動いているかどうかのステータス
let tate;
let yoko;
let imgo;

function preload(){
   mysound = loadSound('christmas-music-merry-christmas-264517 (1).mp3');
  img =loadImage('サンタ.png');
  imgt = loadImage('雪だるま.いらすとやpng.png');
  img1 = loadImage('2.いらすとやpng.png');
  imgo = loadImage ('tsurii1no2.png');
}

function setup() {
  // 画面縦幅
  window_height = (8.5 * windowWidth) / 16;

  // キャンバスを描画
  createCanvas(windowWidth, window_height);

  // ボタンを作成
  button = createButton("再生");
  button.position(10, 10); // ボタンの位置

  tate = 311;
  yoko = 237;
  // ボタンが押されたときの動作
  button.mousePressed(() => {
    play_status = !play_status; // 状態を切り替え
    if (play_status) {
      mysound.loop();
      button.html("停止");
      yo = (window_height - tate) / 2; // 円の初期位置
      x = (windowWidth - yoko) / 2; // 円の初期位置
      Speedx = 4.74; // 円の速度
      Speedy = 6.22; // 円の速度
      x2 = 0;
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
  
  image(imgo,x2, window_height - tate, yoko, tate);
  image(imgo,x,yo, yoko,window_height - yo);
  
  x2 += 30;
  if(x2 > windowWidth){
    x2 -= yoko + windowWidth;
  }
  //上方向の動き
  if (movetop) {
    yo = yo - Speedy;
    if (yo < 0) {
      movetop = false;
    }
  }
  //下方向の動き
  if (!movetop) {
    yo = yo + Speedy;
    if (yo > window_height - tate) {
      movetop = true;
    }
  }
  
  //左への動き
  if (moveleft) {
    x = x - Speedx;
    if (x < 0) {
      moveleft = false;
    }
  }
  //右への動き
  if (!moveleft) {
    x = x + Speedx;
    if (x > windowWidth - yoko) {
      moveleft = true;
    }
  }
  
  
//   // 再生状態のときに表示する内容
// if(a){
//   clear();
//     image(imgt,0,100,200,100) 
// }
// if(!a){
//   clear();
//   image(img1,256,100,100,100)
// }
  
  image(imgt,1000,300,200,200)
  image(img1,800,200,200,200)
  
  
  
  if((y+diameter)>window_height){
    y=window_height-diameter
  } else{console.log(y)
  //  y=200
        }
  console.log(y)
  // 再生状態のときに表示する内容
  image(img,200,y,diameter,diameter);
  //上方向の動き
  if (big) {
    diameter = diameter + Speed;
    if (diameter > window_height) {
      big = false;
    }
  }
  //下方向の動き
  if (!big) {
    diameter = diameter - Speed;
    if (diameter < windowWidth / 1) {
      big = true;
    }
  }


}