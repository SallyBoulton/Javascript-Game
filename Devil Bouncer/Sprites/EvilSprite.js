//create the constructor for the class Evil
function Evil()
{
    //private data members
    //xposn
    var x=0,
        //yposn
        y=0,
        //size=40,
        //x velocity
        vx=20,
        //y velocity
        vy = 20;
    EvilColour = 1;
    EyeColour = 1;
    EyeColour2 = 1;

    //public property for VX
    Object.defineProperty(this,"VX",
        {
            get:function(){
                return vx;
            },
            set:function(value){
                vx=value;
            }
        })

    //public property for VY
    Object.defineProperty(this,'VY',
        {
            get:function(){
                return vy;},
            set: function(value){
                vy=value;
            }
        }
        )

    //public property for size
    Object.defineProperty(this,'Size',
    {
        get:function(){
            return size;
        },
        set:function(value){
            size=value;
        }
    }
    )

    //public property for X
    Object.defineProperty(this,'X',
        {
            get:function(){
                return x;},
            set:function(value){
                x=value;
            }
        })


    //public property for Y
    Object.defineProperty(this,'Y',
        {
            get: function () {
                return y;
            },
            set: function (value) {
                y = value;
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

    //function public draw method
    Evil.prototype.draw = function (context) {
        //save the context
        context.save();
        //set x and y
        context.translate(x, y);
        //set the line width
        context.lineWidth = 2;
        //set the colour of the fill
        //context.fillStyle = colour;
        //begin the path
        //if the value of EvilColour is less than 50
        if (EvilColour < 50) {
            //set the colour to red

            context.fillStyle = "#FF0000";
        }
        else {

            context.fillStyle = "#00FF00";
        }
        EvilColour += 1;
        //if the sprite is more than 100
        if (EvilColour > 100) {
            //set it back to 1
            EvilColour = 1;
        }
        context.beginPath();
        
        //x, y, radius, start_angle, end_angle, antil_clockwise
        context.arc(-20, 0, 40, 0, (Math.PI * 2));
        context.fill();
        context.stroke();
        



            //draw eyes
            
            context.fillStyle = "#ffffff";
            context.beginPath();
            //x.y.radius, start_angles, end_angle, anti-clockwise
            context.arc(-40, -5, 10, 0, (Math.PI * 2));
            context.fill();
            context.stroke();

            if (EyeColour < 50) {
                //set the colour to black

                context.fillStyle = "#000000";
            }
            else {
                //set the eye colour to white
                context.fillStyle = "#FFFFFF";
            }
            EyeColour += 1;
        //if the sprite is more than 100
            if (EyeColour > 100) {
                //set it back to 1
                EyeColour = 1;
            }
            context.fillStyle = "000000";
            context.beginPath();
        //x.y.radius, start_angles, end_angle, anti-clockwise
            context.arc(0, -5, 10, 0, (Math.PI * 2));
            context.fill();
            context.stroke();
            if (EyeColour2 < 50) {
                //set the colour to black

                context.fillStyle = "#000000";
            }
            else {
                //set the eye colour to white
                context.fillStyle = "#FFFFFF";
            }
            EyeColour2 += 1;
        //if the sprite is more than 100
            if (EyeColour2 > 100) {
                //set it back to 1
                EyeColour2 = 1;
            }

        /*//draw mouth
            context.fillStyle = "#ffffff";
            context.beginPath();
            context.moveTo(-10, 5);
            context.quadraticCurveTo(10, 0);
            context.fill();
            context.stroke();*/

        //restore the context
        context.restore();
        //draw the sprite
        //context.moveTo(5, -10);
        //context.lineTo(10, -30);
        //context.lineTo(15, -35);
    }   
}
