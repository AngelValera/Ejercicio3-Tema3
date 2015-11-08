var request = require('supertest'),
should = require('should'),
app = require('../app.js');

describe( "Crear porra", function() {
	it('should create', function (done) {
		request(app)
			.put('/porra/Betis/Sevilla/Copa/2015')
			.expect('Content-Type', /json/)
			.expect(200,done);
	});
});

describe( "Crear apuesta", function() {
	it('should create bet correctly', function (done) {
		request(app)
			.put('/apuesta/Angel/Copa/2015/Betis/2/Sevilla/2')
			.expect('Content-Type', /json/)
			.expect(200,done);
	});
});
