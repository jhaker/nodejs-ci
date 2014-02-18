# ci
Continuous integration (CI)

### example
```
var ci = require('ci');

var app = new ci.bitci(
	{ 
		configuration: 	'your_app_configuration',
		publishProfile:	'your_app_publish_profile',
		sourcePath:		'c:/your_app_path/your_app.sln',
		watchPath :  		'c:/your_app_path'		
	}
);

ci.queue.add(app.pull);
ci.queue.add(app.build);
ci.queue.add(app.publish);

ci.queue.process();
console.log('starting\n\n');
```
