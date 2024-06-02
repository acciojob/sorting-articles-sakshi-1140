
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const makeCustomString = (str)=>{
    let newStr = '';
    str.trim().toLowerCase().split(' ').forEach(word=> {
        if (word !== 'a' && word !== 'an' && word !=='the')  newStr +=word+' ';
    })
    return newStr;
}

const sortedBands = bands.sort((band1,band2)=>{
    const slicedBand1 = makeCustomString(band1);
    const slicedBand2 = makeCustomString(band2); 
	if(slicedBand1 < slicedBand2) return -1;
	else return 1;
});

const ul = document.getElementById('bands');

sortedBands.forEach(band=>{
	const li = document.createElement('li');
    li.textContent = band;
	ul.appendChild(li);	
})