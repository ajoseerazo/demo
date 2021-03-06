var NewView = Backbone.View.extend({
	template: JST["backbone/templates/users/new"],

	render: function(){
		this.$el.html( this.template() );
		return this;
	},

	events: {
		'submit form': 'save'
	},

	save: function(event){
		event.preventDefault();		//Evitamos que se ejecute la accion por defecto
		
		var formData = {};				//Declaramos un hash para los datos del formulario

		$('#new-user').children('input').each( function(index, element){ //Extraemos los datos del
			formData[ element.id ] = $(element).val();										 //formulario
		});

		this.options.collection.create( formData, { //Añadimos el elemento a la coleccion y lo guardamos
			success: function(){
				router.navigate('', {trigger: true})    //Nos vamos a la pagina principal
			}
		});
	}
});
