

document.getElementById('startSession').addEventListener('click', () => {

    document.getElementById('secondivision').setAttribute('style','opacity: 1');
    document.getElementById('firstdivision').setAttribute('style','opacity:0');
    document.getElementById('completedivision').setAttribute('style','display: flex; flex-direction: column-reverse');
    document.getElementById('startSession').setAttribute('style','opacity:1');
    document.getElementById('registerNewUser').setAttribute('style','opacity:0.5');


})


document.getElementById('registerNewUser').addEventListener('click', () => {

    document.getElementById('secondivision').setAttribute('style','opacity: 0');
    document.getElementById('firstdivision').setAttribute('style','opacity:1');
    document.getElementById('completedivision').setAttribute('style','display: flex; flex-direction: column');
    document.getElementById('startSession').setAttribute('style','opacity:0.5');
    document.getElementById('registerNewUser').setAttribute('style','opacity:1');
})


document.getElementById('changePassword').addEventListener('click' , ()=> {
    document.getElementById('completedivision').innerHTML = document.getElementById('thirddivision').innerHTML
})