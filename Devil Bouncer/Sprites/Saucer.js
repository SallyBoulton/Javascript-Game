//create the constructor for the class saucer
function Saucer() {
    //create private variables for the x and y coordinates
    var x = 200,
        y = 200,
        vx = 0,
        vy = 0,
        size = 20,
        RedWindow = 1,
    GlobeYellow = 1;
    Boom = false;

    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on 
    Saucer.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //start the line (path)
        context.beginPath();
        context.fillStyle = "#d3d3d3";
        context.moveTo(30, 12);
        context.lineTo(80, 12);
        context.lineTo(80, 10);
        context.lineTo(70, 0);
        context.lineTo(30, -10);
        context.lineTo(23, -20);
        context.lineTo(-23, -20);
        context.lineTo(-30, -10);
        context.lineTo(-70, 0);
        context.lineTo(-80, 10);
        context.lineTo(-80, 12);
        context.lineTo(-30, 12);
        context.lineTo(-30, 20);
        context.lineTo(30, 20);
        //close the path
        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();
        DrawWindows(context);
        DrawGlobes(context);
        context.restore();
        //if the ship is blown up
        if (Boom == true) {
            //create a new instance of an image
            var img = new Image();
            //get the bitmap source
            img.src = "bang.png";
            //draw the image on the context
            context.drawImage(img, 20, 20);
        }

    }
    function DrawGlobes(context) {
        //var to store the colour of the globe
        var colour = "";
        //if the value of GlobeYellow is less than 50
        if (GlobeYellow < 50) {
            //set the colour to yellow
            colour = "#ffff00";
        }
        else {
            //othersiwse set it to red
            colour = "#ff0000";
        }
        //middle landing globe
        Globe(context, -14, 12, colour);
        //right landing globe
        Globe(context, 32, 12, colour);
        //left landing globe
        Globe(context, -63, 12, colour);
        //increase the value of globe yellow (the larger the increment the faster the flashing effect
        GlobeYellow += 1;
        //if globe yellow is more than 100
        if (GlobeYellow > 100) {
            //set it back to 1
            GlobeYellow = 1;
        }
    }

    /*//middle landing globe
    context.beginPath();
    context.fillStyle = "#ffff00";
    context.moveTo(-13, 12);
    context.quadraticCurveTo(0, 33, 13, 12);
    context.fill();
    context.stroke();

    //right landing globe
    context.beginPath();
    context.fillStyle = "#ffff00";
    context.moveTo(32, 12);
    context.quadraticCurveTo(50, 33, 63, 12);
    context.fill()
    context.stroke();

    //left landing globe
    context.beginPath();
    context.fillStyle = "#ffff00";
    context.moveTo(-63, 12);
    context.quadraticCurveTo(-50, 33, -32, 12);
    context.fill()
    context.stroke();*/

    // DrawWindows(context);
    //restore the state of the context to what it was before our drawing
    //context.restore();


    /*//draw window 1
     Window(context, -20, -12, "#ffffff");
     //draw window 2
     Window(context, -10, -12, "#ffffff");
     //draw window 3
     Window(context, 0, -12, "#ffffff");
     //draw window 4
     Window(context, 10, -12, "#ffffff");
     //draw window 5
     Window(context, 20, -12, "#ffffff");*/



    //restore the state of the context to what it was before our drawing
    //context.restore();



    /*function DrawWindows(context, colour) {
        //draw window 1
        Window(context, -20, -12, colour);
        //draw window 2
        Window(context, -10, -12, colour);
        //draw window 3
        Window(context, 0, -12, colour);
        //draw window 4
        Window(context, 10, -12, colour);
        //draw window 5
        Window(context, 20, -12, colour);
    }*/

    function DrawWindows(context) {
        //var for the offset of the window to be drawn
        var XOffset = -20,
            //var for loop counter to indicate which window we are drawing
            WindowNo = 1,
            //var to store the colour to use
            Colour = "";
        //loop through each window
        while (WindowNo != 6) {
            //if the red window is being drawn then set the colour to red
            if (WindowNo == RedWindow) {
                //set colour to red
                Colour = "#ff0000";

            }
            else {
                //set colour to white
                Colour = "#ffffff";
            }
            //draw the window
            Window(context, XOffset, -12, Colour);
            //point at the next window
            WindowNo++;
            //work out the position of the next window
            XOffset = XOffset + 10;
        }
        //change the red window to the next one
        RedWindow = RedWindow + .25;
        //if the red window is 6 thats too many
        if (RedWindow == 6) {
            //set it back to 1
            RedWindow = 1;
        }
    }
    function Window(context, xposn, yposn, colour) {
        //draw window
        context.beginPath();
        context.fillStyle = colour;
        //x,y, radius, start_angle, end_angle, anti-clockwise
        context.arc(xposn, yposn, 3, 0, (Math.PI * 2));
        context.fill()
        context.stroke();

    }
    function Globe(context, xposn, yposn, colour) {
        //begin the path
        context.beginPath();
        //set the fill colour
        context.fillStyle = colour;
        //move to the position to start the globe
        context.moveTo(xposn, yposn);
        //draw the curve from that position to +30px passing toward x+13, y+20
        context.quadraticCurveTo(xposn + 13, yposn + 20, xposn + 30, yposn);
        //fill the globe
        context.fill();
        //draw the globe
        context.stroke();
    }
    Saucer.prototype.move = function () {
        //change the x axis by the x velocity
        x += vx;
        //change the y axis by the y velocity
        y += vy;
    }
    Saucer.prototype.setVector = function (vector) {
        //set vx
        vx = vector.VX;
        //set vy
        vy = vector.VY;
    }
    //public method to set the vector of the saucer
    Saucer.prototype.accelerate = function (Acceleration) {
        //setvx
        vx += Acceleration.AX;
        //set vy
        vy += Acceleration.AY;
    }
    //public function called Halt
    Saucer.prototype.halt = function () {
        //temp variable to store the vy
        var temp = vy;
        //kill the velocity
        vx = 0;
        vy = 0;
        if (temp > .4) {
            Boom = true;
        }

    }
    //public property for size
    Object.defineProperty(this, 'Size',
    {
        get: function () {
            return size;
        },
        set: function (value) {
            size = value;
        }
    }
    )
    //create a public property called Top
    Object.defineProperty(this, 'Top',
        {
            //getter
            get: function () {
                //return the value of y less height
                return y - 20;
            }
        })
    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom', {
        //getter
        get: function () {
            //return the value of y plus height
            return
            ;
        }
    })
    //create a public property called Left
    Object.defineProperty(this, 'Left', {
        //getter
        get: function () {
            //return the value of x less width
            return x - 30;
        }
    }
        )
    //create a public property called Right
    Object.defineProperty(this, 'Right', {
        //getter
        get: function () {
            //return the value of x plus width
            return x + 30;
        }
    })


}