function MenuChoice()
{
    if (document.getElementById("menu").value == "Add Customer")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }else if (document.getElementById("menu").value == "Update Order")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Delete Customer")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "visible";
     }else
     {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
     }
}
function AddCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCustomer";   
    var customerid = document.getElementById("custid").value;
    var customername = document.getElementById("custname").value;
    var customercity = document.getElementById("custcity").value;
    var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername + '","City":"' + customercity + '"}';
    objRequest.onreadystatechange = function()
    {
     if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult(result);
        }
    }
       
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newcustomer);
}

function OperationResult(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("error1").innerHTML = "The operation was successful!";
    }else
    {
        document.getElementById("error1").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}



function AddOrder()
{
    var objRequest1 = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/UpdateOrderAddress";   
    var ordernumber = document.getElementById("orderid").value;
    var shipname = document.getElementById("shipname").value;
    var shipaddress = document.getElementById("shipadd").value;
    var shipcity = document.getElementById("shipcity").value;
    var shipcode = document.getElementById("shipcode").value;
    var neworder = '{"OrderID":"' + ordernumber + '","ShipName":"' + shipname + '","ShipAddress":"' + shipaddress + '","ShipCity":"' + shipcity + '","ShipPostcode":"' + shipcode + '"}';
    
    objRequest1.onreadystatechange = function()
    {
     if (objRequest1.readyState == 4 && objRequest1.status == 200)
        {
            var results = JSON.parse(objRequest1.responseText);
            CheckResult1(results);
        }
    }
    
    objRequest1.open("POST", url, true);
    objRequest1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest1.send(neworder);
}

function CheckResult1(outputs)
{
    if (outputs == 1)
    {
        document.getElementById("error2").innerHTML = "The operation was successful!";
    }else 
    {
        document.getElementById("error2").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
    
}

function DeleteCustomer()
{
    var objRequest2 = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/DeleteCustomer/";   
    url += document.getElementById("custid1").value;
    
    confirm("Are you sure you want to delete this customer?");
    
    objRequest2.onreadystatechange = function()
    {
     if (objRequest2.readyState == 4 && objRequest2.status == 200)
        {
            var results1 = JSON.parse(objRequest2.responseText);
            CheckResult2(results1);
        }
    }
    objRequest2.open("GET", url, true);
    objRequest2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest2.send();
}
    
function CheckResult2(outputs)
{
    if (outputs.DeleteCustomerResult.WasSuccessful == 1)
    {
        document.getElementById("error3").innerHTML = "The operation was successful!";
    }else 
    {
        document.getElementById("error3").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}
    
