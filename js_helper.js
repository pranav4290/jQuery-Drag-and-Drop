var jsHelper = 
{
	lazyLoad : function (c, d) {
    for (var b = c.length, e = b, f = function () {
            if (!(this.readyState
            		&& this.readyState !== "complete"
            		&& this.readyState !== "loaded")) {
                this.onload = this.onreadystatechange = null;
                --e || d()
            }
        }, g = document.getElementsByTagName("head")[0], i = function (h) {
            var a = document.createElement("script");
            a.async = true;
            a.src = h;
            a.onload = a.onreadystatechange = f;
            g.appendChild(a)
        }; b;) i(c[--b])
	}
};