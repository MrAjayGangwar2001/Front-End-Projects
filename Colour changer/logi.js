const colors=['red','green','yellow', 'blue', 'pink', 'grey', 'lightgreen']

function ChangeColor(){
    const colorIndex=parseInt(Math.random()*colors.length)
    document.body.style.background=colors[colorIndex];
}