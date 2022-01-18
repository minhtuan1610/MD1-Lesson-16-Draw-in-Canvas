//Ve duong thang
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
//Ve duong tron
let c1 = document.getElementById("myCanvas1");
let ctx1 = c1.getContext("2d");
ctx1.beginPath();
ctx1.arc(95, 50, 40, 0, 2 * Math.PI);
ctx1.stroke();
//Ve chu
let c2 = document.getElementById("myCanvas2");
let ctx2 = c2.getContext("2d");
ctx2.font = "30px Arial";
ctx2.fillText("Hello World", 10, 50);
// Su dung ctx2.strokeText("Hello World", 10, 50);
//Hieu ung Gradient
let c3 = document.getElementById("myCanvas3");
let ctx3 = c3.getContext("2d");
//Create gradient
let grd3 = ctx3.createLinearGradient(0, 0, 200, 0);
grd3.addColorStop(0, "red");
grd3.addColorStop(1, "White");
//Fill with gradient
ctx3.fillStyle = grd3;
ctx3.fillRect(10, 10, 150, 80);
//Hieu ung Gradient tron
let c4 = document.getElementById("myCanvas4");
ctx4 = c4.getContext("2d");
//Create gradient
let grd4 = ctx4.createRadialGradient(75, 50, 5, 90, 60, 100);
grd4.addColorStop(0, "red");
grd4.addColorStop(1, "White");
//Fill with gradient
ctx4.fillStyle = grd4;
ctx4.fillRect(10, 10, 150, 80);