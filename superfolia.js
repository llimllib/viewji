//source derived from: 
//http://nodebox.net/code/index.php/Superfolia_|_root_source_code 
//caution! this may take a bit, just be patient

function radial_gradient(colors, x, y, radius)
{
    //we'll use canvas' native createRadialGradient, but
    //we could just as easily have used oval()
    push();
    g = ctx.createRadialGradient(x, y, 0, x, y, radius)
    for (c=0; c < colors.length; c++)
        g.addColorStop(c, colors[c])
    ctx.fillStyle=g
    rect(0,0,WIDTH,HEIGHT);
    pop();
}

function root(x, y, angle, depth, alpha, decay) {
    if (angle == undefined) angle=0
    if (depth == undefined) depth=5
    if (alpha == undefined) alpha=1
    if (decay == undefined) decay=.005

    // Recursive root branches to smaller roots.
    var w = depth*6
    for(i=0; i < depth * random(10,20); i++) {
        var v = depth/5
        alpha -= i*decay
        alpha = Math.max(0, alpha)
        
        if (alpha > 0) {
            // Next direction to grow in.,
            // e.g. between -60 and 60 degrees of current heading.
            angle += random(-60, 60)
            var dx = x + Math.cos(radians(angle)) * w
            var dy = y + Math.sin(radians(angle)) * w
            
            // Oval dropshadow.
            nostroke()
            fill(0, 0, 0, alpha*0.25)
            oval(x-w/6+depth, y-w/6+depth, w/3, w/3)
 
            // Line segment to next position.
            nofill()
            stroke(0.8-v*0.25, 0.8, 0.8-v, alpha)
            strokewidth((depth+1)*0.5)
            line(x, y, dx, dy)
            
            // Colored oval.
            strokewidth((depth+1)*0.25)
            fill(0.8-v*0.25, 0.8, 0.8-v, alpha*.5)
            oval(x-w/6, y-w/6, w/3, w/3)
            
            // Create a branching root.
            if (random() > 0.85 && depth > 0)
                root(x, y, angle, depth-1, alpha);
            
            x = dx
            y = dy
        }
    }

    // Continue growing at less alpha and depth.
    if (depth > 0)
        root(x, y, angle, depth-1, alpha)
}
 
size(600, 600)
radial_gradient(["rgb(32, 38, 0)", "rgb(13, 15, 0)"], 300, 300, 600)
root(300, 300, angle=-90, depth=6)
