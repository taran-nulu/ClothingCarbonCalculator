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
    const material = document.getElementById("material").value; 
    
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

    var CarbonReleased = 0;

    if (clothingType == "Shirt") {
        if (material == "Cotton"){
            CarbonReleased = fabricUsed * 4.15;
        }
        else if (material == "Wool"){
            CarbonReleased = fabricUsed * 6.945;
        }
        else if (material == "Silk"){
            CarbonReleased = fabricUsed * 3.815;
        }
        else if (material == "Leather"){
            CarbonReleased = fabricUsed * 17;
        }else if (clothingType == "Denim") {
            CarbonReleased = fabricUsed * 5.235;
    }
    }
    else if (clothingType == "Pants"){
        if (material == "Cotton"){
                CarbonReleased = fabricUsed * 4.15;
            }
            else if (material == "Wool"){
                CarbonReleased = fabricUsed * 6.945;
            }
            else if (material == "Silk"){
                CarbonReleased = fabricUsed * 3.815;
            }
            else if (material == "Leather"){
                CarbonReleased = fabricUsed * 17;
            }else if (clothingType == "Denim") {
                CarbonReleased = fabricUsed * 5.235;
        }
    }
    else if(clothingType == "Socks"){
        if (material == "Cotton"){
                CarbonReleased = fabricUsed * 4.15;
            }
            else if (material == "Wool"){
                CarbonReleased = fabricUsed * 6.945;
            }
            else if (material == "Silk"){
                CarbonReleased = fabricUsed * 3.815;
            }
            else if (material == "Leather"){
                CarbonReleased = fabricUsed * 17;
            }else if (clothingType == "Denim") {
                CarbonReleased = fabricUsed * 5.235;
        }
    }
    document.getElementById("Output1").textContent = CarbonReleased.toFixed(7);
}