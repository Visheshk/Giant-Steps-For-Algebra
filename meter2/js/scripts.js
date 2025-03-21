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

var rectangle2 = new Rectangle(new Point(tlGSMx, tlGSMy), new Point(tlGSMx + 100, tlGSMy + 50));
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
text.content = 'Meters';
//

//Days 1 and 2
var tlDaysx = 625, tlDaysy = 600;

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
var tlEdx = 750, tlEdy = 600;

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

var tlCornX = 900; var tlCornY = 600;

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
controls.children['green'].opacity = 0.4;
controls.children['tgreen'].fillColor = 'grey';
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
	controls.children['red'].opacity = 1;
	controls.children['tred'].fillColor = 'white';
	controls.children['green'].opacity = 0.4;
	controls.children['tgreen'].fillColor = 'grey';
	
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
	controls.children['red'].opacity = 1;
	controls.children['tred'].fillColor = 'white';
	controls.children['green'].opacity = 0.4;
	controls.children['tgreen'].fillColor = 'grey';
	
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
globals.activateMeter = activateMeter;
globals.activateGS = activateGS;
globals.toggleDay = toggleDay;
globals.toggleDraw = toggleDraw;
globals.Undo = Undo;



function drawArc(event){
	//arc should be made if click is not on active layer, layer 3, or on anything
	//make the arc
	var curves = project.activeLayer.curves;
	var circles = project.activeLayer.circles;
	var lines = project.activeLayer.lines;
	
	if(circles.hasChildren()){
		project.activeLayer.lp = new Point(circles.lastChild.position);
	}
	
	var dir = 1;
	var lastPoint = project.activeLayer.lp;
	dir = ((event.point.x < lastPoint.x) ? -1 : 1);
	
	if(color == 'green') //shifting to meter drawing
		drawMeter(dir);
	else{
		var axisPoint = new Point(event.point.x, height);
		var gap = axisPoint - lastPoint;
		gap *= dir;
		if (project.activeLayer == layer2)
			gap *= -1;
		
		gap.angle -= 90;
		gap /= 2;
		var midp = new Point((lastPoint + axisPoint)/2);
		var ncurve = new Path.Arc(lastPoint, midp + gap, axisPoint);
		ncurve.style = rstyle;
		//ncurve.strokeColor = color;
		curves.addChild(ncurve);
	
		//make the circle
		circle = new Path.Circle(axisPoint, circSize);
		circle.strokeColor = 'black';
		circle.fillColor = 'grey';
		circle.name = color;
		
		circles.addChild(circle);
		var line = new Path.Line(circles.lastChild.previousSibling.position, circles.lastChild.position);
		line.style = lstyle;
		//line.strokeColor = color;
		lines.addChild(line);
		
	
		path = circles.lastChild;
		ind = circles.lastChild.index;
		path.selected = true;
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
		//using metNum, loop the drawing instructions, and change mtext.content back to M
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
	
			//eventpoint is to simulate click at calculated point

			var back = new Point(dir * metersize,0);
			
			eventpoint = lastPoint + back;
			
			var gap = eventpoint - lastPoint;
			if (eventpoint.x < lastPoint.x){
				gap *= -1;
			}
			
			if (project.activeLayer == layer2){
				gap *= -1;
			}
			//else
			//	var gap = lastPoint - event.point;
			console.log(eventpoint);
			gap.angle -= 90;
			gap /= 2;
			var midp = new Point((lastPoint + eventpoint)/2);
			var ncurve = new Path.Arc(lastPoint, midp + gap, eventpoint);
			
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
	var line = new Path.Line(circles.lastChild.previousSibling.position, circles.lastChild.position);
	line.style = lstyle;
	//line.strokeColor = color;
	lines.addChild(line);

	path = circles.lastChild;
	ind = circles.lastChild.index;
	path.selected = true;
	console.log(dir);
}


function onMouseMove(event) {
	var hitResult = project.hitTest(event.point, hitOptions);
	project.activeLayer.selected = false;
	controls.selected = false;
	layer2.selected = false;
	document.body.style.cursor = 'auto';
	if (hitResult && hitResult.item && (hitResult.item.layer == project.activeLayer || hitResult.item.layer == controls)){
    	hitResult.item.selected = true;
   		if (hitResult.item.layer != controls || hitResult.item == endC)
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
				activateMeter();
				
			}
			else if (hitResult.item.name == 'red'){
				activateGS();
			}
			else if (hitResult.item.name == 'lay1' && project.activeLayer != layer1){
				day1();
				
			}
			else if (hitResult.item.name == 'lay2' && project.activeLayer != layer2){
				day2();
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
			
			else if (hitResult.item.isParent(metControls)){
				changeMeter(hitResult.item);
			}
			
			else if(hitResult.item.name == 'meter'){
				drawMeters();
			}
			
			
		}
		
		else{
			console.log('Hitresult and nothing found');
			drawArc(event);
		}
	}
	else{
		drawArc(event);
		console.log('Nothing found');
	}
}

function onMouseDrag(event) {
    if (path && path.name != 'start' && path != endC){
    	var curves = project.activeLayer.curves;
    	var circles = project.activeLayer.circles;
    	var lines = project.activeLayer.lines;
    	
    	if (path.name == 'red'){
	        path.position.x += event.delta.x;
	        
	        if(ind > 0){
		        var lastPoint = new Point(circles.children[ind - 1].position);
		        var gap = path.position - lastPoint;
		        //else
		        //	var gap = lastPoint - path.position;
		        if (gap.x < 0)
			        gap *= -1;
				
				if (project.activeLayer == layer2)
					gap *= -1;
					
		        //console.log(gap);
		        gap.angle -= 90;
				gap /= 2;
				var midp = new Point((lastPoint + path.position)/2);
				var newp = new Point(midp + gap);
				curves.children[ind - 1].removeSegments(1);
				curves.children[ind - 1].arcTo(newp, path.position);
				updateLine(ind - 1, path.position);
		        //curves.selected = true;
	        }
	        if(curves.hasChildren()){
		        
		        var checkAhead = ind;
		        var nextCircle;
		        nextCircle = circles.children[checkAhead].nextSibling;

		        while(nextCircle && checkAhead <= circles.lastChild.index){
		        
   		        //console.log(checkAhead);
		        //if ((nextCircle = circles.children[checkAhead].nextSibling))
			        if(nextCircle.name == 'red'){
			        //console.log('entering this');
				        curves.children[checkAhead].reverse();
				        var lastPoint = new Point(curves.children[checkAhead].firstSegment.getPoint());
			        	var gap = circles.children[checkAhead].position - lastPoint;
			        	if (gap.x > 0)
					        gap *= -1;
						if (project.activeLayer == layer2)
							gap *= -1;
			            gap.angle -= 90;
						gap /= 2;
						var midp = new Point((lastPoint + circles.children[checkAhead].position)/2);
						var newp = new Point(midp - gap);
						curves.children[checkAhead].removeSegments(1);
						curves.children[checkAhead].arcTo(newp, circles.children[checkAhead].position);
			        	curves.children[checkAhead].reverse();
			        	lines.children[checkAhead].reverse();
			        	updateLine(checkAhead, circles.children[checkAhead].position);
			        	lines.children[checkAhead].reverse();
			        	break;
			        	
			        }
			        else{
				        nextCircle.position.x += event.delta.x;
						curves.children[checkAhead].translate(new Point(event.delta.x, 0));
						lines.children[checkAhead].translate(new Point(event.delta.x, 0));
					}
			        checkAhead += 1;
			        nextCircle = circles.children[checkAhead].nextSibling;
			    }
			}
	    
    	}
	    
        else if(path.name == 'greenr'){
        	if(event.point.x < path.position.x - 50){
	        		path.position -= new Point(2*metersize, 0);
	        		path.name = 'greenl';
			        var gap = new Point(metersize, 0);

					if (project.activeLayer == layer2)
						gap *= -1;

			        gap.angle -= 90;
					gap /= 2;
					var midp = new Point(path.position.x + (metersize/2), height);
					var newp = new Point(midp + gap);
					curves.children[ind - 1].removeSegments(1);
					curves.children[ind - 1].arcTo(newp, path.position);
					updateLine(ind - 1, path.position);
	        		
		        	var checkAhead = ind;
		        	var nextCircle;
			        nextCircle = circles.children[checkAhead].nextSibling;

			        while(nextCircle && checkAhead <= circles.lastChild.index){
				        if(nextCircle.name == 'red'){
					        curves.children[checkAhead].reverse();
			        	
					        var lastPoint = new Point(curves.children[checkAhead].firstSegment.getPoint());		        
				        	var gap = circles.children[checkAhead].position - lastPoint;
				        	if (gap.x > 0)
						        gap *= -1;
							if (project.activeLayer == layer2)
								gap *= -1;
				            gap.angle -= 90;
							gap /= 2;
							var midp = new Point((lastPoint + circles.children[checkAhead].position)/2);
							var newp = new Point(midp - gap);
							curves.children[checkAhead].removeSegments(1);
							curves.children[checkAhead].arcTo(newp, circles.children[checkAhead].position);
				        	curves.children[checkAhead].reverse();
				        	lines.children[checkAhead].reverse();
				        	updateLine(checkAhead, circles.children[checkAhead].position);
				        	lines.children[checkAhead].reverse();
				        	break;
				        }
				        else{
					        nextCircle.position.x -= 2*metersize;
							curves.children[checkAhead].translate(new Point(-2*metersize, 0));
							lines.children[checkAhead].translate(new Point(-2*metersize, 0));
				        }
				        checkAhead += 1;
				        nextCircle = circles.children[checkAhead].nextSibling;
				    }
	        	
			    }
        }
	    else if(path.name == 'greenl'){
	    
        	if(event.point.x > path.position.x + 50){
	        		path.position += new Point(2*metersize, 0);
	        		path.name = 'greenr';
	        		//var lastPoint = new Point(curves.children[ind - 1].firstSegment.getPoint());		        
		        	//var gap = path.position - lastPoint;
			        var gap = new Point(metersize, 0);
					if (project.activeLayer == layer2)
						gap *= -1;
			        gap.angle -= 90;
					gap /= 2;
					var midp = new Point(path.position.x - (metersize/2), height);
					var newp = new Point(midp + gap);
					curves.children[ind - 1].removeSegments(1);
					curves.children[ind - 1].arcTo(newp, path.position);
					updateLine(ind - 1, path.position);
	        		
		        	var checkAhead = ind;
		        	var nextCircle;
			        nextCircle = circles.children[checkAhead].nextSibling;

			        while(nextCircle && checkAhead <= circles.lastChild.index){
				        if(nextCircle.name == 'red'){
					        curves.children[checkAhead].reverse();
			        	
					        var lastPoint = new Point(curves.children[checkAhead].firstSegment.getPoint());		        
				        	var gap = circles.children[checkAhead].position - lastPoint;
				        	if (gap.x > 0)
						        gap *= -1;
							if (project.activeLayer == layer2)
								gap *= -1;
				            gap.angle -= 90;
							gap /= 2;
							var midp = new Point((lastPoint + circles.children[checkAhead].position)/2);
							var newp = new Point(midp - gap);
							curves.children[checkAhead].removeSegments(1);
							curves.children[checkAhead].arcTo(newp, circles.children[checkAhead].position);
				        	curves.children[checkAhead].reverse();
				        	lines.children[checkAhead].reverse();
				        	updateLine(checkAhead, circles.children[checkAhead].position);
				        	lines.children[checkAhead].reverse();
				        	break;
				        	
				        }
				        else{
					        nextCircle.position.x += 2*metersize;
							curves.children[checkAhead].translate(new Point(2*metersize, 0));
							lines.children[checkAhead].translate(new Point(2*metersize, 0));
				        }
				        checkAhead += 1;
				        nextCircle = circles.children[checkAhead].nextSibling;
				  }
	        	
			 }
	    }
    }

    else if (path && (path == endC)){
	    path.position += event.delta;
	    flag2.position += event.delta;
    }
  
}
