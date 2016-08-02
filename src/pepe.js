export class Pepe {
	constructor( nombre = 'Pepe' ) {
		this._nombre = nombre;
	}

	set nombre( nombre ) { this._nombre = nombre; }
	get nombre() { return this._nombre; }
}