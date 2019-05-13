
var journeyStage = new Konva.Stage({
	container: 'Jornada',
	width: stageWidth,
	height: stageHeight
});

var scenesLayer = new Konva.Layer();

var scenes = new Array();

var X, Y, BoolClick = false;

var num;

var rect = new Konva.Rect({
	x: 0,
	y: 0,
	width: stageWidth,
	height: stageHeight
});

rect.on('click', function() {
	if(BoolClick){
		BoolClick = false;
	}
});

scenesLayer.add(rect);
scenesLayer.draw();

window.addSceneCircleInJourney = function (sceneNumber)
{
	var group = new Konva.Group({
		name: "" + sceneNumber,
		x: 50,
		y: 50,
		draggable: true,
		dragBoundFunc: function(pos){
			var newY;
			var newX;
			else
				newY = pos.y;
			else
				newX = pos.x;
			return{
				x: newX,
				y: newY
			};
		}
	});
	
	var circle = new Konva.Circle({
		radius: 15,
		stroke: 'black',
		strokeWidth: 1,
		fill: '#b9deff'
	});
	
	var text = new Konva.Text({
		fontSize: 15,
        fontFamily: 'Calibri',
        text: "" + sceneNumber,
        fill: 'black',
        x: -4,
        y: -7
	});

	group.add(circle).add(text);

	scenesLayer.add(group);
	scenesLayer.draw();

     

	group.on('click tap', function() {
					name: temp,



	
	//AddLink(scenesLayer);
}

/*var anim = new Konva.Animation(function(frame) {
		var arrow = findSuffix('2');
		if(arrow != null) {		
			var pointsArrow = arrow[0].points();
		    var pos = journeyStage.getPointerPosition();
			
			console.log(arrow[0].points());
			arrow[0].points(pointsArrow[0], pointsArrow[1], pos.x, pos.y); 
            scenesLayer.add(arrow);
			scenesLayer.draw();       
		}

    }, scenesLayer); */

function findSuffix(word){
	var shapes = journeyStage.find('Arrow');
	var temp = new Array();

	shapes.forEach(function(element, index, array) {
		if(element.name().endsWith(word))
			temp.push(element);
	})

	return temp;
}

window.removeSceneCircleFromJourney = function (sceneNumber)
{

	var groupToDestroy = journeyStage.find('.'+sceneNumber);

	var arrowToDestroy = findSuffix(''+sceneNumber);

	groupToDestroy.destroy();

	//scenes[sceneNumber-1].destroy();

	scenesLayer.draw();
}

journeyStage.add(scenesLayer);

/*
window.addArrayFromJourney = function(group)
{
	var layer = new Konva.Layer();

	var arrow = new Konva.Arrow({
		x: System.Windows.Forms.Cursor.Positon.x,
		y: System.Windows.Forms.Cursor.Positon.y,
		points: [x,y, x+20, y+20],
		pointerLength: 20,
		pointerWidth : 20,
		fill: 'black',
		stroke: 'black',
		strokeWidth: 4
	});

	// add the shape to the layer
	layer.add(arrow);

}
 */
