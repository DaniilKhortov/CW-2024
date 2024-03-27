jQuery(document).ready(function ($) {

    document.getElementById("btn").addEventListener("click", calculate);



    //Завдання1
    function calculate() {
        //Ініціалізація змінних для формул
        var n = 0.92;
        var cos = 0.9;
        var U = 0.38;


        var W1 = 4;
        var W2 = 2;
        var W3 = 4;
        var W4 = 1;
        var W5 = 1;
        var W6 = 1;
        var W7 = 2;
        var W8 = 1;

        var EP1 = parseFloat(document.getElementById("EP1").value);
        var EP2 = 14;
        var EP3 = 42;
        var EP4 = 36;
        var EP5 = 20;
        var EP6 = 40;
        var EP7 = 32;
        var EP8 = 20;

        var KV1 = 0.15;
        var KV2 = 0.12;
        var KV3 = 0.15;
        var KV4 = 0.3;
        var KV5 = 0.5;
        var KV6 = parseFloat(document.getElementById("KV6").value);
        var KV7 = 0.2;
        var KV8 = 0.65;

        var RP1 = 1.33;
        var RP2 = 1;
        var RP3 = 1.33;
        var RP4 = parseFloat(document.getElementById("RP4").value);
        var RP5 = 0.75;
        var RP6 = 1;
        var RP7 = 1;
        var RP8 = 0.75;


        //Перевіряємо введені значення
        //Якщо поле пусте, або менше за 0 калькулятор відмовиться рахувати
        if (isNaN(n) || isNaN(cos) || isNaN(U) || isNaN(W1) || isNaN(W2) || isNaN(W3) || isNaN(W4) || isNaN(W5) || isNaN(W6) || isNaN(W7) || isNaN(W8) || isNaN(EP1) || isNaN(EP2) || isNaN(EP3) || isNaN(EP4) || isNaN(EP5) || isNaN(EP6) || isNaN(EP7) || isNaN(EP8) || isNaN(KV1) || isNaN(KV2) || isNaN(KV3) || isNaN(KV4) || isNaN(KV5) || isNaN(KV6) || isNaN(KV7) || isNaN(KV8) || isNaN(RP1) || isNaN(RP2) || isNaN(RP3) || isNaN(RP4) || isNaN(RP5) || isNaN(RP6) || isNaN(RP7) || isNaN(RP8)) {
            alert("Impossible to calculate: Input field(s) is empty!");
        } else if (n < 0 || cos < 0 || U < 0 || W1 < 0 || W2 < 0 || W3 < 0 || W4 < 0 || W5 < 0 || W6 < 0 || W7 < 0 || W8 < 0 || EP1 < 0 || EP2 < 0 || EP3 < 0 || EP4 < 0 || EP5 < 0 || EP6 < 0 || EP7 < 0 || EP8 < 0 || KV1 < 0 || KV2 < 0 || KV3 < 0 || KV4 < 0 || KV5 < 0 || KV6 < 0 || KV7 < 0 || KV8 < 0 || RP1 < 0 || RP2 < 0 || RP3 < 0 || RP4 < 0 || RP5 < 0 || RP6 < 0 || RP7 < 0 || RP8 < 0) {
            alert("Impossible to calculate: One of input value is lower than 0!");
        } else {
            //Обрахунок
            var kB = parseFloat((W1 * EP1 * KV1 + W2 * EP2 * KV2 + W3 * EP3 * KV3 + W4 * EP4 * KV4 + W5 * EP5 * KV5 + W6 * EP6 * KV6 + W7 * EP7 * KV7 + W8 * EP8 * KV8) / (W1 * EP1 + W2 * EP2 + W3 * EP3 + W4 * EP4 + W5 * EP5 + W6 * EP6 + W7 * EP7 + W8 * EP8)).toFixed(2);

            var ne = parseFloat(Math.pow((W1 * EP1 + W2 * EP2 + W3 * EP3 + W4 * EP4 + W5 * EP5 + W6 * EP6 + W7 * EP7 + W8 * EP8), 2) / (W1 * Math.pow(EP1, 2) + W2 * Math.pow(EP2, 2) + W3 * Math.pow(EP3, 2) + W4 * Math.pow(EP4, 2) + W5 * Math.pow(EP5, 2) + W6 * Math.pow(EP6, 2) + W7 * Math.pow(EP7, 2) + W8 * Math.pow(EP8, 2))).toFixed(2);

            var kp = 0;

            //Перевіряємо отримані значення за табличними
            if (kB > 0.2 && kB < 0.3 && ne > 14 && ne < 15) {
                kp = 1.27;
            } else if (kB > 0.2 && kB < 0.3 && ne > 15 && ne < 16) {
                kp = 1.25;
            } else {
                alert("Your data was not predicted.");
            }



            var pP = parseFloat(kp * (W1 * EP1 * KV1 + W2 * EP2 * KV2 + W3 * EP3 * KV3 + W4 * EP4 * KV4 + W5 * EP5 * KV5 + W6 * EP6 * KV6 + W7 * EP7 * KV7 + W8 * EP8 * KV8)).toFixed(2);

            var QP = parseFloat(kp * (W1 * EP1 * KV1 * RP1 + W2 * EP2 * KV2 * RP2 + W3 * EP3 * KV3 * RP3 + W4 * EP4 * KV4 * RP4 + W5 * EP5 * KV5 * RP5 + W6 * EP6 * KV6 * RP6 + W7 * EP7 * KV7 * RP7 + W8 * EP8 * KV8 * RP8)).toFixed(2);
            var Sp = parseFloat(Math.sqrt((Math.pow(pP, 2) + Math.pow(QP, 2)))).toFixed(2);
            var Ip = parseFloat(pP / U).toFixed(2);

            var nph = parseFloat((W1 * EP1 + W2 * EP2 + W3 * EP3 + W4 * EP4 + W5 * EP5 + W6 * EP6 + W7 * EP7 + W8 * EP8) * 3 + 200 + 240).toFixed(2);
 
            var nphk = parseFloat((W1 * EP1 * KV1 + W2 * EP2 * KV2 + W3 * EP3 * KV3 + W4 * EP4 * KV4 + W5 * EP5 * KV5 + W6 * EP6 * KV6 + W7 * EP7 * KV7 + W8 * EP8 * KV8) * 3 + 40 + 192).toFixed(2);

            var kb2 = parseFloat(nphk / nph).toFixed(2);

            var ne2 = parseFloat(Math.pow(nph, 2) / ((W1 * Math.pow(EP1, 2) + W2 * Math.pow(EP2, 2) + W3 * Math.pow(EP3, 2) + W4 * Math.pow(EP4, 2) + W5 * Math.pow(EP5, 2) + W6 * Math.pow(EP6, 2) + W7 * Math.pow(EP7, 2) + W8 * Math.pow(EP8, 2)) * 3 + 100 * 100 * 2 + 120 * 120 * 2)).toFixed(2);


            var kp2 = 0
            //Перевіряємо отримані значення за табличними
            if (kb2 > 0.3 && kb2 < 0.4 && ne2 > 50) {
                kp2 = 0.7;
            } else if (kb2 > 0.2 && kb2 < 0.3 && ne2 < 50 && ne2 > 25) {
                kp2 = 0.75;
            } else {
                alert("Your data was not predicted.");
            }

            var pP2 = parseFloat(kp2 * nphk).toFixed(2);

            var QP2 = parseFloat(kp2 * ((W1 * EP1 * KV1 * RP1 + W2 * EP2 * KV2 * RP2 + W3 * EP3 * KV3 * RP3 + W4 * EP4 * KV4 * RP4 + W5 * EP5 * KV5 * RP5 + W6 * EP6 * KV6 * RP6 + W7 * EP7 * KV7 * RP7 + W8 * EP8 * KV8 * RP8) * 3 + 120)).toFixed(2);


            var Sp2 = parseFloat(Math.sqrt((Math.pow(pP2, 2) + Math.pow(QP2, 2)))).toFixed(2);

            var Ip2 = parseFloat(pP2 / U).toFixed(2);

            //Зміна класів елемента
            //В результаті має виводитись блок із результатами
            document.getElementById("result-section").classList.remove("result-content-off")
            document.getElementById("result-section").classList.add("result-content-on")


            //////Експорт данних до вмісту блоку результатів
            document.getElementById("a1").innerHTML = (kB);
            document.getElementById("a2").innerHTML = (ne);
            document.getElementById("a3").innerHTML = (kp);
            document.getElementById("a4").innerHTML = (pP);
            document.getElementById("a5").innerHTML = (QP);
            document.getElementById("a6").innerHTML = (Sp);
            document.getElementById("a7").innerHTML = (Ip);
            document.getElementById("a8").innerHTML = (kb2);
            document.getElementById("a9").innerHTML = (ne2);
            document.getElementById("a10").innerHTML = (kp2);
            document.getElementById("a11").innerHTML = (pP2);
            document.getElementById("a12").innerHTML = (QP2);
            document.getElementById("a13").innerHTML = (Sp2);
            document.getElementById("a14").innerHTML = (Ip2);


        }


    }

});


