const chache_key = 'calculation_history';


// Fungsi tersebut akan kita gunakan di dalam if statement setiap fungsi transaksi pada localStorage.
function checkForStorage() {
    return typeof(Storage) !== "undefined";
}

function putHistory (data) {
    if(checkForStorage()){
        let historyData = null;
        if(localStorage.getItem(chache_key) === null) {
            historyData = [];
    } else {
        historyData = JSON.parse(localStorage.getItem(chache_key));
    }

    historyData.unshift(data);

if(historyData.length > 5){
    historyData.pop()
}

    localStorage.setItem(chache_key, JSON.stringify(historyData))
    }
}

function showHistory (){
    if(checkForStorage){
        return JSON.parse(localStorage.getItem(chache_key)) || [];
    } else {
        return[]
    }
}


// Agar data history muncul ketika website pertama kali dijalankan
function renderHistory() {
    const historyData = showHistory();
    let historyList = document.querySelector('#historyList');


    // selalu hapus konten HTML pada elemen historyList agar tidak menmpilkan data ganda

    historyList.innerHTML = "";

    for(let history of historyData) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + history.firstNumber + "</td>";
        row.innerHTML += "<td>" + history.operator + "</td>";
        row.innerHTML += "<td>" + history.secondNumber + "</td>";
        row.innerHTML += "<td>" + history.result + "</td>"


        historyList.appendChild(row);
    }
}

renderHistory();