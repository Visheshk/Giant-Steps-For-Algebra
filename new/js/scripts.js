var segment, path, green = 0;

var controls = new Layer(); 

var hitOptions = {
    segments: false,
    stroke: false,
    fill: true,
    tolerance: 15
};

//universal locations and sizes
var metersize = 50;
var GSsize = null;
var circSize = 12;
var height = 400;
//

//Buttons: For red, green, Layer 1, and Layer 2
controls.activate();

var back = new Raster('bg');
back.position = new Point(525, 350);
back.opacity = 0.4;
back.scale(0.25);

var cornerSize = new Size(20, 20);

// Giant steps / meters
var tlGSMx = 500;
var tlGSMy = 600;

/*var rectangle2 = new Rectangle(new Point(tlGSMx, tlGSMy), new Point(tlGSMx + 100, tlGSMy + 50));
var rec2 = new Path.RoundRectangle(rectangle2, cornerSize);
rec2.name = 'red';
rec2.fillColor = 'red';
var text = new PointText(new Point(tlGSMx + 15, tlGSMy + 30));
text.name = 'tred';
text.fillColor = 'white';
text.content = 'Giant Steps';

var rectangle = new Rectangle(new Point(tlGSMx, tlGSMy + 50), new Point(tlGSMx + 100, tlGSMy + 100));
var rec1 = new Path.RoundRectangle(rectangle, cornerSize);
rec1.name = 'green';
rec1.fillColor = 'green';
var text = new PointText(new Point(tlGSMx + 20, tlGSMy + 80));
text.name = 'tgreen';
text.fillColor = 'white';
text.content = 'Meters';*/
//

//Days 1 and 2
var tlDaysx = 500, tlDaysy = 600;

var l1 = new Rectangle(new Point(tlDaysx, tlDaysy), new Point(tlDaysx + 100, tlDaysy + 50));
var lay1 = new Path.RoundRectangle(l1, cornerSize);
lay1.name = 'lay1';
lay1.fillColor = '#cccccc';
var text = new PointText(new Point(tlDaysx + 20, tlDaysy + 30));
text.name = 'tlay1';
text.fillColor = 'black';
text.content = 'Day 1';

var l2 = new Rectangle(new Point(tlDaysx, tlDaysy + 50), new Point(tlDaysx + 100, tlDaysy + 100));
var lay2 = new Path.RoundRectangle(l2, cornerSize);
lay2.name = 'lay2';
lay2.fillColor = '#aaaaaa';
var text = new PointText(new Point(tlDaysx + 20, tlDaysy + 80));
text.name = 'tlay2';
text.fillColor = 'black';
text.content = 'Day 2';
//

//Undo and clear
var tlEdx = 625, tlEdy = 600;

var un = new Rectangle(new Point(tlEdx, tlEdy), new Point(tlEdx + 100, tlEdy + 50));
var undo = new Path.RoundRectangle(un, cornerSize);
undo.name = 'undo';
undo.fillColor = '#aabbcc';
var text = new PointText(new Point(tlEdx + 20, tlEdy + 30));
text.name = 'tundo';
text.fillColor = 'black';
text.content = 'Remove';

var cl = new Rectangle(new Point(tlEdx, tlEdy + 50), new Point(tlEdx + 100, tlEdy + 100));
var clr = new Path.RoundRectangle(cl, cornerSize);
clr.name = 'clr';
clr.fillColor = '#ccbbaa';
var text = new PointText(new Point(tlEdx + 20, tlEdy + 80));
text.name = 'tclr';
text.fillColor = 'black';
text.content = 'Clear All';
//


var start = new Point(180, height);
var circ = new Path.Circle(start, circSize);
circ.strokeColor = 'black';
circ.fillColor = 'grey';
circ.name = 'start';
var flag = new Raster('flag');
var flsize = new Point(23, -50);
flag.position = start + flsize;

var end = new Point(570, 250);
var flag2 = new Raster('tbox');
var flsize = new Point(23, -50);
flag2.position = end;

var endC = new Path.RegularPolygon(end, 4, 55);
endC.fillColor = 'brown';
endC.strokeColor = 'gold';
endC.opacity = 0.1;

var tlCornX = 750; var tlCornY = 600;

	//rectangle
	var metNum = 0;
	var met = new Rectangle(new Point(tlCornX, tlCornY), new Point(tlCornX + 100, tlCornY + 50));
	var meter = new Path.RoundRectangle(met, cornerSize - new Point(15,15));
	meter.name = 'meter';
	meter.fillColor = '#00ee00';

	//text
	var mtext = new PointText(new Point(tlCornX + 40, tlCornY + 30));
	mtext.name = 'meter';
	mtext.fillColor = 'black';
	mtext.content = 'M';
	
	//triangles
	var center = new Point(tlCornX + 35, tlCornY + 80);
	var sides = 3;
	var radius = 30;
	var triangle = new Path.RegularPolygon(center, sides, radius);
	triangle.fillColor = 'white';
	triangle.strokeColor = 'black';
	triangle.rotate(30);
	triangle.name = 'metMinus';
	var tri2 = triangle.clone();
	tri2.name = 'metPlus';
	tri2.rotate(60);
	tri2.translate(new Point(40, -7));
	

	var metControls = new Group();	
	metControls.addChild(triangle);
	metControls.addChild(tri2);
	

	//+ and - symbol on the triangles
	var text = new PointText(new Point(tlCornX + 26, tlCornY + 82));
	text.name = 'minues';
	text.fillColor = 'black';
	text.content = '-';

	var text = new PointText(new Point(tlCornX + 62, tlCornY + 82));
	text.name = 'plus';
	text.fillColor = 'black';
	text.content = '+';

//


var gsCornX = 875; var gsCornY = 600;

	//rectangle
	var gsNum = 0;
	var gs = new Rectangle(new Point(gsCornX, gsCornY), new Point(gsCornX + 100, gsCornY + 50));
	var giantS = new Path.RoundRectangle(gs, cornerSize - new Point(15,15));
	giantS.name = 'giantS';
	giantS.fillColor = '#ee0000';

	//text
	var gstext = new PointText(new Point(gsCornX + 40, gsCornY + 30));
	gstext.name = 'giantS';
	gstext.fillColor = 'black';
	gstext.content = 'G';
	
	//triangles
	var gcenter = new Point(gsCornX + 35, gsCornY + 80);
	var triangle2 = new Path.RegularPolygon(gcenter, sides, radius); //sides and radius defined earlier in meter controls
	triangle2.fillColor = 'white';
	triangle2.strokeColor = 'black';
	triangle2.rotate(30);
	triangle2.name = 'gsMinus';
	var tri3 = triangle2.clone();
	tri3.name = 'gsPlus';
	tri3.rotate(60);
	tri3.translate(new Point(40, -7));
	

	var gsControls = new Group();	
	gsControls.addChild(triangle2);
	gsControls.addChild(tri3);
	

	//+ and - symbol on the triangles
	var text = new PointText(new Point(gsCornX + 26, gsCornY + 82));
	text.name = 'gminus';
	text.fillColor = 'black';
	text.content = '-';

	var text = new PointText(new Point(gsCornX + 62, gsCornY + 82));
	text.name = 'gplus';
	text.fillColor = 'black';
	text.content = '+';



//



//Interaction controls over



var pt1 = new Point(200,150), pt2 = new Point(300,50), pt3 = new Point(400, 150), move = new Point(0, 200);
var blued = new RgbColor(0.105, 0.376, 0.878), greend = new RgbColor(0.2, 1.0, 0.2), redd = new RgbColor(0.988, 0.447, 0.447);

var lstyle = {
	strokeColor: blued,
	strokeWidth: 10,
	strokeCap: 'round'
}

var gstyle = {
	strokeColor: greend,
	strokeWidth: 3,
	strokeCap: 'round'
}
var rstyle = {
	strokeColor: redd,
	strokeWidth: 6,
	strokeCap: 'round'
}

var layer1 = new Layer(), layer2 = new Layer();
project.l1 = layer1;
project.l2 = layer2;

//Layer 1 stuff
	layer1.activate();
	var lines1 = new Group();
	var curves1 = new Group();
	var circles1 = new Group();


	curves1.dashArray = [10,4];

	layer1.curves = curves1;
	layer1.circles = circles1;
	layer1.lines = lines1;

//Layer 1 stuff over

//Layer 2 stuff
	layer2.activate();
	var lines2 = new Group();
	var curves2 = new Group();
	var circles2 = new Group();
	
	layer2.curves = curves2;
	layer2.circles = circles2;
	layer2.lines = lines2;
//Layer 2 stuff over



var ind = 0, ind2 = 0, mover = 0, color = 'red', lp1 = null, lp2 = null;
var day = 1; dirn = 0;

controls.activate();
/*controls.children['green'].opacity = 0.4;
controls.children['tgreen'].fillColor = 'grey';*/
controls.children['lay2'].opacity = 0.4;
controls.children['tlay2'].fillColor = 'grey';

layer2.opacity = 0.4;
layer1.activate();

layer1.lp = lp1;
layer2.lp = lp2;

controls.selected = false;

$('#scale').change(function(evt) { 
        view.zoom = evt.target.valueAsNumber; 
        rounded =  Math.round(view.zoom * 100)/ 100;
        document.getElementById('zoomVal').innerHTML = rounded;
});



function Setup(lay){
	lay.activate();
	if(lay == layer1)
		day = 1;
	else if (lay == layer2)
		day = 2;
	//setting up initialized last point
	var circ1  = new Path.Circle(controls.children['start'].position, circSize);
	circ1.fillColor = 'grey';
	circ1.strokeColor = 'black';
	lay.circles.addChild(circ1);
	lay.lp = controls.children['start'].position;
	GSsize = null;
	metersize = 50;
}

Setup(layer1);
Setup(layer2);

layer1.activate();
day = 1;

function zom(dir){
	view.zoom += (dir * 0.1);
}

function activateMeter(){
	color = 'green';
	controls.children['red'].opacity = 0.4;
	controls.children['tred'].fillColor = 'grey';
	controls.children['green'].opacity = 1;
	controls.children['tgreen'].fillColor = 'white';
}

function activateGS(){
	color = 'red';
	controls.children['red'].opacity = 1;
	controls.children['tred'].fillColor = 'white';
	controls.children['green'].opacity = 0.4;
	controls.children['tgreen'].fillColor = 'grey';
}

function day1(){
	layer1.activate();
	layer1.moveAbove(layer2);
	
	color = 'red';
	/*controls.children['red'].opacity = 1;
	controls.children['tred'].fillColor = 'white';
	controls.children['green'].opacity = 0.4;
	controls.children['tgreen'].fillColor = 'grey';*/
	
	layer1.opacity = 1;
	layer2.opacity = 0.4;
	controls.children['lay1'].opacity = 1;
	controls.children['tlay1'].fillColor = 'black';
	controls.children['lay2'].opacity = 0.4;
	controls.children['tlay2'].fillColor = 'grey';
}

function day2(){
	layer2.activate();
	layer2.moveAbove(layer1);
	
	color = 'red';
	/*controls.children['red'].opacity = 1;
	controls.children['tred'].fillColor = 'white';
	controls.children['green'].opacity = 0.4;
	controls.children['tgreen'].fillColor = 'grey';*/
	
	layer2.opacity = 1;
	layer1.opacity = 0.4;
	
	controls.children['lay2'].opacity = 1;
	controls.children['tlay2'].fillColor = 'black';
	controls.children['lay1'].opacity = 0.4;
	controls.children['tlay1'].fillColor = 'grey';
}


function toggleDraw(){
	if (color == 'red'){
		activateMeter();
	}
	else if (color == 'green'){
		activateGS();
	}
}

function toggleDay(){
	if (project.activeLayer == layer1){
		day2();
	}
	else if (project.activeLayer == layer2){
		day1();
	}
}

function Undo(){
	
	if(!project.activeLayer.curves.lastChild.remove()){
		project.activeLayer.curves.children[project.activeLayer.curves.children.length - 1].remove();
	} 
	
	console.log(project.activeLayer.curves.children.length);
	
	if(project.activeLayer.circles.lastChild != null){
		project.activeLayer.circles.lastChild.removeSegments();
		project.activeLayer.circles.lastChild.remove();
	}
	
	if(project.activeLayer.lines){
		project.activeLayer.lines.lastChild.remove();
	}
	
	if (project.activeLayer.circles.lastChild == null){
		console.log('Circles nulled');
		Setup(project.activeLayer);
	}
	console.log(project.activeLayer.lp);
}

function Clear(){
	if(layer2 == project.activeLayer){
		layer1.curves.removeChildren(0);
		layer1.circles.removeChildren(0);
		layer1.lines.removeChildren(0);
		layer1.lp = null;
		Setup(layer1);
		layer2.curves.removeChildren(0);
		layer2.circles.removeChildren(0);
		layer2.lines.removeChildren(0);
		layer2.lp = null;
		Setup(layer2);
	}
	if(layer1 == project.activeLayer){
		layer2.curves.removeChildren(0);
		layer2.circles.removeChildren(0);
		layer2.lines.removeChildren(0);
		layer2.lp = null;
		Setup(layer2);
		layer1.curves.removeChildren(0);
		layer1.circles.removeChildren(0);
		layer1.lines.removeChildren(0);
		layer1.lp = null;
		Setup(layer1);
	}
	
}

globals.Clear = Clear;


function computeCurve(pt1, pt2, lr){
	var gap = pt1 - pt2; //pt1 is axisPoint, pt2 is lastPoint i.e. pt1 is the point ahead/to the right
	if (pt1.x < pt2.x){
		gap *= -1;
//		console.log('inverting', gap);
	}	
	if (lr == layer2){
		gap *= -1;
//		console.log('layer inverting', gap);
	}
		
	gap.angle -= 90;
	
	gap /= 2;
	var midp = new Point((pt1 + pt2)/2);
	return (midp + gap);
}

function drawArc(event){
	//arc should be made if click is not on active layer, layer 3, or on anything
	
	//make the arc
		
	var curves = project.activeLayer.curves;
	var circles = project.activeLayer.circles;
	var lines = project.activeLayer.lines;
	
	if(circles.hasChildren()){
		project.activeLayer.lp = new Point(circles.lastChild.position);
		console.log(project.activeLayer.lp);
	}
	

	//find direction first
	//go to draw meter if the color is green
	//else draw giant step appropriately
	var dir = 1;
	var lastPoint = project.activeLayer.lp;
	console.log(event.point);
	dir = ((event.point.x < lastPoint.x) ? -1 : 1);
	
	if(color == 'green') //shifting to meter drawing
		drawMeter(dir);
	else{
		if(GSsize == null){
			GSsize = event.point.x - lastPoint.x;
		}
		drawGS(dir);
	}
}

function updateLine(index, position){
	var lines = project.activeLayer.lines;
	lines.children[index].removeSegments(1);
	lines.children[index].addSegment(position);
}

function changeMeter(obj){
	//if the right triangle, add one value to metNum, and update the text in mtext.content
	if(obj.name == 'metPlus'){
		metNum += 1;
		mtext.content = metNum + ' M';
	}
	else if (obj.name == 'metMinus'){
		metNum -= 1;
		mtext.content = metNum + ' M';
	}		
}

function drawMeters(){
	var num = metNum;
	if (metNum < 0){
		while (metNum < 0){
			drawMeter(-1);
			metNum += 1;
		}
	}
	else if (metNum > 0){
		while (metNum > 0){
			drawMeter(1);
			metNum -= 1;
		}
	}
	//metNum = num;
	metNum = 0;
	mtext.content = metNum + ' M';
}

function drawMeter(dir){
		var curves = project.activeLayer.curves;
		var circles = project.activeLayer.circles;
		var lines = project.activeLayer.lines;
	
		if(circles.hasChildren()){
			project.activeLayer.lp = new Point(circles.lastChild.position);
		}	
			
		if (project.activeLayer.lp){
			var lastPoint = project.activeLayer.lp;
			var back = new Point(dir * metersize,0);
			eventpoint = lastPoint + back;
			var pointBw = new Point(computeCurve(eventpoint, lastPoint, project.activeLayer));
			var ncurve = new Path.Arc(lastPoint, pointBw, eventpoint);
			
			ncurve.style = gstyle;
			//ncurve.strokeColor = 'green';
			curves.addChild(ncurve);
		}
		else{
			project.activeLayer.lp = new Point(eventpoint);
		}
	//update lastPoint
	//lastPoint = event.point;
	
	//make the circle
	circle = new Path.Circle(eventpoint, circSize);
	circle.strokeColor = 'black';
	circle.fillColor = 'grey';
	//circle.name = 'green';
	if (dir == -1){
		circle.name = 'greenl';
	}
	else if (dir == 1) {
		circle.name = 'greenr';
	}
	circles.addChild(circle);
	
	line = new Path.Line(circles.lastChild.previousSibling.position, circles.lastChild.position);
	line.style = lstyle;
	lines.addChild(line);

	path = circles.lastChild;
	ind = circles.lastChild.index;
	path.selected = true;
}


function changeGS(obj){
	//if the right triangle, add one value to metNum, and update the text in mtext.content
	if(obj.name == 'gsPlus'){
		gsNum += 1;
		gstext.content = gsNum + ' G';
	}
	else if (obj.name == 'gsMinus'){
		gsNum -= 1;
		gstext.content = gsNum + ' G';
	}
}

function drawGSes(){
	var num = gsNum;
	if (gsNum < 0){
		while (gsNum < 0){
			drawGS(-1);
			gsNum += 1;
		}
	}
	else if (gsNum > 0){
		while (gsNum > 0){
			drawGS(1);
			gsNum -= 1;
		}
	}
	//gsNum = num;
	gsNum = 0;
	gstext.content = gsNum + ' G';
}

function drawGS(dir){
	var curves = project.activeLayer.curves;
	var circles = project.activeLayer.circles;
	var lines = project.activeLayer.lines;
	var lastPoint = project.activeLayer.lp;
	//console.log(dir);
	
	if (project.activeLayer.lp){
		lastPoint = circles.lastChild.position;
			
			// todo --
			// some accounting needs to be done, so that if a click is on the right of a circle, and the GSsize is negative, the new step comes to the right, rather than back which is left
			
		if(GSsize == null){
			GSsize = 100;
		}
		
		if(GSsize < 0){
			GSsize *= -1;
		}

		var axisPoint = new Point(lastPoint.x + (dir * GSsize), height); //point on axis, located ahead or back, at giant step gap.
		var pointBw = new Point(computeCurve(axisPoint, lastPoint, project.activeLayer)); //point Between
		var ncurve = new Path.Arc(lastPoint, pointBw, axisPoint);
		
		ncurve.style = rstyle;
	
		curves.addChild(ncurve);
	}
	else{
		//project.activeLayer.lp = new Point(axisPoint);
		Setup(project.activeLayer);
	}

	//make the circle
	circle = new Path.Circle(axisPoint, circSize);
	circle.strokeColor = 'black';
	circle.fillColor = 'grey';
	circle.name = (dir == -1)?'rback' : 'rfw';
	
	circles.addChild(circle);

	var line = new Path.Line(circles.lastChild.previousSibling.position, circles.lastChild.position);
	line.style = lstyle;
	lines.addChild(line);

	path = circles.lastChild;
	ind = circles.lastChild.index;
	path.selected = true;	
}

function redraw(layer){
	layer.activate();
	var circles = layer.circles;
	var curves = layer.curves;
	var lines = layer.lines;
	
	var i = 1;
	while(i <= circles.lastChild.index){
		//ith curve is redrawn forward, and i+1th curve is reversed and redrawn
		if (circles.children[i].name == 'greenr'){
			circles.children[i].position.x = circles.children[i - 1].position.x + metersize;
			//console.log('greenr', GSsize, circles.children[i].position.x, circles.children[i - 1].position.x);
		}
		else if (circles.children[i].name == 'greenl'){
			circles.children[i].position.x = circles.children[i - 1].position.x - metersize;
			//console.log('greenl', GSsize, circles.children[i].position.x, circles.children[i - 1].position.x);
		}
		else if (circles.children[i].name == 'rfw'){
			circles.children[i].position.x = circles.children[i - 1].position.x + GSsize;
			//console.log('rfw', GSsize, circles.children[i].position.x, circles.children[i - 1].position.x);
		}
		else if (circles.children[i].name == 'rback'){
			circles.children[i].position.x = circles.children[i - 1].position.x - GSsize;
			//console.log('rback', GSsize, circles.children[i].position.x, circles.children[i - 1].position.x);
		}
		
		curves.children[i - 1].removeSegments(1);
		var newp = new Point(computeCurve(circles.children[i - 1].position, circles.children[i].position, project.activeLayer));
       	curves.children[i - 1].arcTo(newp, circles.children[i].position);
       	updateLine(i - 1, circles.children[i].position);
       	
       	if(i < circles.lastChild.index){
	       	curves.children[i].reverse();
	       	curves.children[i].removeSegments(1);
			var newp = new Point(computeCurve(circles.children[i].position, circles.children[i - 1].position, project.activeLayer));
	       	curves.children[i].arcTo(newp, circles.children[i].position);
	       	curves.children[i].reverse();
	       	
	       	lines.children[i].reverse();
	       	updateLine(i, circles.children[i].position);
	       	lines.children[i].reverse();
		}
		i += 1;
	}
}

function onMouseUp(event) {
	controls.selected = false;
	layer1.selected = false;
	layer2.selected = false;
	
}

function onMouseMove(event) {
	var hitResult = project.hitTest(event.point, hitOptions);
	project.activeLayer.selected = false;
	controls.selected = false;
	layer2.selected = false;
	document.body.style.cursor = 'auto';
	if (hitResult && hitResult.item && (hitResult.item.layer == project.activeLayer || hitResult.item.layer == controls)){
    	if(hitResult.item != flag){
	    	hitResult.item.selected = true;
	    	if(hitResult.item == endC){
	    		hitResult.item.selected = true;
	    		//document.body.style.cursor = 'move';
	    	}
    	}
    		
   		if (hitResult.item.layer != controls)
   			document.body.style.cursor = 'move';
	}
}


function onMouseDown(event) {
	/*curve.removeSegment(2);
	curve.insert(2, 375,150);
	circles1.children[1].remove();*/
	path = null;
	var hitResult = project.hitTest(event.point, hitOptions);
	if(hitResult){
		console.log(hitResult.item.name);
		if (hitResult.item.layer == project.activeLayer){
			path = hitResult.item;
			console.log(hitResult.type);
			ind = path.index;
			console.log(ind);
			path.selected = true;
		}

		else if(hitResult.item.layer == controls){
		
			if (hitResult.item.name == 'green'){
				color = 'green';
				controls.children['red'].opacity = 0.4;
				controls.children['tred'].fillColor = 'grey';
				controls.children['green'].opacity = 1;
				controls.children['tgreen'].fillColor = 'white';
				
			}
			else if (hitResult.item.name == 'red'){
				color = 'red';
				controls.children['red'].opacity = 1;
				controls.children['tred'].fillColor = 'white';
				controls.children['green'].opacity = 0.4;
				controls.children['tgreen'].fillColor = 'grey';
			}
			else if (hitResult.item.name == 'lay1' && project.activeLayer != layer1){
				layer1.activate();
				layer1.moveAbove(layer2);
				
				color = 'red';
				/*controls.children['red'].opacity = 1;
				controls.children['tred'].fillColor = 'white';
				controls.children['green'].opacity = 0.4;
				controls.children['tgreen'].fillColor = 'grey';*/
				
				layer1.opacity = 1;
				layer2.opacity = 0.4;
				controls.children['lay1'].opacity = 1;
				controls.children['tlay1'].fillColor = 'black';
				controls.children['lay2'].opacity = 0.4;
				controls.children['tlay2'].fillColor = 'grey';
				
			}
			else if (hitResult.item.name == 'lay2' && project.activeLayer != layer2){
				layer2.activate();
				console.log('Layer 2 activated');
				layer2.moveAbove(layer1);
				
				color = 'red';
				/*controls.children['red'].opacity = 1;
				controls.children['tred'].fillColor = 'white';
				controls.children['green'].opacity = 0.4;
				controls.children['tgreen'].fillColor = 'grey';*/
				
				layer2.opacity = 1;
				layer1.opacity = 0.4;
				
				controls.children['lay2'].opacity = 1;
				controls.children['tlay2'].fillColor = 'black';
				controls.children['lay1'].opacity = 0.4;
				controls.children['tlay1'].fillColor = 'grey';
			}
			else if (hitResult.item.name == 'undo'){
				Undo();
			}
			else if (hitResult.item.name == 'clr'){
				Clear();
			}

			else if (hitResult.item == endC){
				path = hitResult.item;
			}
			
			else if (hitResult.item.name == 'meterleft'){
				drawMeter(-1);
			}
			
			else if(hitResult.item.name == 'meterright'){
				drawMeter(1);
			}
			
			else if (hitResult.item.name == 'start'){
				//console.log('Start');
				//path = hitResult.item;
				
			}
			else if (hitResult.item.name == 'zoomin'){
				zom(1);
			}
			else if (hitResult.item.name == 'zoomout'){
				zom(-1);
			}
			else if (hitResult.item.isParent(metControls)){
				changeMeter(hitResult.item);
			}
			else if(hitResult.item.name == 'meter'){
				drawMeters();
			}
			else if (hitResult.item.isParent(gsControls)){
				changeGS(hitResult.item);
			}
			else if(hitResult.item.name == 'giantS'){
				drawGSes();
			}
			
			
		}
		
		else
			//if(event.event.detail > 1)
				drawArc(event);
		
	}
	else
		//if(event.event.detail > 1)
			drawArc(event);
}

function onMouseDrag(event) {
    if (path && path.name != 'start' && path != endC){
	    var activeLayer = project.activeLayer;
    	var dir = 1;
    	//var gap = GSsize;
    	
    	if (path.name == 'rback' || path.name == 'rfw'){
	        //path.position.x += event.delta.x;
	        //GSsize = path.position.x - path.previousSibling.position.x + event.delta.x;
	        
	        if(path.name == 'rback'){
	        	//GSsize *= -1;
	        	dir = -1;
	        }
	        
	        GSsize += (dir * event.delta.x);
	        //console.log(GSsize);
	        redraw(layer1);
	        redraw(layer2);
	    }
	    activeLayer.activate();
	    
	    //The next two check, that if the meter circles have been moved significantly, their orientation will change. 
	    
	    // > The new thing, will then, translate everything ahead accordingly, and not redraw any curves
	    
        /*else if(path.name == 'greenr'){
        	if(event.point.x < (path.position.x - 50)){
	        		path.position -= new Point((2 * metersize), 0);
	        		path.name = 'greenl';
	        		
	        		
	        		
			        var gap = new Point(-metersize, 0);
			        
					if (project.activeLayer == layer1){
						gap *= -1;
					}
			        
			        gap.angle -= 90;
					gap /= 2;
					var midp = new Point(path.position.x + metersize, height);
					var newp = new Point(midp + gap);
					curves.children[ind - 1].removeSegments(1);
					curves.children[ind - 1].arcTo(newp, path.position);
					updateLine(ind - 1, path.position);
	        		
		        	var checkAhead = ind;
		        	var nextCircle;
			        nextCircle = circles.children[checkAhead].nextSibling;

			        while(nextCircle && checkAhead <= circles.lastChild.index){
				        nextCircle.position.x -= (2 * metersize);
						curves.children[checkAhead].translate(new Point((-2 * metersize), 0));
						lines.children[checkAhead].translate(new Point((-2 * metersize), 0));
				        checkAhead += 1;
				        nextCircle = circles.children[checkAhead].nextSibling;
				    }
	        	
			    }
        }
        
	    else if(path.name == 'greenl'){
	    
        	if(event.point.x > path.position.x + 150){ 
        		path.position += new Point((2 * metersize), 0);
        		path.name = 'greenr';
        		//var lastPoint = new Point(curves.children[ind - 1].firstSegment.getPoint());		        
	        	//var gap = path.position - lastPoint;
		        var gap = new Point(metersize, 0);
				if (project.activeLayer == layer2){
					gap *= -1;
				}
		        
		        gap.angle -= 90;
				gap /= 2;
				var midp = new Point(path.position.x - 50, height);
				var newp = new Point(midp + gap);
				curves.children[ind - 1].removeSegments(1);
				curves.children[ind - 1].arcTo(newp, path.position);
				updateLine(ind - 1, path.position);
        		
	        	var checkAhead = ind;
	        	var nextCircle;
		        nextCircle = circles.children[checkAhead].nextSibling;

		        while(nextCircle && checkAhead <= circles.lastChild.index){
			        nextCircle.position.x += 2 * metersize;
					curves.children[checkAhead].translate(new Point((2 * metersize), 0));
					lines.children[checkAhead].translate(new Point((2 * metersize), 0));
			        checkAhead += 1;
			        nextCircle = circles.children[checkAhead].nextSibling;
			    }
			}
	    }*/
    }
    else if(path && path == endC){
	    path.position += event.delta;
	    flag2.position += event.delta;	    
    }
    

}
