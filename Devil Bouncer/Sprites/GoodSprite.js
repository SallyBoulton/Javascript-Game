function GoodSprite() {

    //create private variables for the x and y coordinates
    var x = 400,
        y = 300,
        vx = 0,
        vy = 0,
        //size = 40;


    //public property for X
    Object.defineProperty(this, 'X',
        {
            get: function ()
            {
                return x;
            },
            set: function (value)
            {
                x = value;
            }
        }
        )

    //public property for Y
    Object.defineProperty(this, 'Y',
        {
            get: function () {
                return y;
            },
            set: function (value)
            {
                y = value;
            }
        }
        )

    //public property for VX
    Object.defineProperty(this, "VX",
        {
            get: function () {
                return vx;
            },
            set: function (value) {
                vx = value;
            }
        })

    //public property for VY
    Object.defineProperty(this, 'VY',
        {
            get: function () {
                return vy;
            },
            set: function (value) {
                vy = value;
            }
        }
        )

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
                return y - 40;
            }
        }
        )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom', {
        //getter
        get: function () {
            //return the value of y plus height
            return y + 40;
            ;
        }
    }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left', {
        //getter
        get: function () {
            //return the value of x less width
            return x - 40;
        }
    }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right', {
        //getter
        get: function () {
            //return the value of x plus width
            return x + 40;
        }
    }
    )


    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    GoodSprite.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //start the lin (path)
        context.beginPath();
        context.fillStyle = "#FFD700";
        context.arc(20, 0, 40, 0, (Math.PI * 2));

        context.fill();
        //draw it
        context.stroke();

        //draw eyes

        context.fillStyle = "#ffffff";
        context.beginPath();
        //x.y.radius, start_angles, end_angle, anti-clockwise
        context.arc(0, -5, 10, 0, (Math.PI * 2));
        context.fill();
        context.stroke();

        context.fillStyle = "#ffffff";
        context.beginPath();
        //x.y.radius, start_angles, end_angle, anti-clockwise
        context.arc(30, -5, 10, 0, (Math.PI * 2));
        context.fill();
        context.stroke();
        //restore the context
        context.restore();
    }

    GoodSprite.prototype.move = function () {
        //change the x axis by the x velocity
        x += vx;
        //change the y axis by the y velocity
        y += vy;

        //public method to set the vector of the sprite
        GoodSprite.prototype.setVector = function (vector) {
            //set vx
            vx = vector.VX;
            //set vy
            vy = vector.VY;
        }
        //public method to set the vector of the sprite
        GoodSprite.prototype.accelerate = function (Acceleration) {
            //setvx
            vx += Acceleration.AX;
            //set vy
            vy += Acceleration.AY;
        }
        //public function called Halt
        GoodSprite.prototype.halt = function () {
            //temp variable to store the vy
            var temp = vy;
            //kill the velocity
            vx = 0;
            vy = 0;
            if (temp > .4) {
                Boom = true;
            }

        }
       


    }

}