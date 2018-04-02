/**
 * @name:  resolution url
 * @version : 1.0.0
 * @author : Aile
 * @github : https://github.com/ailewl/reURL/
 * @Explain site : https://ailewl.github.io/reURL/#/
 **/
function URLRes() {
	this.myUrl = this.getMyUrl();
	this.fromUrl = this.getFromUrl()
}
URLRes.prototype.getMyUrl = function() {
	var my = document.createElement('a');
	my.href = document.URL;
	return {
		url: my.href,
		hostname: my.hostname,
		path: my.pathname.replace(/^([^\/])/, '/$1'),
		query: my.search,
		hash: my.hash.replace('#', ''),
		params: (function() {
			var ret = {},
				seg = my.search.replace(/^\?/, '').split('&'),
				len = seg.length,
				i = 0,
				s;
			for(; i < len; i++) {
				if(!seg[i]) {
					continue;
				}
				s = seg[i].split('=');
				ret[s[0]] = s[1];
			}
			return ret;
		})()
	}
}
URLRes.prototype.getFromUrl = function() {
	var From = document.createElement('a');
	From.href = document.referrer;
	return {
		url: From.href,
		hostname: From.hostname,
		path: From.pathname.replace(/^([^\/])/, '/$1'),
		query: From.search,
		hash: From.hash.replace('#', ''),
		params: (function() {
			var ret = {},
				seg = From.search.replace(/^\?/, '').split('&'),
				len = seg.length,
				i = 0,
				s;
			for(; i < len; i++) {
				if(!seg[i]) {
					continue;
				}
				s = seg[i].split('=');
				ret[s[0]] = s[1];
			}
			return ret;
		})()
	}
}