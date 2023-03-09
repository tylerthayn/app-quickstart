define(['App'], (Start) => {

	Start('app.json').then($ => {

		log(app)

	}).catch(log)


})
