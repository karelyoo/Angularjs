(function(){
	var app = angular.module('store', []);


	var gem = {
		name:'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae velit ducimus, consequatur id animi facilis dolor doloremque corrupti impedit odio cum, sed quam deserunt ipsam quia consequuntur perspiciatis repudiandae voluptatibus.',
		canPurchase: false,
		soldOut: false
	}

	var gems=[
		{
			name:'Dodecahedron',
			imagen: 'public/img/dod.png',
			price: 2.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae velit ducimus, consequatur id animi facilis dolor doloremque corrupti impedit odio cum, sed quam deserunt ipsam quia consequuntur perspiciatis repudiandae voluptatibus.',
			canPurchase: false,
			soldOut: false
		},

		{	name:'Zirconium',
			imagen: 'public/img/zir.png',
			price: 3.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae velit ducimus, consequatur id animi facilis dolor doloremque corrupti impedit odio cum, sed quam deserunt ipsam quia consequuntur perspiciatis repudiandae voluptatibus.',
			canPurchase: false,
			soldOut: false
		},

		{	name:'Hexagonal Gem',
			imagen: 'public/img/hex.png',
			price: 4.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae velit ducimus, consequatur id animi facilis dolor doloremque corrupti impedit odio cum, sed quam deserunt ipsam quia consequuntur perspiciatis repudiandae voluptatibus.',
			canPurchase: false,
			soldOut: false
		},

		{
			name:'Diamante',
			imagen: 'public/img/diam.png',
			price: 4.30,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae velit ducimus, consequatur id animi facilis dolor doloremque corrupti impedit odio cum, sed quam deserunt ipsam quia consequuntur perspiciatis repudiandae voluptatibus.',
			canPurchase: false,
			soldOut: false
		},

		{	name:'Rubi',
			imagen: 'public/img/rubi.png',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae velit ducimus, consequatur id animi facilis dolor doloremque corrupti impedit odio cum, sed quam deserunt ipsam quia consequuntur perspiciatis repudiandae voluptatibus.',
			canPurchase: false,
			soldOut: false
		},

		{	name:'Esmeralda',
			imagen: 'public/img/esmeralda.png',
			price: 6.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae velit ducimus, consequatur id animi facilis dolor doloremque corrupti impedit odio cum, sed quam deserunt ipsam quia consequuntur perspiciatis repudiandae voluptatibus.',
			canPurchase: false,
			soldOut: false
		},

			{
			name:'Jade',
			imagen: 'public/img/jade.png',
			price: 2.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae velit ducimus, consequatur id animi facilis dolor doloremque corrupti impedit odio cum, sed quam deserunt ipsam quia consequuntur perspiciatis repudiandae voluptatibus.',
			canPurchase: false,
			soldOut: false
		},

		{	name:'Turquesa',
			imagen: 'public/img/turquesa.png',
			price: 1.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae velit ducimus, consequatur id animi facilis dolor doloremque corrupti impedit odio cum, sed quam deserunt ipsam quia consequuntur perspiciatis repudiandae voluptatibus.',
			canPurchase: false,
			soldOut: false
		},

		{	name:'Topacio',
			imagen: 'public/img/topacio.png',
			price: 1.50,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae velit ducimus, consequatur id animi facilis dolor doloremque corrupti impedit odio cum, sed quam deserunt ipsam quia consequuntur perspiciatis repudiandae voluptatibus.',
			canPurchase: false,
			soldOut: false
		}
	];

	app.controller('StoreController', function(){
		this.products =gems;
	});

})();