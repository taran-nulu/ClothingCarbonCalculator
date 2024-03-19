// function VarStore() {
//     var f1 = document.getElementById("A1").classList.toggle("show");
//     alert(document.getElementById("A1").selectedIndex);
//     var container = document.getElementById('A1');
//     var numberOfDivs = container.children.length;
//     var length = container.childNodes.length;
// alert(length);
// }


document.getElementById("calculate-btn").addEventListener("click", function() {
    var clothingType = document.getElementById("clothing-type").value;
    var size = document.getElementById("size").value;
    var material = document.getElementById("material").value;

    
    var co2Emissions = calculateCarbonFootprint(clothingType, size);

   
});
function calculateCarbonFootprint(clothingType, size, material) {
    var fabricUsed = translate(clothingType, size);
    var co2Emissions = calculate(fabricUsed, clothingType);
    return co2Emissions;
}


function displaySelection() {
    const clothingType = document.getElementById("clothing-type").value;
    const size = document.getElementById("size").value;
    //if ()
    const selectedValues = `You selected ${size} ${clothingType}.`;
    //document.getElementById("selected-values").textContent = selectedValues;
    //alert(selectedValues);

    var fabricUsed = 0;
    if (clothingType == "Shirt" && size == "XS") {
        fabricUsed = 1.15;
    }
    if (clothingType == "Shirt" && size == "S") {
        fabricUsed = 1.6;
    }
    if (clothingType == "Shirt" && size == "M") {
        fabricUsed = 2.05;
    }
    if (clothingType == "Shirt" && size == "L") {
        fabricUsed = 2.5;
    }
    if (clothingType == "Shirt" && size == "XL") {
        fabricUsed = 2.95;
    }
    if (clothingType == "Pants" && size == "XS") {
        fabricUsed = 1.15;
    }
    if (clothingType == "Pants" && size == "S") {
        fabricUsed = 1.6;
    }
    if (clothingType == "Pants" && size == "M") {
        fabricUsed = 1.85;
    }
    if (clothingType == "Pants" && size == "L") {
        fabricUsed = 2.25;
    }
    if (clothingType == "Pants" && size == "XL") {
        fabricUsed = 2.75;
    }
    if (clothingType == "Socks" && size == "XS") {
        fabricUsed = 0.09;
    }
    if (clothingType == "Socks" && size == "S") {
        fabricUsed = 0.18;
    }
    if (clothingType == "Socks" && size == "M") {
        fabricUsed = 0.27;
    }
    if (clothingType == "Socks" && size == "L") {
        fabricUsed = 0.36;
    }
    if (clothingType == "Socks" && size == "XL") {
        fabricUsed = 0.45;
    }
    //alert (fabricUsed);


//function calculate(fabricUsed, clothingType) {
    var CarbonReleased = 0;
    if (clothingType == "Shirt") {
        CarbonReleased = ((fabricUsed * 0.65) * 3.2) + ((fabricUsed * 0.35) * 4.15);
    } else if (clothingType == "Pants") {
        CarbonReleased = fabricUsed * 5.235;
    }
    //alert(CarbonReleased);
    document.getElementById("Output1").textContent = CarbonReleased.toFixed(2);
    //return CarbonReleased;
}

function print(){
    document.getElementById("test").innerHTML = clothingType;
}
