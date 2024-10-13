//range input
const rangevalue = document.querySelector(".slider-container .price-slider");
const rangeInputvalue = document.querySelectorAll(".range-input input");

//const gap
const priceGap = 300;

//Event listeners to the price input elements
const priceInputvalue = document.querySelectorAll(".price-input input");

for(let i = 0; i < priceInputvalue.length; i++){
    priceInputvalue[i].addEventListener("input", e => {
        let minp = parseInt(priceInputvalue[0].value); //string to int
        let maxp = parseInt(priceInputvalue[1].value); //string to int
        let diff = maxp - minp;

        //validating input
        if(minp < 0){
            alert("minimum price cannot be less than 0");
            priceInputvalue[0].value = 0;
            minp = 0;
        }
        if(maxp > 10000){
            alert("maximum price cannot be more than 10000");
            priceInputvalue[1].value = 0;
            maxp = 0;
        }
        if(minp > maxp - priceGap){
            priceInputvalue[0].value = maxp - priceGap;
            minp = maxp - priceGap;
            
            if(minp < 0){
                priceInputvalue[0].value = 0;
                minp = 0;
            }
        }

        //Price Gap check
        if(diff >= priceGap && maxp <= rangeInputvalue[1].max){
            if(e.target.className === "min-input"){
                rangeInputvalue[0].value= minp;
                let value1 = rangeInputvalue[0].max;
                rangevalue.style.left = `${(minp/value1)*100}%`;
            }
            else{
                rangeInputvalue[1].value= maxp;
                let value2 = rangeInputvalue[1].max;
                rangevalue.style.right = `${100 - (maxp/value2)*100}%`;
            }
        }
    });
    for(let i = 0; i < rangeInputvalue.length; i++){
        rangeInputvalue[i].addEventListener("input", e => {
            let minVal = parseInt(rangeInputvalue[0].value);
            let maxVal = parseInt(rangeInputvalue[1].value);
            let diff = maxVal - minVal;

            //Checking the Difference
            if(diff < priceGap){
                if(e.target.className === "min-range"){
                    rangeInputvalue[0].value = maxVal - priceGap;
                }
                else{
                    rangeInputvalue[1].value = minVal + priceGap;
                }
            }
            else{
                //Update priceinput
                priceInputvalue[0].value = minVal; 
                priceInputvalue[1].value = maxVal;
                rangevalue.style.left = `${(minVal / rangeInputvalue[0].max) * 100}%`; 
                rangevalue.style.right = `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`; 
            }
        });
    }
}