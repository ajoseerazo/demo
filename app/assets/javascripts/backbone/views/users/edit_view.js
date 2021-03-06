var EditView = Backbone.View.extend({
	template: JST['backbone/templates/users/edit'],

	render: function(){
		this.$el.html( this.template({user: this.model.toJSON()}) );
		return this;
	},

	events: {
		'submit #edit-user': 'update'
	},

	update: function(event){
		event.preventDefault();
		
		var formData = {};				//Declaramos un hash para los datos del formulario

		$('#edit-user').children('input').each( function(index, element){ //Extraemos los datos del 
			formData[ element.id ] = $(element).val();											//formulario
		});

		this.model.save( formData, {
			success: function(){
				router.navigate('', {trigger:true});
			}
		});
		
	}
});
