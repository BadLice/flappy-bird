class Player
{
  constructor()
  {
    this.w = 20;
    this.canJump = true;
    this.started = false;
    this.dead = false;
    this.maxSpeed = 10;
    this.position = createVector(200, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.gravity = createVector(0, this.maxSpeed / 10);

    this.color = color(255, 242, 0);

  }

  draw()
  {
    push();
    stroke(0);
    fill(this.color);
    // rectMode(CENTER)
    // rect(this.position.x, this.position.y, this.w, this.w);
    translate(this.position.x, this.position.y);
    beginShape(TRIANGLES);
    vertex(this.w, 0);
    vertex(-this.w, this.w);
    vertex(-this.w, -this.w);
    endShape(CLOSE);
    pop();
  }

  update()
  {
    this.move();
    this.die();
  }

  die()
  {
    if (this.position.y >= height + this.w)
    {
      this.dead = true;
    }
  }

  move()
  {
    if (keyIsPressed || mouseIsPressed)
    {
      if (this.canJump)
      {
        if (keyCode == 32 || mouseIsPressed)
        {
          this.started = true;
          this.canJump = false;
          this.jump();
        }
      }
    }
    else
    {
      this.canJump = true;
    }

    if (this.started)
    {
      this.acceleration.add(this.gravity);
      this.velocity.add(this.acceleration);
      this.velocity.limit(7);
      this.position.add(this.velocity);

      //limit the player at the top of the screen
      if (this.position.y < -this.w * 2)
      {
        this.position.y = -this.w * 2;
      }
    }
  }

  jump()
  {
    this.jumped = true;
    this.acceleration = createVector(0, -this.maxSpeed);
  }


}