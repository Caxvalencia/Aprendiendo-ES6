var gulp  = require( 'gulp' ),
	babelify   = require( 'babelify' ),
	browserify = require( 'browserify' ),
	buffer     = require( 'vinyl-buffer' ),
	source     = require( 'vinyl-source-stream' );

gulp.task( 'build:js', function() {
	return browserify({
		entries: [ 'src/app.js' ],
		transform: [ babelify.configure({
			presets: [ 'es2015' ]
		}) ]
	}).bundle()
		.pipe( source( 'app.js' ) )
		.pipe( buffer() )
		.pipe( gulp.dest( 'build/' ) );
});