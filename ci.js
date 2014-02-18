var queue = require('./queue'),
	msbuild = require('msbuild'),
	gitwin = require('gitwin');
	
var ci = function(){
	this.queue = queue;
	this.gitwin = gitwin;
	this.msbuild = msbuild;
	this.bitci = function(config){

	this.publish = function(callback){ 
		var _msbuild = new msbuild(callback);
		_msbuild.setConfig(config);		
		_msbuild.verbose = false;
		_msbuild.publish();
	 };
	this.build = function(callback){
		var _msbuild = new msbuild(callback);
		_msbuild.setConfig(config);		
		_msbuild.verbose = false;
		_msbuild.build();
	 };
	this.pull =  function(callback){
		var _gitwin = new gitwin(callback);
		_gitwin.path = (config.watchPath);
		_gitwin.verbose = true;
		_gitwin.pull();
	};
};
}

module.exports = new ci();



