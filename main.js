function preload()

{

}

function setup()

{

    canvas = createCanvas(620 , 440);

    canvas.position(450 , 340);

    video = createCapture(VIDEO);

    video.hide();

    tint_color = "";

}

function draw()

{

    image(video, 0 , 0 , 640 , 480);

    tint(tint_color);

}

function take_snapshot()

{

    save('Snapshot.png');

}

function filter_tint()

{

    tint_color = document.getElementById("color_name").value;

}