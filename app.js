
// get elements
const blockEl = document.getElementById('block');
const verticalPosition = document.getElementById('position-y')
const horizontalPosition = document.getElementById('position-x')
const blockSize = document.getElementById('size')
const shapeSelector = document.getElementById('shape-select')
const okbtn = document.getElementById('ok-btn')
const rgbaRed = document.getElementById('rgba-r')
const rgbaGreen = document.getElementById('rgba-g')
const rgbaBlue = document.getElementById('rgba-b')
const rgbaAlpha = document.getElementById('rgba-a')
const rgbaContainer = document.querySelector('.rgba-container')
console.log(rgbaContainer);
const rgbaInputs = rgbaContainer.querySelectorAll('input')
console.log(rgbaInputs);





// Vertical Position Changer
verticalPosition.addEventListener('change', function() {
    blockEl.style.top = verticalPosition.value + 'px'
})

// Horizontal Position Changer
horizontalPosition.addEventListener('change', function() {
    blockEl.style.left = horizontalPosition.value + 'px'
})







// Size Changer
blockSize.addEventListener('change', function() {
    blockEl.style.transform = `scale(${blockSize.value})`
})








// Shape Changer
okbtn.addEventListener('click', function() {
    let shapeOption = shapeSelector.value
    if(shapeOption === '1') {
        blockEl.style.borderRadius = '0'
    } else if(shapeOption === '2') {
        blockEl.style.borderRadius = '50%'
    }
})







// Background Color Changer
for(let i =0; i<rgbaInputs.length; i++) {
    const element = rgbaInputs[i];
    // console.log(element);
    element.addEventListener('change', function() {
        // console.log('true');
        blockEl.style.backgroundColor = `rgba(${rgbaRed.value},${rgbaGreen.value},${rgbaGreen.value},${rgbaAlpha.value})`
    })
}
