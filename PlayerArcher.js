class PlayerArcher {
  constructor(x, y, width, height) {
    const options = {
      isStatic: true
    };

    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.collapse = false;
    this.image = loadImage("./assets/playerArcher.png");

    World.add(world, this.body);

    Matter.Body.setAngle(this.body, -PI / 2); // -90 degree
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    if (keyIsDown(DOWN_ARROW) && angle < -1.2) {
      angle += 0.01;
      Matter.Body.setAngle(this.body, angle);
    }

    if (keyIsDown(UP_ARROW) && angle > -1.6) {
      angle -= 0.01;
      Matter.Body.setAngle(this.body, angle);
    }

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

  reduceLife(archerLife){
    if(archerLife===2){
      this.life1="red";
    }

    if(archerLife===1){
      this.life2="red";
    }

    if(archerLife===0){
      this.life3=red;
    }
  }
}
