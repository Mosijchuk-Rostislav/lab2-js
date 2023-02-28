let kava = ""
let kub = ""   
let n = 0
let m = 0
let c = 0
let sb = ""
let k = ""
let Vmilk = ""

while (n == 0){
    const menu = prompt("Яку каву ви бажаєте?  Американо, американо з молоком, капучіно, лате");
if(menu == "американо"){
    console.log("Американо")
    kava = "американо"
    n++
}
else if(menu == "американо з молоком"){
    console.log("Американо з молоком")
    kava = "американо з молоком"
    n++
}
else if(menu == "капучіно"){
    console.log("Капучіно")
    kava = "капучіно"
    n++
}
else if(menu == "лате"){
    console.log("Лате")
    kava = "лате"
    n++
}
}

if(kava == "американо з молоком"){
    while (m == 0) {
        const milk = prompt("З вершками чи з молоком?")
        if(milk == "з вершками"){
            console.log("з вершками")
            m++
            Vmilk = "з вершками"
        }
        else if(milk == "з молоком"){
            console.log("з молоком")
            m++
            Vmilk = "з молоком"
        }
    }
}

if (kava == "капучіно" || kava == "лате") {
    while (c == 0) {
      const SorB = prompt("Маленький чи великий?")
      if (SorB == "маленький") {
        console.log("маленький")
        c++
        sb = "маленький";
      } else if (SorB == "великий") {
        console.log("великий")
        c++
        sb = "великий"
      }
    }
  }

while (k == 0){
    const kubArab = prompt("кубаш чи арабіка?")
    if(kubArab == "кубаш"){
        console.log("кубаш")
        kub = "кубаш"
        k++
    }
    else if(kubArab == "арабіка"){
        console.log("арабіка")
        kub = "арабіка"
        k++
    }
}

const wCukr = prompt("Скільки цукру?")
console.log(wCukr)

if(kava == "американо"){
    console.log(`Ваше замовлення: ${kava} - ${kub}, ${wCukr} ложок цукру`)
}
else if(kava == "американо з молоком"){
    console.log(`Ваше замовлення: ${kava} - ${kub}, ${Vmilk}, ${wCukr} ложок цукру`)
}
else if(kava == "капучіно" || kava == "лате"){
    console.log(`Ваше замовлення: ${kava} - ${kub}, ${sb}, ${wCukr} ложок цукру`)
}