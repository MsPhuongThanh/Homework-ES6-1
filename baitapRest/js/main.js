function dom(id){
    return document.querySelector(id)
}

const averageScore = (...num)=>{
    console.log(num);
    let nums = 0;
    return (num.map((num)=>{
        nums += parseFloat(num)
    }),
    (nums / num.length).toFixed(2))
}

/* Khối 1 */
dom('#btnKhoi1').addEventListener('click', ()=>{
    const MathScore = dom('#inpToan').value;
    const PhysicsScore = dom('#inpLy').value;
    const ChemistryScore = dom('#inpHoa').value;
    dom('#tbKhoi1').innerHTML = averageScore(MathScore, PhysicsScore, ChemistryScore)
})

/* Khối 2 */

dom('#btnKhoi2').addEventListener('click', ()=>{
    const LiteratureScore = dom('#inpVan').value;
    const HistoryScore = dom('#inpSu').value;
    const GeographyScore = dom('#inpDia').value;
    const EnglishScore = dom('#inpEnglish').value;
    dom('#tbKhoi2').innerHTML = averageScore(LiteratureScore, HistoryScore, GeographyScore, EnglishScore)
})

