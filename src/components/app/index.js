import { Component } from 'preact'
import { Router } from 'preact-router'

import './style'

import Home from 'async!../home'
import Credits from 'async!../credits'
import BeComeSponsor from 'async!../becomesponsor'
import SpeakerPresentation from 'async!../speaker-presentation'
import Schedule from 'async!../schedule'

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url
	}

	render() {
		return (
			<Router onChange={this.handleRoute}>
				<Home path="/" />
				<Credits path="/credits" />
				<BeComeSponsor path="/becomesponsor" />
				<SpeakerPresentation path="/speakers" />
				<Schedule path="/schedule" />
			</Router>
		)
	}
}
