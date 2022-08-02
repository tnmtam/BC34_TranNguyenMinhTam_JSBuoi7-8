/**
 * Tạo array
 */
var listNumber = [];
/**
 * Lưu data vào mảng
 */
document.getElementById('btnAdd').onclick = function() {  
    var number = document.getElementById('number').value * 1;
    var content = "";
    listNumber.push(number);
    for(i = 0; i <listNumber.length; i++) {
        content += listNumber[i] + "  ";
    }
    
    document.getElementById('listNumber').innerHTML ="Dãy số đã thêm: " + content;
};

/**
 * 1. Tính tổng số dương
 */

document.getElementById('btn1').onclick = function() {
    if(listNumber.length === 0) {
        alert("Vui lòng thêm số!");
        return;
    }
    //input
    var tongDuong = 0;
    //process
    for(i = 0; i < listNumber.length; i++) {
        if(listNumber[i] >= 0) {
            tongDuong += listNumber[i];
        }
    }
    var result = "Tổng số dương là: " + tongDuong;
    //output
    document.getElementById('showInfor1').innerHTML = result;
    };

/**
 * 2. Đếm số dương
 */

document.getElementById('btn2').onclick = function() {
    if(listNumber.length === 0) {
        alert("Vui lòng thêm số!");
        return;
    }
    //input
    var countSoDuong = 0;
    //process
    for(i = 0; i <= listNumber.length; i++) {
        var show = listNumber[i];
        if(show > 0) {
            countSoDuong += 1; 
        }
    }
    //output
    document.getElementById('showInfor2').innerHTML = "Số dương: " + countSoDuong;
}

/**
 * 3. Tìm số nhỏ nhất
 */

document.querySelector('#btn3').onclick = function () {
    if(listNumber.length === 0) {
        alert("Vui lòng thêm số!");
        return;
    }
    //input
    var soMin = 0;
    var min = listNumber[0];
    //process
    for (var i = 0; i < listNumber.length; i++) {
        if(listNumber[i] < min) {
            min = listNumber[i];
            soMin = i;
        }
    }
    //output
    document.querySelector('#showInfor3').innerHTML = 'Số nhỏ nhất là: ' + listNumber[soMin];
}

/**
 * 4. Tìm số dương nhỏ nhất
 */

document.querySelector('#btn4').onclick = function () {
    if(listNumber.length === 0) {
        alert("Vui lòng thêm số!");
        return;
    }
    //input
    var soDuongMin = 0;
    var min = listNumber[0];
    //process
    for (var i = 0; i < listNumber.length; i++) {
        if(listNumber[i] > 0 && listNumber[i] < min) {
            min = listNumber[i];
            soDuongMin = i;
        }
    }
    //output
    document.querySelector('#showInfor4').innerHTML = 'Số dương nhỏ nhất: ' + listNumber[soDuongMin];
}

/**
 * 5. Tìm số chẵn cuối cùng
 */

document.querySelector('#btn5').onclick = function () {
    if(listNumber.length === 0) {
        alert("Vui lòng thêm số!");
        return;
    }
    //input
    var soChan = 0;
    var chan = listNumber[0];
    //process
    for (var i = 0; i < listNumber.length; i++) {
        if(listNumber[i] % 2 === 0) {
            chan = listNumber[i];
            soChan = i;
        }
    }
    //output
    document.querySelector('#showInfor5').innerHTML = 'Số chẵn cuối cùng: ' + listNumber[soChan];
}

/**
 * 6. Đổi chỗ
 */

document.querySelector('#btn6').onclick = function () {
    if(listNumber.length === 0) {
        alert("Vui lòng thêm số!");
        return;
    }
    //input
    var ip1 = document.getElementById('ip1'). value * 1;
    var ip2 = document.getElementById('ip2'). value * 1;
    
    //process
    doiCho(listNumber, ip1, ip2);

    //output
    document.getElementById('showInfor6').innerHTML = 'Mảng sau khi thay đổi: ' + listNumber;
}

function doiCho(listNumber, ip1, ip2) {
    if(ip1 >= 0 && ip2 >= 0) {
        var data = listNumber[ip1];
        listNumber[ip1] = listNumber[ip2];
        listNumber[ip2] = data;
    }
}

/**
 * 7. Sắp xếp
 */

document.getElementById('btn7').onclick = function () {
    if(listNumber.length === 0) {
        alert("Vui lòng thêm số!");
        return;
    }
    //input
    var sapXepTang = sortSapXepTang(listNumber);
    //process
    for (var index = 0; index < sapXepTang.length; index++) {
        document.querySelector('#showInfor7').innerHTML +=  sapXepTang[index] + " ";
    }    
}

function sortSapXepTang (listNumber) {
    var result = listNumber.sort(function(num,numTruoc) {
        return num - numTruoc;
    }) 
    return result;
}

/**
 * 8. Số nguyên tố đầu tiên
 */

document.getElementById('btn8').onclick = function () {
    if(listNumber.length === 0) {
        alert("Vui lòng thêm số!");
        return;
    }
    //input 
    var soNT = 0;
    //process
    for (let i = 0; i < listNumber.length; i++){
        if (isprime(listNumber[i]) == 1) {
        soNT = listNumber[i];
        break;
        } 
    }
    //output
    document.getElementById('showInfor8').innerHTML = soNT;
}

function isprime(n){
    let test = 1;
    if (n <2) return test = 0;
    let i = 2;
    while(i <n){
        if(n % i == 0) {
            test = 0;
            break;
        }
        i++;
    }
    return test;
}

/**
 * 9. Đếm số nguyên
 */

document.querySelector('#btn9').onclick = function () {
    if(listNumber.length === 0) {
        alert("Vui lòng thêm số!");
        return;
    }
    //input
    var countSoNguyen = 0;
    var show = listNumber[i];
    //process
    for(var i = 0; i < listNumber.length; i++) {
        if(show % 2 == 0) {
            countSoNguyen += 1; 
        }
    }
    //output
    document.querySelector('#showInfor9').innerHTML = 'Số nguyên: ' + countSoNguyen;
}