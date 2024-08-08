function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);

noStroke()
}

function mouseClicked(){

    let xPos = random(0,500);
    let yPos = random(0,500);
  
    let r = random(0,255)
     let g = random(0,255)
     let b = random(0,255)
    fill(r,g,b)



  }

function draw(){
  ellipse(mouseX, mouseY, 25, 25);


}



