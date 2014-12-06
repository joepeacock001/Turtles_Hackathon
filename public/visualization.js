//src="https://maps.googleapis.com/maps/api/js?libraries=visualization&sensor=true_or_false";
console.log("getting desperate");
function generate()
{
	var out = [];
	var result={
		zip:"",
		totHives:0,
		numLost2014:0,
		numLost2013:0,
		numLost2012:0,
		comments:""
	};

	function Result(zip,totHives, numLost2014,numLost2013, numLost2012, comments)
	{
		this.zip=zip;
		this.totHives=totHives;
		this.numLost2012=numLost2012;
		this.numLost2013=numLost2013;
		this.numLost2014=numLost2014;
		this.comments=comments;
	}

	for (i=0;i<1000;i++)
	{
		a=Math.round((Math.random()*99000 + 1000));
		b=Math.round(Math.random()*200);
		c=Math.round(Math.random()*b);
		d=Math.round(Math.random()*(b-c));
		e=Math.round(Math.random()*(b-(c+d)));
		var temp=new Result(a,b,c,d,e,"");
		out[i]=temp;
	}
	var obj=JSON.stringify(out);

	return obj;
}

function loadZips()
{
// 	var xhr;
// if (window.XMLHttpRequest) {
//     xhr = new XMLHttpRequest();
// } else if (window.ActiveXObject) {
//     xhr = new ActiveXObject("Microsoft.XMLHTTP");
// }

// xhr.onreadystatechange = function(){alert(xhr.responseText);};
// xhr.open("GET","zipcode.csv"); //assuming kgr.bss is plaintext
// xhr.send();
	console.log("here");
	var res = Baby.parse("zipcode.csv");
	console.log(res.data);

}

loadZips();


