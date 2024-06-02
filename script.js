//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeArticle(str)
{
    str=" "+str;
    str=str.toLowerCase();
    str=str.replaceAll(" the "," ");
    str=str.replaceAll(" a "," ")
    str=str.replaceAll(" an "," ")
    str=str.trim();
    return str;
}

bands.sort((a,b)=>{
    if(removeArticle(a)>removeArticle(b))
        return 1
    else return -1
})

//console.log(bands)
const ul = document.getElementById('band')
for(let t of bands)
    {
        const li =document.createElement('li')
        li.textContent = t;
        ul.append(li);
    }