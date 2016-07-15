module.exports=function(grunt){

grunt.initConfig({
	pkg:grunt.file.readJSON('package.json'),
	concat:{
		options:{
			separator:';\n'
		},
		dist:{
			src:['app/**/*.js'],
			dest:'build/<%= pkg.name %>.js'
		}
	},
	uglify:{
		options :{
			banner:'/*!<%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %>*/\n'
		},
		build:{
			src:'<%= concat.dist.dest %>',
			dest:'build/<%= pkg.name %>.min.js'
		}		
	},
	jshint:{
	files:['Gruntfile.js','app/**/*.js'],
		options:{
			//options to override JSHint defaults
		},
	},
	watch:{
		files:['<%= jshint.files%>'],
		tasks:['jshint']
	}
});
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default',['jshint','concat','uglify']);
};