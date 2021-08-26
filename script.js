console.log("hola");

var ctx = canvas.getContext("2d"),
  img = new Image(),
  radius = 200;
img.onload = setup;
img.src = "https://asisifelicia.com/wp-content/themes/felicia/img/home1400.png";

function setup() {
  // full screen canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // set image as pattern for fillStyle
  ctx.fillStyle = ctx.createPattern(this, "no-repeat");
  ctx.textAlign = "center";
  ctx.Image = (0, 0, canvas.width, canvas.height);

  // for demo only, reveals image while mousing over canvas
  canvas.onmousemove = function (e) {
    var r = this.getBoundingClientRect(),
      x = e.clientX - r.left,
      y = e.clientY - r.top;

    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  };
}
