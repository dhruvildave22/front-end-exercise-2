//////THOR /////////////////////
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position
var x = initialTX;
var y = initialTY;

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    var directionX = "";
    var directionY = "";
    
    if(x > lightX ){
        directionX = "W";
        x--;
    }
    else if(x < lightX ){
        directionX = "E";
        x++;
    }
    
    if(y > lightY ){
        directionY = "N";
        y--;
    }
    else if(y < lightY ){
        directionY = "S";
        y++;
    }
    
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


     print(directionY + directionX);// A single line providing the move to be made: N NE E SE S SW W or NWconsole.log("E")    
     }
//  