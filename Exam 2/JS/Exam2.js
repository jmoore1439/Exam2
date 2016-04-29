function GetCategory()
{
    var objCategory = new XMLHttpRequest();
    
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCategories"
    
    objCategory.onreadystatechange = function()
    {
        if (objCategory.readyState == 4 && objCategory.status == 200)
        {
            var output = JSON.parse(objCategory.responseText);
            GenerateOutput(output);
        }
    }
     objCategory.open("GET", url, true);
     objCategory.send();
}
function GenerateOutput(result)
{
    var count = 0;
    var displaytext = "<table><tr><th>Catagory ID</th><th>Catagory Name</th><th>Catagory Description</th></tr>";
    
    for (count = 0; count < result.GetAllCategoriesResult.length; count++)
    {
        displaytext += "<tr><td>" + result.GetAllCategoriesResult[count].CID + "</td><td>" + 
        result.GetAllCategoriesResult[count].CName + "</td><td>" +
        result.GetAllCategoriesResult[count].CDescription + "</td></tr>";
    }
    displaytext += "</table>"
    document.getElementById("categorydisplay").innerHTML = displaytext;
}

function CreateCategories()
{
    var objRequest1 = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCategory";   
    var CategoryName = document.getElementById("catname").value;
    var CategoryDescription = document.getElementById("catdes").value;
    var newcat = '{"CName":"' + CategoryName  + '","CDescription":"' + CategoryDescription + '"}';
    
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
    objRequest1.send(newcat);
}

function CheckResult1(outputs)
{
    if (outputs.WasSuccessful == 1)
    {
        document.getElementById("error1").innerHTML = "The operation was successful!";
    }else 
    {
        document.getElementById("error1").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
    
}

function UpdateDescription()
{
    var objRequest2 = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateCatDescription";   
    var CatID = document.getElementById("catid").value;
    var Catdescrip = document.getElementById("catdescrip").value;
    
    var newcat = '{"CID":"' + CatID  + '","CDescription":"' + Catdescrip + '"}';
    objRequest2.onreadystatechange = function()
    {
     if (objRequest2.readyState == 4 && objRequest2.status == 200)
        {
            var results = JSON.parse(objRequest2.responseText);
            CheckResult2(results);
        }
    }
    
    objRequest2.open("POST", url, true);
    objRequest2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest2.send(newcat);
}

function CheckResult2(outputs)
{
    if (outputs.WasSuccessful == 1)
    {
        document.getElementById("error2").innerHTML = "The operation was successful!";
    }else 
    {
        document.getElementById("error2").innerHTML = "The operation was not successful!" + "<br>" + outputs.Exception;
    }
    
}

function DeleteCategory()
{
    var objRequest2 = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCategory/";   
    url += document.getElementById("categoryID").value;
    
    confirm("Are you sure you want to delete this category?");
    
    objRequest2.onreadystatechange = function()
    {
     if (objRequest2.readyState == 4 && objRequest2.status == 200)
        {
            var results1 = JSON.parse(objRequest2.responseText);
            CheckResult3(results1);
        }
    }
    objRequest2.open("GET", url, true);
    objRequest2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest2.send();
}
    
function CheckResult3(outputs)
{
    if (outputs.DeleteCategoryResult.WasSuccessful == 1)
    {
        document.getElementById("error3").innerHTML = "The operation was successful!";
    }else 
    {
        document.getElementById("error3").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}

function MenuChoice()
{
    if (document.getElementById("menu").value == "Display Category List")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "hidden";
    }else if (document.getElementById("menu").value == "Add Category")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Change Category Discription")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "visible";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "hidden";
     }else if (document.getElementById("menu").value == "Delete Category") 
     {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "visible";
        document.getElementById("section5").style.visibility = "hidden";
     }else if (document.getElementById("menu").value == "About Developer") 
     {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "Visible";
     }else
     {
        
     }
}