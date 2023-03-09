define(['jquery', 'jquery-ui', 'Ui/App', '@tyler.thayn/js.core', 'jQuery', 'Observers'], ($) => {

	function Config (cfg) {
		if (typeof cfg === 'string') {
			return fetch(cfg).then(res => res.json())
		} else {
			return new Promise((resolve, reject) => {
				resolve(cfg)
			})
		}
	}

	return (config = 'app.json') => {
		return new Promise((resolve, reject) => {
			Config(config).then(config => {
				let app = window.app = new $.App(config)
				$.extend({app: app})
				app.$e.on('ready', () => {
					resolve($)
				})
			})
		})
	}

})
