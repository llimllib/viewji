//derived from: 
//http://nodebox.net/code/index.php/Fireworks 

size(800, 800)
 
fill(0.2, 0.05, 0)
rect(0, 0, WIDTH, HEIGHT)
nofill()
for (i=0; i < WIDTH/2; i++)
{
    r = i * 2
    a = 1.0 * i / WIDTH/2
    stroke(.99,1,0, 0.2 - a)
    strokewidth(1)
    oval(WIDTH/2-r*0.5, HEIGHT/2-r*0.5, r, r)
}

translate(WIDTH/2, HEIGHT/2)
strokewidth(0.25)
 
n = 80
for (i=0; i<n; i++)
{
  r = 50.0
  dy = random(n)
  d = 1.0*i/n  

  for (j=0; j<i/2; j++)
  {
    nostroke()
    fill(d*0.9, d*0.6, 1.0*j/i/2, 0.2*d)
    stroke(d*0.9, d*0.8, 1.0*j/i/2, d*0.7)
    push()
    translate(i/0.75, dy)
    rotate(10*j)
    r2 = 4+ 10.0 * j/i
    oval(0-r2*0.5+j*5, 0-r2*0.5, r2, r2)
    line(j*5, 0, 0, 0)
    pop()
  }
 
  fill(d*0.9, d*0.6, 0, 1.0-d)
  nostroke()
  rotate(5)
 
  stroke(d*0.9, d*0.6, 0, 1.0-d)
  nofill()
  beginpath(0, 0)
  curveto(0, 0, i, i, i/0.75, dy)
  endpath()
}
