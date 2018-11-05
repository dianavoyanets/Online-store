import "./styles/myapp.css";
import Session  from "models/Session";
// import User from "models/User";

import { JetApp, plugins } from "webix-jet";

const PAGES = {
	LOGIN: "/login",
	USER_PAGE: '/UserUserStartPage',
	ADMIN_PAGE: '/AdminStartPage'
}

export default class MyApp extends JetApp {
	constructor(config) {
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			debug 	: !PRODUCTION,
			start 	: "/UserStartPage"
		};

        super({ ...defaults, ...config });
		this.use(plugins.User, { model :  new Session() });

		this.attachEvent('app:guard', (url, view, nav) => {
			if(nav.url.length > 1) return;
			if (this.getService('user').getUser()) {
				// TODO ROLE 
				if (this.getService('user').getUser().login === 'admin') 
				{
					nav.redirect = PAGES.ADMIN_PAGE;
				}
			}
		}
	);
}
}


if (!BUILD_AS_MODULE) {
	var app = new MyApp();
	webix.ready(() => {	
		app.render();
	});
}