//Todo
game.playerEntity = me.Entity.extend({
    init: function(x, y, settings){
        this._super(me.Entity, 'init', [x, y, {
          image: "Ultra Mario",
          spritewidth: "128",
          spriteheight: "128",
          width: 128,
          height: 128,
          getShape: function(){
              return (new me.Rect(0, 0, 26, 128)).toPolygon();
          }
      }]);
  
      this.renderable.addAnimation("idle", [3]);
      
      this.renderable.addAnimation("smallwalk", [8, 9, 10, 11, 12, 13], 80);
      
      this.renderable.setCurrentAnimation("idle");
      
      this.body.setVelocity(5, 20);
      me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
  },
  
  update: function (delta){
  if(me.input.isKeyPressed("right")){
       this.renderable.flipX(false);
       this.body.vel.x += this.body.accel.x * me.timer.tick;
      this.renderable.addAnimation("smallWalk");
  
      }else if(me.input.isKeyPressed("left")) {
        this.renderable.flipX(true);
        this.body.vel.x -= this.body.accel.x * me.timer.tick;
        this.renderable.addAnimation("smallWalk");
       
    }
    else{
      this.body.vel.x = 0;
  }
  
  if(me.input.isKeyPressed("jump")){
      
          this.body.vel.y -= this.body.accel.y * me.timer.tick;
      }
  
  this.body.update(delta);
  me.collision.check(this, true, this.collideHandler.bind(this), true);
 
  if(this.body.vel.x !==0){
      if(!this.renderable.isCurrentAnimation("smallWalk")){
         this.renderable.setCurrentAnimation("smallWalk");
         this.renderable.setAnimationFrame();
        }
  }else{
  this.renderable.setCurrentAnimation("idle");   
  }
   
   
   this._super(me.Entity, "update",[delta]);
    return true;
  },
  
  collideHandler: function(response){
          
      
  }
      
      
  
  });
  
  game.levelTrigger = me.Entity.extend({
     init: function(x, y, settings){
     this._super(me.Entity, 'init', [x, y, settings]);
      this.body.onCollision = this.onCollision.bind(this);
     this.level = settings.Level;
     this.xSpawn = settings.xSpawn;
     this.ySpawn = settings.ySpawn;
    },
      
      onCollision: function(){
      this.body.setCollisionMask(me.collision.types.NO_OBJECTS);
     me.levelDirector.loadLevel(this.level);
     me.state.current().resetplayer(this.xSpawn, this.ySpawn);
      }
      
  });
  
  game.BadGuy = me.Entity.extend({
      init: function(x, y, settings){
        this._super(me.Entity, 'init', [x, y, {
          image: "slime",
          spritewidth: "60",
          spriteheight: "28",
          width: 60,
          height: 28,
          getShape: function(){
              return (new me.Rect(0, 0, 26, 128)).toPolygon();
          }
      }]);
//  this.spritewidth = 60;
//  x=this.pos.x;
//  this.startX = x;
////  this.endX = x + width - this.spritewidth;
//  this.pos.x = x + width - this.spritewidth;
//      },
      
//    update: function(delta){
        
    }

  });

