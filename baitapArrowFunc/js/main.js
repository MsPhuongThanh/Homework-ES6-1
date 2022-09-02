const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

//  Đổi màu ngôi nhà 

window.changeColor = (color)=>{
    console.log('windowColor: ',color);
    const houseEle = document.getElementById("house");
    houseEle.className = "house " + color;

}

// Load danh sách ô màu lên UI :

const LoadColorList = () => {
    const colorListHtml =  colorList.reduce((result, color , index) =>{
        if(index == 0){
            return result += `
                <button class="color-button ${color} active" onclick="changeColor('${color}')"></button> 
            `
        }
        else {
            return result += `
                <button class="color-button ${color}"  onclick="changeColor('${color}')"></button> 
            `
        }
    }, "");
   
    document.getElementById("colorContainer").innerHTML = colorListHtml;
};
LoadColorList();

