import { Pepe } from './pepe';

let pepe = new Pepe( 'Pepe' );

if( pepe.nombre === 'Pepe' ) {
	let suma = ( a, b ) => a + b;
	console.log( suma( 1, 2 ) );
}

console.log( pepe.nombre );