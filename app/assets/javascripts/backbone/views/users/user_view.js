var UserView = Backbone.View.extend({
	template: JST['backbone/templates/users/user'],

	tagName: "tr",

	render: function(){
		this.$el.html( this.template({user: this.model.toJSON()}));
		return this;
	},

	events: {
		'click .destroy': 'destroy'
	},	

	destroy: function(){
		this.model.destroy(); //Eliminamos el modelo
		this.remove(); 			//Eliminamos esta vista
	}
});
