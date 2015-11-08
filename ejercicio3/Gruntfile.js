'use strict';

module.exports = function(grunt) {

    // Configuración del proyecto
    grunt.initConfig({
	// incluye la configuración
	pkg: grunt.file.readJSON('package.json'),
	docco: {
	    src: ['*.js'],
	    options: {
		output: 'docs/'
	    }
	},
	shell: {
	    options: {
		stderr: false
            },
            db: {
		command: 'sqlite3 porrio.db.sqlite3 < porrio.sql'
            },
	    clean: {
		command: 'rm porrio.db.sqlite3'
            },
	    // para probar el despliegue
	    puts: {
		command: 'curl -X PUT http://localhost:5000/porra/Copa-Del-Rey/2015/Betis/Sevilla; curl -X PUT http://localhost:5000/apuesta/Angel/Copa-Del-Rey/2015/Betis/3/Sevilla/0, curl -X PUT http://localhost:5000/apuesta/Pepe/Copa-Del-Rey/2015/Betis/1/Sevilla/0, curl -X PUT http://localhost:5000/porra/Atleti/Barcelona/Champion/2003'
	    }
	}
    });

    // Carga el plugin de grunt para hacer esto
    grunt.loadNpmTasks('grunt-docco');
    grunt.loadNpmTasks('grunt-shell');

    // Tarea por omisión: generar la documentación
    grunt.registerTask('default', ['docco']);

    // Otras tareas
    grunt.registerTask('creadb', ['shell:db']);
    grunt.registerTask('borradb', ['shell:clean']);
    grunt.registerTask('put', ['shell:puts']);
};
