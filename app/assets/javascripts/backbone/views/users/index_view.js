var IndexView = Backbone.View.extend({
	template: JST["backbone/templates/users/index"],

	render: function(){
		this.$el.html( this.template({users: this.options.users.toJSON()}) );	
		var self = this;
		this.options.users.each( function(user){
			var userView = new UserView({model: user});
			userView.render();
			self.$('tbody').append( userView.el );
		});			
		return this;
	}
});
