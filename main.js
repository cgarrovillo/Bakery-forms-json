function sheetenabl() {
    document.getElementById("length").disabled = false;
    document.getElementById("width").disabled = false;
    document.getElementById("radius").disabled = true;
    document.getElementById("layers").disabled = false;
    document.getElementById("icing").disabled = false;
    document.getElementById("topping").disabled = false;
    document.getElementById("filling").disabled = false;
}

function roundenabl() {
    document.getElementById("radius").disabled = false;
    document.getElementById("length").disabled = true;
    document.getElementById("width").disabled = true;
    document.getElementById("layers").disabled = false;
    document.getElementById("icing").disabled = false;
    document.getElementById("topping").disabled = false;
    document.getElementById("filling").disabled = false;
}

function custinfo() {
    var custname = document.getElementById("fn").value + " " + document.getElementById("ln").value
    /* debug */ document.getElementById("custname").innerHTML = custname;

    var custaddr = document.getElementById("address").value;
    /* debug */ document.getElementById("custaddr").innerHTML = custaddr;

    var custpost = document.getElementById("postal").value;
    /* debug */ document.getElementById("custpost").innerHTML = custpost;

    var custphone = document.getElementById("phone").value;
    /* debug */ document.getElementById("custphone").innerHTML = custphone;

    var custemail = document.getElementById("email").value;
    /* debug */ document.getElementById("custemail").innerHTML = "<a target=\"_blank\" href=\"mailto:" + custemail + "\">" + custemail + "</a>";

}

function order() {
    custinfo();
    var caketype = document.querySelector('input[name=caketype]:checked').value;
    var cakeprice = 0;
    var layers = 1;
    switch (caketype)
    {
        case "18":
            cakeprice = 18;
            var length = parseInt(document.getElementById("length").value);
            var width = parseInt(document.getElementById("width").value);
            var area = length * width;
            var finalarea = area - 900;
            cakeprice += (finalarea * 0.02);
            layers = parseInt(document.getElementById("layers").value);
            if (layers > 1)
            {
            layerprice = cakeprice * 0.5;
            cakeprice += (layers - 1) * layerprice;
            }
            document.getElementById("custcake").innerHTML = "Sheet Cake " + length + " x " + width + " with " + layers + " layers: $" + cakeprice.toFixed(2);

        break;

        case "15":
            cakeprice = 15;
            var radius = parseInt(document.getElementById("radius").value);
            var area = (Math.pow(radius, 2)) * Math.PI;
            var finalarea = area - ((Math.pow(15, 2)) * Math.PI);
            cakeprice += (finalarea * 0.02);
            layers = parseInt(document.getElementById("layers").value);
            if (layers > 1)
            {
            layerprice = cakeprice * 0.5;
            cakeprice += (layers - 1) * layerprice;
            }
            document.getElementById("custcake").innerHTML = "Round Cake " + radius + " cm with " + layers + " layers: $" + cakeprice.toFixed(2);
            
        break;
        

    }
    if (document.querySelector('input[name=icing]:checked'))
    {
        document.getElementById("custicing").innerHTML = "Cream Cheese Icing: $5";
        cakeprice += 5;
    }
    else
    {
        document.getElementById("custicing").innerHTML = " ";
    }

    if (document.querySelector('input[name=topping]:checked'))
    {
        document.getElementById("custtopping").innerHTML = "Fruit and Almonds Topping: $7";
        cakeprice += 7;
    }
    else
    {
        document.getElementById("custtopping").innerHTML = " ";
    }

    if (document.querySelector('input[name=filling]:checked'))
    {
        document.getElementById("custfilling").innerHTML = "Fruit jam filling: $4";
        cakeprice += 4;
    }
    else
    {
        document.getElementById("custfilling").innerHTML = " ";
    }

    document.getElementById("custtotal").innerHTML = "Total: $" + cakeprice;

    
    /* debug */ //document.getElementById("custcake").innerHTML = caketype;


}