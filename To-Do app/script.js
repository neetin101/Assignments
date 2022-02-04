const stats = [false];   //  true if crossed

const crosser = function (checkId) {
    document.getElementById(checkId).style.textDecoration = 'line-through';
}
const nonCrosser = function (checkId) {
    document.getElementById(checkId).style.textDecoration = 'none';
}

const Toggle = function (checkId) {
    if (stats[checkId]) {
        nonCrosser(checkId);
    }
    else {
        crosser(checkId);
    }
    stats[checkId] = !(stats[checkId]);
}

function addItem() {
    let txt = document.getElementById("cont").value;
    document.getElementById("cont").value = '';
    let newItem = `<input type="checkbox" onclick="Toggle(${stats.length})"><span id="${stats.length}">${txt}</span><br>`;
    stats.push(false);
    document.getElementById('items').innerHTML += newItem;
}

// $('#cont').keypress(function(event){
//     if(event.keyCode === 13){
//         $('#btn').click();
//     }
// })

document.getElementById('cont').addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('btn').click();
    }
});