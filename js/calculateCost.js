//Calculate Cost

document.addEventListener("DOMContentLoaded", function () {
    function InfoKitchen() {
        infoKitchenBorder.style.backgroundColor = "#BDD002";
        infoKitchen.style.backgroundColor = "#BDD002";
        infoKitchen.style.color = "#2B2929";

    }

    function InfoKitchenEndFocus() {
        infoKitchenBorder.style.backgroundColor = "#2B2929";
        infoKitchen.style.backgroundColor = "#2B2929";

    }

    let infoKitchenBorder = document.getElementById('infoKitchenBorder');
    let infoKitchen = document.getElementById('infoKitchen');

    if (typeof infoKitchen == 'object') {
        infoKitchen.addEventListener('click', InfoKitchen);
    }
    if (typeof infoKitchen == 'object') {
        infoKitchen.addEventListener('blur', InfoKitchenEndFocus);
    }

    var calculateCostSend = document.getElementById('calculateCostSend');
    var parametersTitleSecond = document.getElementById('parametersTitleSecond');
    var calculateCostTitle = document.getElementById('calculateCostTitle');
    var calculateCostParameters = document.getElementById('calculateCostParameters');
    var arrayMobileFirst = document.getElementById('arrayMobileFirst');
    var arrayMobileSecond = document.getElementById('arrayMobileSecond');
    var arrayMobileSecondImg = document.getElementById('arrayMobileSecondImg');
    var arrayBackMobileFirstImg = document.getElementById('arrayBackMobileFirstImg');
    var arrayBackMobileSecondImg = document.getElementById('arrayBackMobileSecondImg');
    var arrayMobileFree = document.getElementById('arrayMobileFree');
    var arrayBackFirstMobileImg = document.getElementById('arrayBackFirstMobileImg');

    function CalculateCostMobile(e) {

        if (e.target.id == "arrayMobileFirst") {
            None([calculateCostTitle, calculateCostParameters, arrayMobileFirst]);
            parametersTitleSecond.style.display = "block";
            infoKitchenBorder.style.display = "block";
            arrayMobileSecond.style.display = "flex";
        }

        if (e.target.id == "arrayMobileSecondImg") {
            None([parametersTitleSecond, infoKitchenBorder, arrayMobileSecond]);
            calculateCostSend.style.display = "block";
            arrayMobileFree.style.display = "flex";
        }

        if (e.target.id == "arrayBackMobileFirstImg") {
            None([parametersTitleSecond, infoKitchenBorder, arrayMobileSecond]);
            calculateCostTitle.style.display = "block";
            calculateCostParameters.style.display = "block";
            arrayMobileFirst.style.display = "block";
            arrayMobileFirst.style.display = "flex";
        }

        if (e.target.id == "arrayBackMobileSecondImg") {
            None([calculateCostSend, arrayMobileFree]);
            parametersTitleSecond.style.display = "block";
            infoKitchenBorder.style.display = "block";
            arrayMobileSecond.style.display = "flex";
        }
        if (e.target.id == "arrayBackFirstMobileImg") {
            None([calculateCostSend, arrayMobileFree]);
            calculateCostTitle.style.display = "block";
            calculateCostParameters.style.display = "block";
            arrayMobileFirst.style.display = "block";
            arrayMobileFirst.style.display = "flex";
        }
    }

    if (typeof arrayMobileFirst == 'object') {
        arrayMobileFirst.addEventListener('click', CalculateCostMobile);
    }
    if (typeof arrayMobileSecondImg == 'object') {
        arrayMobileSecondImg.addEventListener('click', CalculateCostMobile);
    }
    if (typeof arrayBackMobileFirstImg == 'object') {
        arrayBackMobileFirstImg.addEventListener('click', CalculateCostMobile);
    }
    if (typeof arrayBackMobileSecondImg == 'object') {
        arrayBackMobileSecondImg.addEventListener('click', CalculateCostMobile);
    }
    if (typeof arrayBackFirstMobileImg == 'object') {
        arrayBackFirstMobileImg.addEventListener('click', CalculateCostMobile);
    }
   
});
