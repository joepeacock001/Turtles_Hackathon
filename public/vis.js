

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

function pieChart()
{

var data = eval('('+generate()+')');
var sumTot=0;
var sumLost=0;
for (i in data)
{
	sumTot+=data[i]['totHives'];
	sumLost+=data[i]['numLost2014'];
}
var diff=sumTot-sumLost;
      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Type');
        data.addColumn('number', 'Hives');
        data.addRows([
          ['Lost', sumLost],
          ['Survived',diff]
          
        ]);

        // Set chart options
        var options = {'title':'Bee Death',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

   var p = document.createElement("div");
   p.innerHTML = '<div id="pie_div"/>'

}


function barGraph()
{
	


var data = eval('('+generate()+')');
var sumLost12=0;
var sumLost13=0;
var sumLost14=0;
for (i in data)
{
	sumTot+=data[i]['totHives'];
	sumLost14+=data[i]['numLost2014'];
	sumLost13+=data[i]['numLost2013'];
	sumLost12+=data[i]['numLost2012'];
}
      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Type');
        data.addColumn('number', 'Hives');
        data.addRows([
          ['2014', sumLost14],
          ['2013', sumLost13],
          ['2012', sumLost12]
          
        ]);

        // Set chart options
        var options = {'title':'Bee Deaths by Year',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

   var p = document.createElement("div");
   p.innerHTML = '<div id="bar_div"/>'


}