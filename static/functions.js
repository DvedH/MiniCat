
'/<string:username>/teacherClass'
//async function getOffered() {
//
//}
    async function getOffered() {
        res = fetch('http://127.0.0.1:5000/school/classes', {
            method:'GET',
        })
            .then((response) => response.json())
            .then((data) => fillTable(data))
    }
    function fillTable(data) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        var i =0;

        for (var i = 0; i < 5; i++) {
            for (var items in data) {
                 console.log(data[items])
            }
        }
        for (var items in data) {
//            for (var items in data) {
//                 console.log(data[items])
//                // console.log(i)
//            }
               console.log(data[items])

            out +=
                `<tr>
                    <td id=classname`+ i+ '>' +  data[items]["classID"] +`</td>
                    <td>` + data[items]["teacherName"] + `</td>
                    <td> ` + data[items]["classTime"] + ` </td>
                    <td>` + data[items]["enrolledNum"] + "/"+ data[items]["maxEnrollment"] +` </td>
                    <td><button id=enrollStudent`+i+ `onclick="enrollS()">Add</button><button>Delete</button></td>
                </tr>`;


        }
        placeholder.innerHTML = out;
    }

    async function enrollS1() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname1").innerHTML
        console.log(classname)

        param = {
            "username": username,
            "classname": Cn
        };

        res = fetch('http://127.0.0.1:5000/enroll', {
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
$(document).ready(function(){
    $(".fullname").click(function(){
      $.put("demo_test.asp", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
      });
    });

    $(".get").click(function(){
        var a;
        /*$.get("grades.txt", function(text){
            a = text
            alert("Name:" + a);
        }, 'text');
        */
        $.ajax({
            url: "http://127.0.0.1:5000/grades",
            success: function (data){
                //const blockOfText = JSON.stringify(data);
                //const obj = JSON.parse(blockOfText);
                //Have to clear display
                a = Name.value;
                console.log(data[a]);
                alert("Grade of " + a + " is: " + data[a]);
                $('#GradeDisplay').append("The grade of "+ a + " is " + data[a])
            }
        });
    });
//oldTable code

//   $(".getAll").click(function(){
//        $.ajax({
//            url: "http://127.0.0.1:5000/school/classes",
//            success: function (data){
//                const blockOfText = JSON.stringify(data, null, 4);
//                //const obj = JSON.parse(blockOfText);
//                //document.body.innerHTML = blockOfText;
//                $("#gradeTable tbody tr").remove();
//                $("#Tracker p").remove();
//                console.log(Object.keys(data));
//                console.log(Object.values(data));
//                var num = '';
//                var student = '';
//                $.each(data, function(key, value){
//                    //Initialize a new row
//                    student += '<tr>'
//                    student += '<td id=classname'+ key + '>' + value + '</td>';
//                    student +=  '<\tr>'
//                    num = '<p>' + key + '</p>';
//                });
//                $('#gradeTable').append(student);
//                $('#Tracker').append(num);
//            }
//        });
//    });
//
//    $(".getAll").click(function(){
//        $.ajax({
//            url: "http://127.0.0.1:5000/school/classes/1",
//            success: function (data){
//                const blockOfText = JSON.stringify(data, null, 4);
//                //const obj = JSON.parse(blockOfText);
//                //document.body.innerHTML = blockOfText;
//                $("#gradeTable1 tbody tr").remove();
//                console.log(Object.keys(data));
//                console.log(Object.values(data));
//                var student = '';
//                $.each(data, function(key, value){
//                    //Initialize a new row
//                    student += '<tr>'
//                    student += '<td>' + value + '</td>';
//                    student +=  '<\tr>'
//                });
//                $('#gradeTable1').append(student);
//            }
//        });
//    });
//
//    $(".getAll").click(function(){
//        $.ajax({
//            url: "http://127.0.0.1:5000/school/classes/2",
//            success: function (data){
//
//                const blockOfText = JSON.stringify(data, null, 4);
//                //const obj = JSON.parse(blockOfText);
//                //document.body.innerHTML = blockOfText;
//                $("#gradeTable2 tbody tr").remove();
//                console.log(Object.keys(data));
//                console.log(Object.values(data));
//                var student = '';
//                $.each(data, function(key, value){
//                    //Initialize a new row
//                    student += '<tr>'
//                    student += '<td>' + value + '</td>';
//                    student +=  '<\tr>'
//                });
//                $('#gradeTable2').append(student);
//            }
//        });
//    });
//
//    $(".getAll").click(function(){
//        $.ajax({
//            url: "http://127.0.0.1:5000/school/classes",
//            success: function (data){
//                const blockOfText = JSON.stringify(data, null, 4);
//                //const obj = JSON.parse(blockOfText);
//                //document.body.innerHTML = blockOfText;
//                console.log(Object.keys(data));
//                console.log(Object.values(data));
//                $("#gradeTable3 tbody tr").remove();
//                var student = '';
//                $.each(data, function(key, value){
//                    //Initialize a new row
//                    student += '<tr>'
//                    student += '<td>' + value + '</td>';
//                    student +=  '<\tr>'
//                });
//                $('#gradeTable3').append(student);
//            }
//        });
//    });
//
//    $(".getAll").click(function(){
//        $.ajax({
//            url: "http://127.0.0.1:5000/school/classes",
//            success: function (data){
//                const blockOfText = JSON.stringify(data, null, 4);
//                //const obj = JSON.parse(blockOfText);
//                //document.body.innerHTML = blockOfText;
//                $("#gradeTable4 tbody tr").remove();
//                console.log(Object.keys(data));
//                console.log(Object.values(data));
//                var student = '';
//
//                $.each(data, function(key, value){
//                    i = 0;
//                    //Initialize a new row
//                    student += '<tr>'
//                    student += '<td><button class=enrollStudent onclick="enrollS1()"' + key + '>Add</button><button>Delete</button></td>';
//                    student +=  '<\tr>'
//                    i+= 1;
//                });
//                $('#gradeTable4').append(student);
//            }
//        });
//    });

    $(".addStudent").click(function(){
        //Making a POST call
        var name, grade;
        name = $('#Name').val();
        grade = parseFloat($('#Grade').val());

        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://127.0.0.1:5000/grades");
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"name":name, "grade": grade};
        xhttp.send(JSON.stringify(body));
        xhttp.onload = function() {

        };

        newStudent = '';
        newStudent += '<tr>';
        newStudent += '<td>' + Name.value + '</td>';
        newStudent += '<td>' + Grade.value + '</td>';
        newStudent += '</tr>';
        $('#gradeTable').append(newStudent);

    });


    $(".editGrade").click(function(){
        var name, grade;
        name = $('#Name').val();
        grade = parseFloat($('#Grade').val());
        var xhttp = new XMLHttpRequest();
        xhttp.open("PUT", "http://127.0.0.1:5000/grades/" + encodeURIComponent(name));
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"grade": grade};
        xhttp.send(JSON.stringify(body));
        xhttp.onload = function() {

        };
    });
    $(".deleteGrade").click(function(){
        var name, grade;
        name = $('#Name').val();
        grade = parseFloat($('#Grade').val());
        var xhttp = new XMLHttpRequest();
        xhttp.open("DELETE", "http://127.0.0.1:5000/grades/" + encodeURIComponent(name));
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send();
        xhttp.onload = function() {

        };
    });

    $(".enrollStudent1").click(function(){
        var username, classname;
        username = "David Hernandez"
        classname = String($('#classname1').val());
        console.log(classname)
        var xhttp = new XMLHttpRequest();
        xhttp.open("PUT", "http://127.0.0.1:5000/enroll");
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"username": username ,"classname": classname};
        xhttp.send(JSON.stringify(body));
        xhttp.onload = function() {

        };
    });
        $(".enrollStudent2").click(function(){
        var username, classname;
        username = String($('#username').val());
        classname = String($('#classname2').val());
        var xhttp = new XMLHttpRequest();
        xhttp.open("PUT", "http://127.0.0.1:5000/enroll");
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"username": username ,"classname": classname};
        xhttp.send(JSON.stringify(body));
        xhttp.onload = function() {

        };
    });
        $(".enrollStudent3").click(function(){
        var username, classname;
        username = String($('#username').val());
        classname = String($('#classname3').val());
        var xhttp = new XMLHttpRequest();
        xhttp.open("PUT", "http://127.0.0.1:5000/enroll");
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"username": username ,"classname": classname};
        xhttp.send(JSON.stringify(body));
        xhttp.onload = function() {

        };
    });
        $(".enrollStudent4").click(function(){
        var username, classname;
        username = String($('#username').val());
        classname = String($('#classname4').val());
        var xhttp = new XMLHttpRequest();
        xhttp.open("PUT", "http://127.0.0.1:5000/enroll");
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"username": username ,"classname": classname};
        xhttp.send(JSON.stringify(body));
        xhttp.onload = function() {

        };
    });
        $(".enrollStudent5").click(function(){
        var username, classname;
        username = String($('#username').val());
        classname = String($('#classname5').val());
        var xhttp = new XMLHttpRequest();
        xhttp.open("PUT", "http://127.0.0.1:5000/enroll");
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"username": username ,"classname": classname};
        xhttp.send(JSON.stringify(body));
        xhttp.onload = function() {

        };
    });
        $(".enrollStudent6").click(function(){
        var username, classname;
        username = String($('#username').val());
        classname = String($('#classname6').val());
        var xhttp = new XMLHttpRequest();
        xhttp.open("PUT", "http://127.0.0.1:5000/enroll");
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"username": username ,"classname": classname};
        xhttp.send(JSON.stringify(body));
        xhttp.onload = function() {

        };
    });
        $(".enrollStudent7").click(function(){
        var username, classname;
        username = String($('#username').val());
        classname = String($('#classname7').val());
        var xhttp = new XMLHttpRequest();
        xhttp.open("PUT", "http://127.0.0.1:5000/enroll");
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"username": username ,"classname": classname};
        xhttp.send(JSON.stringify(body));
        xhttp.onload = function() {

        };
    });
        $(".enrollStudent8").click(function(){
        var username, classname;
        username = String($('#username').val());
        classname = String($('#classname8').val());
        var xhttp = new XMLHttpRequest();
        xhttp.open("PUT", "http://127.0.0.1:5000/enroll");
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"username": username ,"classname": classname};
        xhttp.send(JSON.stringify(body));
        xhttp.onload = function() {

        };
    });
        $(".enrollStudent9").click(function(){
        var username, classname;
        username = String($('#username').val());
        classname = String($('#classname9').val());
        var xhttp = new XMLHttpRequest();
        xhttp.open("PUT", "http://127.0.0.1:5000/enroll");
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"username": username ,"classname": classname};
        xhttp.send(JSON.stringify(body));
        xhttp.onload = function() {

        };
    });
        $(".enrollStudent10").click(function(){
        var username, classname;
        username = String($('#username').val());
        classname = String($('#classname10').val());
        var xhttp = new XMLHttpRequest();
        xhttp.open("PUT", "http://127.0.0.1:5000/enroll");
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"username": username ,"classname": classname};
        xhttp.send(JSON.stringify(body));
        xhttp.onload = function() {

        };
    });

    $(".deleteStudent").click(function(){
        var username, classname;
        username = String($('#username').val());
        classname = String($('#classname').val());
        var xhttp = new XMLHttpRequest();
        xhttp.open("DELETE", "http://127.0.0.1:5000/unenroll");
        xhttp.setRequestHeader("Content-Type", "application/json");
        const body = {"username": username ,"classname": classname};
        xhttp.send(JSON.stringify(body));
        xhttp.onload = function() {

        };
    });
});