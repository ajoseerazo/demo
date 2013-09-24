var UserRouter = Backbone.Router.extend({
	initialize: function(options){
		this.users = new UserCollection();
		this.users.reset( options.users ); //Agregamos a la coleccion los modelos nuevos
	}, 
	routes: {
		'':'index',
		'new': 'newUser',
		'edit/:id': 'editUser'
	},
	index: function(){
		var indexView = new IndexView({users: this.users});
		$('#page').html( indexView.render().el );
	},
	newUser: function(){
		var newView = new NewView({ collection: this.users });
		newView.render();
		$('#page').html( newView.el );
	},
	editUser: function(id){
		var user = this.users.get(id);
		var editView = new EditView({ model: user });
		editView.render();
		$('#page').html( editView.el );
	}
})
