module.exports = function(grunt){
	grunt.initConfig({
		clean: {
			options: {force: true},
			all: {
				src: ['../App_Built"/**/*.*']
			}
		},
		ngAnnotate: {
            all: {
		        files: [{
		            expand: true,
                    cwd: '../App',
                    src: ['**/*.js*/'],
                    dest: ['../App_Built/'],
                    ext: '.js'
		        }]
		    }
		}	    
	});

	grunt.registerTask('default', ['clean', 'ngAnnotate']);

	grunt.loadNpmTasks('grunt-contrib-clean');    
	grunt.loadNpmTasks('grunt-ng-annotate');
};
