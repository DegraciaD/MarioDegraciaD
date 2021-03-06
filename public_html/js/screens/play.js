game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		// reset the score
		game.data.score = 0;

           me.levelDirector.loadLevel("Ultra Mario Level01");
                   
           this.resetplayer(0,350);
                     
            me.input.bindKey(me.input.KEY.RIGHT, "right");
            me.input.bindKey(me.input.KEY.LEFT, "left");
          me.input.bindKey(me.input.KEY.SPACE,"jump", true);

		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	},
        
        resetplayer: function(x, y){
             var player = me.pool.pull("Ultra Mario", x, y, {});
             me.game.world.addChild(player, 6);
        }
});
