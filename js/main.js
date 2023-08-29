let serial = 0;
//! card-1 
document.getElementById("triangle-btn").addEventListener("click", function(){
	// get the data from html using id
	serial += 1;
	const geometryName = document.getElementById("triangle").innerText;
	const base = document.getElementById("base-input").value;
	const height = document.getElementById("height-input").value;
	if (base <= 0 || height <= 0 || base == "" || height == "") {
		return alert("Please enter any valid number")
	}
	validationNumberInTriangle();

	const area = 0.5 * parseFloat(base) * parseFloat(height);
 displayData(geometryName, area);
 disabledButton("triangle-btn")
});

//! card-2 
document.getElementById("rectangle-btn").addEventListener("click", function(){
	// get the data from html using id
	serial += 1;
	const geometryName = document.getElementById("rectangle").innerText;
	const width = document.getElementById("width-input").value;
	const length = document.getElementById("length-input").value;
	if (width <= 0 || length <= 0 || width == "" || length == "") {
		return alert("Please enter any valid number")
	}
	validationNumberInRectangle();

	const area = parseFloat(width) * parseFloat(length);
 displayData(geometryName, area);
 disabledButton("rectangle-btn");
});

// ! card-3
document.getElementById("parallelogram-btn").addEventListener("click", function(){
	// get the data from html using id
	serial += 1;
	const geometryName = document.getElementById("parallelogram").innerText;
	const base = document.getElementById("parallelogram-base-input").value;
	const height = document.getElementById("parallelogram-height-input").value;
	if (base <= 0 || height <= 0 || base == "" || height == "") {
		return alert("Please enter any valid number")
	}
	const area = 0.5 * parseFloat(base) * parseFloat(height);
 displayData(geometryName, area);
 disabledButton("parallelogram-btn");
});

// ! card-4
document.getElementById("rhombus-btn").addEventListener("click", function(){
	// get the data from html using id
	serial += 1;
	const geometryName = document.getElementById("rhombus").innerText;
	const d1 = document.getElementById("d1").value;
	const d2 = document.getElementById("d2").value;
	if (d1 <= 0 || d2 <= 0 || d1 == "" || d2 == "") {
		return alert("Please enter any valid number")
	}
	const area = 0.5 * parseFloat(d1) * parseFloat(d2);
 displayData(geometryName, area);
 disabledButton("rhombus-btn")
});

// ! card-5
document.getElementById("pentagon-btn").addEventListener("click", function(){
	// get the data from html using id
	serial += 1;
	const geometryName = document.getElementById("pentagon").innerText;
	const side = document.getElementById("side-input").value;
	const apothem = document.getElementById("apothem-input").value;
	if (side <= 0 || apothem <= 0 || side == "" || apothem == "") {
		return alert("Please enter any valid number")
	}
	const area = 5/2 * parseFloat(side) * parseFloat(apothem);
 displayData(geometryName, area);
 disabledButton("pentagon-btn");
});

// ! card-6
document.getElementById("ellipse-btn").addEventListener("click", function(){
	// get the data from html using id
	serial += 1;
	const geometryName = document.getElementById("ellipse").innerText;
	const a = document.getElementById("a").value;
	const b = document.getElementById("b").value;
	if (a <= 0 || b <= 0 || a == "" || b == "") {
		return alert("Please enter any valid number")
	}
	const area = 3.14 * parseFloat(a) * parseFloat(b);
 displayData(geometryName, area);
 disabledButton("ellipse-btn");
});









//! common function to display the Data 
function displayData(geometryName, area){
	const tableContainer = document.getElementById("table-container");
	const tr = document.createElement("tr");
	tr.innerHTML = `
		<td>${serial}.</td>
		<td>${geometryName}</td>
		<td>${area.toFixed(2)}cm<sup>2</sup></td>
		<td>
			<button class="btn btn-xs btn-info text-white normal-case">Convert to m<sup>2</sup></button>
		</td>

	`;
	tableContainer.appendChild(tr);
};


//! function disable button 
function disabledButton(id) {
    document.getElementById(id).setAttribute("disabled", true);
};

// !function of validation data for card-1 or triangle
function validationNumberInTriangle() {
	const base = document.getElementById("base-input").value;
	const height = document.getElementById("height-input").value;
	
	if(isNaN(base)){
		alert("Please enter a valid number");
		return false;
	}
	if(isNaN(height)){
		alert("Please enter a valid number");
		return false;
	}
	
};
// !function of validation data for card-2 or rectangle
function validationNumberInRectangle() {
	const width = document.getElementById("width-input").value;
	const length = document.getElementById("length-input").value;
	
	if(isNaN(width)){
		alert("Please enter a valid number");
		return false;
	}
	if(isNaN(length)){
		alert("Please enter a valid number");
		return false;
	}
	
};

// !card random color
function randomColor() {
	let color = [];
	for (let i = 0; i < 3; i++) {
	  color.push(Math.floor(Math.random() * 256));
	}
	return 'rgb(' + color.join(', ') + ')';
  };

  function card1Bg() {
	document.body.children[1].children[0].children[0].children[0].style.background = randomColor();
  };
  function card2Bg() {
	document.body.children[1].children[0].children[0].children[1].style.background = randomColor();
  };
  function card3Bg() {
	document.body.children[1].children[0].children[0].children[2].style.background = randomColor();
  };
  function card4Bg() {
	document.body.children[1].children[0].children[0].children[3].style.background = randomColor();
  };
  function card5Bg() {
	document.body.children[1].children[0].children[0].children[4].style.background = randomColor();
  };
  function card6Bg() {
	document.body.children[1].children[0].children[0].children[5].style.background = randomColor();
  };
