Ionic Commands:

Start the server:
	Ionic serve
Start the server on android device(plugged in) with console log output:
	Ionic cordova run android --livereload -cs

how to add a new page:
	import the project in app.module.ts
		add the page in the decleration as well
		add the page to the entryComponent
	import the project in app.component.ts
		in app.component.ts add the new page to the pages array

how to get data from server to ionic		
	make php webservice that takes post and get requests that query the database and return
	JSON objects of the data.