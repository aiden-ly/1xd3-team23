window.addEventListener("load", function (event) {
    let c = document.getElementById("animationCanvas");
    let ctx = c.getContext("2d");
    let angle = 0;
    let angleStep = 0.001;

    function startAnimation() {
        timerId = setInterval(updateAnimation, 16);
    }


    function updateAnimation() {

        angle += angleStep;
        if (angleStep < 0.02) {
            angleStep += 0.0001;
        }

        ctx.clearRect(0, 0, c.width, c.height);

        ctx.fillStyle = "rgb(158,96,250)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(240, 200, 75, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.fillStyle = "white";
        ctx.strokeStyle = "white"
        ctx.font = "bold 64px Trebuchet MS";
        ctx.fillText("Novaspire", 95, 410);
        ctx.font = "20px Trebuchet MS";
        ctx.fillText("It's finger-swipin' good!", 140, 450);

        ctx.save();

        ctx.translate(240, 200);
        ctx.rotate(angle);
        ctx.translate(-240, -200);

        ctx.strokeStyle = "rgb(0,96,250)";
        ctx.setLineDash([50, 40]);
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc(240, 200, 130, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();

        ctx.translate(240, 200);
        ctx.rotate(angle);
        ctx.translate(-240, -200);
        
        ctx.strokeStyle = "rgb(0,96,250)";
        ctx.setLineDash([50, 40]);
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc(240, 200, 100, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();

        ctx.restore();
    }

    startAnimation();

});