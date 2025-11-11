// first page start 
let numberBtn = document.getElementById("numberBtn")
let pinBtn = document.getElementById("pinBtn")
let loginBtn = document.getElementById("loginBtn")
let infoWrong = document.getElementById("infoWrong")
let infoRight = document.getElementById("infoRight")
let firstPage = document.getElementById("firstPage")
let secondPage = document.getElementById("secondPage")

loginBtn.addEventListener("click",()=>{
let number = numberBtn.value
let pin = pinBtn.value

    if (number == 12345 && pin == 12345) {
        console.log("information correct");
        numberBtn.value = ""
        pinBtn.value = ""
        infoWrong.setAttribute("hidden" , true)
        firstPage.setAttribute("hidden" , true)
        secondPage.removeAttribute("hidden")
    }
    else{
        console.log("wrong info");
        numberBtn.value = ""
        pinBtn.value = ""
        infoWrong.removeAttribute("hidden")
        setTimeout(()=>{
            infoWrong.setAttribute("hidden" , true)
        }, 2000)
        infoRight.setAttribute("hidden" , true)
    }
})
// first page end


// second page start
let logOutBtn = document.getElementById("logOutBtn")
let infoWrongforSecPage = document.getElementById("infoWrongforSecPage")
let infoRightforSecPage = document.getElementById("infoRightforSecPage")
// transactions
let transactionsBtn = document.getElementById("transactionsBtn")
let transactionsOption = document.getElementById("transactionsOption")
let transactionsDetails = document.getElementById("transactionsDetails")
// transactions
// pay bill
let payBillBtn = document.getElementById("payBillBtn")
let payBillOption = document.getElementById("payBillOption")
let payBillDetails = document.getElementById("payBillDetails")
// pay bill
// get bonus
let getBonusBtn = document.getElementById("getBonusBtn")
let getBonusOption = document.getElementById("getBonusOption")
let getBonusDetails = document.getElementById("getBonusDetails")
// get bonus
// transfer money
let transferMoneyBtn = document.getElementById("transferMoneyBtn")
let transferMoneyOption = document.getElementById("transferMoneyOption")
let transMoneyDetails = document.getElementById("transMoneyDetails")
// transfer money
// cash out
let cashOutBtn = document.getElementById("cashOutBtn")
let cashOutOption = document.getElementById("cashOutOption")
let cashOutDetails = document.getElementById("cashOutDetails")
// cash out
// add money
let addMoneyBtn = document.getElementById("addMoneyBtn")
let addMoneyOption = document.getElementById("addMoneyOption")
let addMoneyDetails = document.getElementById("addMoneyDetails")
// add money

// log out part start
logOutBtn.addEventListener("click" , ()=>{
    secondPage.setAttribute("hidden" , true)
    firstPage.removeAttribute("hidden")
    infoRight.setAttribute("hidden" , true)
    addMoneyOption.setAttribute("hidden" , true)
    addMoneyDetails.setAttribute("hidden" , true)
    getBonusOption.setAttribute("hidden" , true)
    getBonusDetails.setAttribute("hidden" , true)
    payBillOption.setAttribute("hidden" , true)
    payBillDetails.setAttribute("hidden" , true)
    transactionsOption.setAttribute("hidden" , true)
    transactionsDetails.setAttribute("hidden" , true)
    transferMoneyOption.setAttribute("hidden" , true)
    transMoneyDetails.setAttribute("hidden" , true)
    cashOutOption.setAttribute("hidden" , true)
    cashOutDetails.setAttribute("hidden" , true)
})
// log out part end

// add money start
addMoneyBtn.addEventListener("click" ,  ()=>{
    addMoneyOption.removeAttribute("hidden")
    addMoneyDetails.removeAttribute("hidden")
    getBonusOption.setAttribute("hidden" , true)
    getBonusDetails.setAttribute("hidden" , true)
    payBillOption.setAttribute("hidden" , true)
    payBillDetails.setAttribute("hidden" , true)
    transactionsOption.setAttribute("hidden" , true)
    transactionsDetails.setAttribute("hidden" , true)
    transferMoneyOption.setAttribute("hidden" , true)
    transMoneyDetails.setAttribute("hidden" , true)
    cashOutOption.setAttribute("hidden" , true)
    cashOutDetails.setAttribute("hidden" , true)
})
// add money end

// cash out part start
cashOutBtn.addEventListener("click" , ()=>{
    cashOutOption.removeAttribute("hidden")
    cashOutDetails.removeAttribute("hidden")
    getBonusOption.setAttribute("hidden" , true)
    getBonusDetails.setAttribute("hidden" , true)
    payBillOption.setAttribute("hidden" , true)
    payBillDetails.setAttribute("hidden" , true)
    transactionsOption.setAttribute("hidden" , true)
    transactionsDetails.setAttribute("hidden" , true)
    transferMoneyOption.setAttribute("hidden" , true)
    transMoneyDetails.setAttribute("hidden" , true)
    addMoneyOption.setAttribute("hidden" , true)
    addMoneyDetails.setAttribute("hidden" , true)
})
// cash out part end

// transfer money part start
transferMoneyBtn.addEventListener("click" , ()=>{
    transferMoneyOption.removeAttribute("hidden")
    transMoneyDetails.removeAttribute("hidden")
    getBonusOption.setAttribute("hidden" , true)
    getBonusDetails.setAttribute("hidden" , true)
    payBillOption.setAttribute("hidden" , true)
    payBillDetails.setAttribute("hidden" , true)
    transactionsOption.setAttribute("hidden" , true)
    transactionsDetails.setAttribute("hidden" , true)
    cashOutOption.setAttribute("hidden" , true)
    cashOutDetails.setAttribute("hidden" , true)
    addMoneyOption.setAttribute("hidden" , true)
    addMoneyDetails.setAttribute("hidden" , true)
})
// transfer money part end

// get bonus part start
getBonusBtn.addEventListener("click" , ()=>{
    getBonusOption.removeAttribute("hidden")
    getBonusDetails.removeAttribute("hidden")
    transactionsOption.setAttribute("hidden" , true)
    transactionsDetails.setAttribute("hidden" , true)
    payBillOption.setAttribute("hidden" , true)
    payBillDetails.setAttribute("hidden" , true)
    transferMoneyOption.setAttribute("hidden" , true)
    transMoneyDetails.setAttribute("hidden" , true)
    cashOutOption.setAttribute("hidden" , true)
    cashOutDetails.setAttribute("hidden" , true)
    addMoneyOption.setAttribute("hidden" , true)
    addMoneyDetails.setAttribute("hidden" , true)
})
// get bonus part end

// pay bill part start
payBillBtn.addEventListener("click" , ()=>{
    payBillOption.removeAttribute("hidden")
    payBillDetails.removeAttribute("hidden")
    transactionsOption.setAttribute("hidden" , true)
    transactionsDetails.setAttribute("hidden" , true)
    getBonusOption.setAttribute("hidden" , true)
    getBonusDetails.setAttribute("hidden" , true)
    transferMoneyOption.setAttribute("hidden" , true)
    transMoneyDetails.setAttribute("hidden" , true)
    cashOutOption.setAttribute("hidden" , true)
    cashOutDetails.setAttribute("hidden" , true)
    addMoneyOption.setAttribute("hidden" , true)
    addMoneyDetails.setAttribute("hidden" , true)
})
// pay bill part end

// transactions part start
transactionsBtn.addEventListener("click" , ()=>{
    transactionsOption.removeAttribute("hidden")
    transactionsDetails.removeAttribute("hidden")
    payBillOption.setAttribute("hidden" , true)
    payBillDetails.setAttribute("hidden" , true)
    getBonusOption.setAttribute("hidden" , true)
    getBonusDetails.setAttribute("hidden" , true)
    transferMoneyOption.setAttribute("hidden" , true)
    transMoneyDetails.setAttribute("hidden" , true)
    cashOutOption.setAttribute("hidden" , true)
    cashOutDetails.setAttribute("hidden" , true)
    addMoneyOption.setAttribute("hidden" , true)
    addMoneyDetails.setAttribute("hidden" , true)
})
// transactions part end 
// second page end

// add money part
let totalAmount = document.getElementById("totalAmount")
let addAmount = document.getElementById("addAmount")
let bankAccountNumberBtn = document.getElementById("bankAccountNumberBtn")
let addMoneyPinBtn = document.getElementById("addMoneyPinBtn")
let addNowBtn = document.getElementById("addNowBtn")

bankAccountNumberBtn.addEventListener("input" , ()=>{
    if (bankAccountNumberBtn.value == "") {
        addNowBtn.disabled = true
    } else {
        addNowBtn.disabled = false
    }
})

addNowBtn.addEventListener("click" ,  ()=>{
    let total = parseInt(totalAmount.innerText)
    let newAmount = parseInt(addAmount.value)
    if (addMoneyPinBtn.value == 1234) {
        totalAmount.innerText = total + newAmount
        addAmount.value = ""
        addMoneyPinBtn.value = ""
        infoRightforSecPage.removeAttribute("hidden")
        infoRightforSecPage.innerText  = "Cash In " + newAmount + " TK" + " Sucsessful"
        bankAccountNumberBtn.value = ""
        setTimeout(()=>{
            infoRightforSecPage.setAttribute("hidden" , true)
        }, 2000);
    }
    else{
        addAmount.value = ""
        addMoneyPinBtn.value = ""
        infoWrongforSecPage.removeAttribute("hidden")
        bankAccountNumberBtn.value = ""
        setTimeout(()=>{
            infoWrongforSecPage.setAttribute("hidden" , true)
        }, 2000);
    }
})
// add money part

// cash out part
let withdrawNumber = document.getElementById("withdrawNumber")
let withdrawAmount = document.getElementById("withdrawAmount")
let withdrawPin = document.getElementById("withdrawPin")
let withdrawBtn = document.getElementById("withdrawBtn")

withdrawNumber.addEventListener("input" , ()=>{
    if (withdrawNumber.value == "") {
        withdrawBtn.disabled = true
    } else {
        withdrawBtn.disabled = false
    }
})

withdrawBtn.addEventListener("click" , ()=>{
    let total = parseInt(totalAmount.innerText)
    let cashOutAmount = parseInt(withdrawAmount.value)

    if (withdrawPin.value == 1234) {
        totalAmount.innerText = total - cashOutAmount
        withdrawAmount.value = ""
        withdrawPin.value = ""
        infoRightforSecPage.removeAttribute("hidden")
        infoRightforSecPage.innerText  = "Cash Out " + cashOutAmount + " TK" + " Sucsessful"
        withdrawNumber.value = ""
        setTimeout(()=>{
            infoRightforSecPage.setAttribute("hidden" , true)
        } , 2000);
    } else {
        withdrawAmount.value = ""
        withdrawPin.value = ""
        withdrawNumber.value = ""
        infoWrongforSecPage.removeAttribute("hidden")
        setTimeout(()=>{
            infoWrongforSecPage.setAttribute("hidden" , true)
        }, 2000);
    }
})
// cash out part

// transfer amount 
let transferNumber = document.getElementById("transferNumber")
let transferAmount = document.getElementById("transferAmount")
let transferPin = document.getElementById("transferPin")
let sendNowBtn = document.getElementById("sendNowBtn")

transferNumber.addEventListener("input" , ()=>{
    if (transferNumber.value == "") {
        sendNowBtn.disabled = true
    } else {
        sendNowBtn.disabled = false
    }
})

sendNowBtn.addEventListener("click" , ()=>{
    let total = parseInt(totalAmount.innerText)
    let transferMoney = parseInt(transferAmount.value)

    if (transferPin.value == 1234) {
        totalAmount.innerText = total - transferMoney
        transferAmount.value = ""
        transferPin.value = ""
        transferNumber.value = ""
        infoRightforSecPage.removeAttribute("hidden")
        infoRightforSecPage.innerText  = transferMoney + " TK " + "has been transferred successfully"
        setTimeout(()=>{
            infoRightforSecPage.setAttribute("hidden" , true)
        } , 2000);
    } else {
        transferAmount.value = ""
        transferPin.value = ""
        transferNumber.value = ""
        infoWrongforSecPage.removeAttribute("hidden")
        setTimeout(()=>{
            infoWrongforSecPage.setAttribute("hidden" , true)
        }, 2000);
    }
})
// transfer amount 

// Coupon part
let couponNumber = document.getElementById("couponNumber")
let getCouponBtn = document.getElementById("getCouponBtn")

couponNumber.addEventListener("input" , ()=>{
    if (couponNumber.value == "") {
        getCouponBtn.disabled = true
    } else {
        getCouponBtn.disabled = false
    }
})

getCouponBtn.addEventListener("click" , ()=>{
    let total = parseInt(totalAmount.innerText)
    let gift = 500

    if (couponNumber.value == 666) {
        totalAmount.innerText = total + gift
        couponNumber.value = ""
        infoRightforSecPage.removeAttribute("hidden")
        infoRightforSecPage.innerText  = "Congratulations! You've earned " + gift + " TK with this coupon."
        setTimeout(()=>{
            infoRightforSecPage.setAttribute("hidden" , true)
        } , 2000);
    } else {
        transferAmount.value = ""
        couponNumber.value = ""
        infoWrongforSecPage.removeAttribute("hidden")
        setTimeout(()=>{
            infoWrongforSecPage.setAttribute("hidden" , true)
        }, 2000);
    }
})
// Coupon part

// pay bill
let billerNumber = document.getElementById("billerNumber")
let payAmount = document.getElementById("payAmount")
let payBillPin = document.getElementById("payBillPin")
let payNowBtn = document.getElementById("payNowBtn")

billerNumber.addEventListener("input" , ()=>{
    if (billerNumber.value == "") {
        payNowBtn.disabled = true
    } else {
        payNowBtn.disabled = false
    }
})

payNowBtn.addEventListener("click" ,  ()=>{
    let total = parseInt(totalAmount.innerText)
    let billAmount = parseInt(payAmount.value)

    if (payBillPin.value == 1234) {
        totalAmount.innerText = total - billAmount
        infoRightforSecPage.removeAttribute("hidden")
        infoRightforSecPage.innerText  = "Your bill " + billAmount + " Tk has been paid successfully."
        setTimeout(()=>{
            infoRightforSecPage.setAttribute("hidden" , true)
        }, 2000);
    }
    else{

        infoWrongforSecPage.removeAttribute("hidden")
        setTimeout(()=>{
            infoWrongforSecPage.setAttribute("hidden" , true)
        }, 2000);
    }
        payAmount.value = ""
        payBillPin.value = ""
        billerNumber.value = ""
})
// pay bill

