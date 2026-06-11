let wide = window.innerWidth;
let tall = window.innerHeight;
let dimX;
let dimY;
let num = 0;
if (tall/wide <= 0.5625){
	dimX = window.innerHeight / 0.5625;
	dimY = window.innerHeight;
} else {
	dimX = window.innerWidth;
	dimY = 0.5625 * window.innerWidth;
}


await Canvas(dimX, dimY);
let bg = await loadImage('room.png');

// walls

let wall = new Group();
wall.fill = ("#fee8ff")
wall.stroke = ("#FFFFFF");
wall.strokeWeight = (0);
//wall.physics = ("static");
let leftWall = new wall.Sprite ([
	[-width/3.55, -height/2.88],
	[-width/3.55, height/3.78],
	[-width/2, height/2],
	[-width/2, -height/1.72],
	[-width/3.55, -height/2.88]
])
let rightWall = new wall.Sprite ([
	[width/3.51, -height/2.88],
	[width/2, -height/1.707],
	[width/2, height/2],
	[width/3.5, height/3.78],
	[width/3.51, -height/2.88]
])

let middleWall = new wall.Sprite ([
	[-width/3.55, -height/2.88],
	[width/3.51, -height/2.88],
	[width/3.5, height/3.78],
	[-width/3.5, height/3.78],
	[-width/3.55, -height/2.88]
])



// ceiling 
let ceiling = new Sprite ([
	[-width/3.55, -height/2.88],
	[width/3.51, -height/2.88],
	[width/2, -height/1.707],
	[-width/2, -height/1.72],
	[-width/3.55, -height/2.88]
])
ceiling.fill = ("#62d1eb")
ceiling.stroke = ("#FFFFFF");
ceiling.strokeWeight = (0);
//ceiling.physics = ("static");



// floor 
let floor = new Sprite ([
	[width/2, height/2],
	[width/3.5, height/3.78],
	[-width/3.5, height/3.78],
	[-width/2, height/2],
	[width/2, height/2]
])
floor.fill = ("#77080a")
floor.stroke = ("#FFFFFF");
floor.strokeWeight = (0);
//walls.physics = ("static");


// leftWindow
let leftWindow = new Sprite ([
	[width/-4.39, height/-3.75],
	[width/-39, height/-3.75],
	[width/-39, height/-230],
	[width/-4.39, height/-230],
	[width/-4.39, height/-3.75]
])
leftWindow.fill = ("#26df77")
leftWindow.stroke = ("#FFFFFF");
leftWindow.strokeWeight = (0);
//walls.physics = ("static");

// rightWindow
let rightWindow = new Sprite ([
	[width/4.38, height/-3.75],
	[width/38, height/-3.75],
	[width/38, height/-230],
	[width/4.38, height/-230],
	[width/4.38, height/-3.75]
])
rightWindow.fill = ("#dce343")
rightWindow.stroke = ("#FFFFFF");
rightWindow.strokeWeight = (0);
//rightWindow.physics = ("static");


// flag 
let flag = new Sprite ([
	[width/-3.333, height/-3.35],
	[width/-3.333, height/21.2],
	[width/-2.222, height/11.1],
	[width/-2.222, height/-2.325],
	[width/-3.333, height/-3.35]
]);
flag.fill = ("#baa8de")
flag.stroke = ("#FFFFFF");
flag.strokeWeight = (0);
//flag.physics = ("static");


// door 
let door = new Sprite ([
	[width/2.565, height/2.65],
	[width/2.565, height/-3.05],
	[width/2.13, height/-2.575],
	[width/2.13, height/2.16],
	[width/2.565, height/2.65]
]);
door.fill = ("#b28de9")
door.stroke = ("#FFFFFF");
door.strokeWeight = (0);
//door.physics = ("static");


// bedspread
let bedspread = new Sprite ([
	[width/19.3, height/7.7],
	[width/14.2, height/5.07],
	[width/14.2, height/3.88],
	[width/-2.53, height/3.88],
	[width/-2.53, height/5.07],
	[width/-3.54, height/7.7],
	[width/19.3, height/7.7]
])
bedspread.fill = ("#b2d9f5")
bedspread.stroke = ("#ffffff");
bedspread.strokeWeight = (0);
//bedspread.physics = ("static");


// leftDrawer
let leftDrawer = new Sprite ([
	[width/-4.13, height/2.59],
	[width/-4.13, height/3.88],
	[width/-11.6, height/3.88],
	[width/-11.6, height/2.59],
	[width/-4.13, height/2.59]
])
leftDrawer.fill = ("#613b0a")
leftDrawer.stroke = ("#FFFFFF");
leftDrawer.strokeWeight = (0);
//leftDrawer.physics = ("static");


// rightDrawer
let rightDrawer = new Sprite ([
	[width/14.3, height/2.59],
	[width/14.3, height/3.88],
	[width/-11.6, height/3.88],
	[width/-11.6, height/2.59],
	[width/14.3, height/2.59]
])
rightDrawer.fill = ("#613b0a")
rightDrawer.stroke = ("#FFFFFF");
rightDrawer.strokeWeight = (0);
//rightDrawer.physics = ("static");


// nightstand
let nightstand = new Sprite ([
	[width/-2.53, height/3.88],
	[width/-4.13, height/3.88],
	[width/-4.13, height/2.59],
	[width/-3.69, height/2.28],
	[width/-2.256, height/2.28],
	[width/-2.256, height/3.39],
	[width/-2.53, height/3.88]
])
nightstand.fill = ("#dac218")
nightstand.stroke = ("#FFFFFF");
nightstand.strokeWeight = (0);
//nightstand.physics = ("static");


// book
let book = new Sprite ([
	[width/-3.065, height/3.55],
	[width/-3.065, height/3.71],
	[width/-3.22, height/3.94],
	[width/-3.91, height/3.94],
	[width/-3.91, height/3.72],
	[width/-3.74, height/3.54],
	[width/-3.065, height/3.55]
])
book.fill = ("#c20b0a")
book.stroke = ("#FFFFFF");
book.strokeWeight = (0);
//book.physics = ("static");


// desk 
let desk = new Sprite ([
	[width/2.707, height/6.96],
	[width/2.707, height/4.93],
	[width/3.89, height/4.93],
	[width/5.05, height/6.79],
	[width/5.05, height/10],
	[width/3.50, height/10],
	[width/2.707, height/6.96]
])
desk.fill = ("#86cdac")
desk.stroke = ("#FFFFFF");
desk.strokeWeight = (0);
//desk.physics = ("static");


// computer1
let computer = new Group();
computer.fill = ("#fcb8aa")
computer.stroke = ("#FFFFFF");
computer.strokeWeight = (0);
//computer.physics = ("static");
let computer1 = new computer.Sprite ([
	[width/3.45, height/31.4],
	[width/3.18, height/26.6],
	[width/3.31, height/8.1],
	[width/3.58, height/9],
	[width/3.45, height/31.4]
])

let computer2 = new computer.Sprite ([
	[width/3.31, height/8.1],
	[width/3.90, height/8.1],
	[width/4.27, height/9],
	[width/3.58, height/9],
	[width/3.31, height/8.1]
])





// journal
let journal = new Sprite ([
	[width/3.13, height/8.98],
	[width/3.02, height/8.4],
	[width/3.02, height/7.29],
	[width/3.66, height/7.29],
	[width/3.82, height/7.79],
	[width/3.82, height/8.98],
	[width/3.13, height/8.98]
])
journal.fill = ("#c782ec")
journal.stroke = ("#FFFFFF");
journal.strokeWeight = (0);
//journal.physics = ("static");


// chair 
let chair1 = new Sprite ([
	[width/9.25, height/16.49],
	[width/7.85, height/12.76],
	[width/7.85, height/4.68],
	[width/9.25, height/5.55],
	[width/9.25, height/16.49]
])
chair1.fill = ("#0c1c82")
chair1.stroke = ("#FFFFFF");
chair1.strokeWeight = (0);
let chair2 = new Sprite ([
	[width/7.85, height/5.55],
	[width/5.87, height/5.55],
	[width/5.00, height/4.68],
	[width/7.85, height/4.68],
	[width/7.85, height/5.55]
])
chair2.fill = ("#0c1c82")
chair2.stroke = ("#FFFFFF");
chair2.strokeWeight = (0);
//chair.physics = ("static");                   


// dogBed
let dogBed = new Sprite ([
	[width/12.3, height/3.08],
	[width/4.03, height/3.08],
	[width/3.43, height/2.57],
	[width/3.43, height/2.22],
	[width/10.66, height/2.22],
	[width/12.3, height/2.62],
	[width/12.3, height/3.08]
])
dogBed.fill = ("#efaf79")
dogBed.stroke = ("#FFFFFF");
dogBed.strokeWeight = (0);
//dogBed.physics = ("static");


//light
let light = new Sprite(0, height / -2.31);
light.scale.x = 1.5;
light.scale.y = 0.5;
light.d = width / 12;   // diameter
light.scale.x = 1.5;    // wider
light.scale.y = 0.5;    // shorter
light.fill = ("#FFFFFF")
light.stroke = ("#FFFFFF");
//light.strokeWeight = (1);
//light.physics = ("static");








allSprites.passes(allSprites);
allSprites.debug = true;
q5.update = function () {
	background('#1f9dad');
	image(bg, 0, 0, width, height);
	text('click to jump!', 0, -50);
	if (window.innerWidth !== wide || window.innerHeight !== tall) {
    	windowResized();
  	}

	for (let thing of things){
		if (mouse.pressed() && pointer.overlapping(thing)){
			num = things.indexOf(thing) + 1;
		} else if (pointer.overlapping(thing)){
			thing.scale = 1.05;
		} else {
			thing.scale = 1;
		}
	}
};


function windowResized() {
	wide = window.innerWidth;
  	tall = window.innerHeight;
	if (tall/wide <= 0.5625){
		dimX = window.innerHeight / 0.5625;
		dimY = window.innerHeight;
	} else {
		dimX = window.innerWidth;
		dimY = 0.5625 * window.innerWidth;
	}
	resizeCanvas(dimX, dimY);
}


let things = [
	leftWall,
	rightWall,
	middleWall,
	ceiling, 
	floor,
	leftWindow,
	rightWindow,
	flag,
	door,
	bedspread,
	leftDrawer,
	rightDrawer,
	nightstand,
	book,
	desk,
	computer1,
	journal,
	chair1,
	chair2,
	dogBed,
	light
];





// walls
// ceiling 
// floor 
// leftWindow
// rightWIndow
// flag 
// door
// bedspread
// leftDrawer
// rightDrawer
// nightstand
// book
// desk 
// computer1
// journal
// chair 
// dogBed
// light