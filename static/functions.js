
'/<string:username>/teacherClass'
//async function getOffered() {
//
//}
var tracker = 0;

    async function logOut() {
        var username;
        username = document.getElementById("USER").innerHTML
        res = fetch('http://127.0.0.1:5000/logout', {
            method:'POST',
        })
            .then((response) => response.json())
    }
    async function yourClass() {
        var username;
        username = document.getElementById("USER").innerHTML
        res = fetch('http://127.0.0.1:5000/'+username+'/classes', {
            method:'GET',
        })
            .then((response) => response.json())
            .then((data) => fillTable2(data))
    }
    async function yourClassProf() {
        var username;
        username = document.getElementById("USER").innerHTML
        res = fetch('http://127.0.0.1:5000/'+username+'/classes', {
            method:'GET',
        })
            .then((response) => response.json())
            .then((data) => fillTable2(data))
    }

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
                    <td><button class=getAll id=enrollStudent`+i+ " " + 'onclick=enrollS' +i+ '()' +`>Add</button>
                        <button class=getAll id=unenrollStudent`+i+" "+ 'onclick=unenrollS'+ i+ '()'+`>Delete</button></td>
                </tr>`;
            i++;

        }
        tracker = i;
        placeholder.innerHTML = out;
    }
    function fillTable2(data) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        var i =0;
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
                    <td><input class=contentBTT type='image' src='https://i.kym-cdn.com/photos/images/newsfeed/001/878/329/dfa.jpg'></td>
                </tr>`;
            i++;

        }
        tracker = i;
        placeholder.innerHTML = out;
    }

    async function enrollS0() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname0").innerHTML
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
    async function enrollS2() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname2").innerHTML
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
    async function enrollS3() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname3").innerHTML
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
    async function enrollS4() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname4").innerHTML
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
    async function enrollS5() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname5").innerHTML
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
    async function enrollS6() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname6").innerHTML
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
    async function enrollS7() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname7").innerHTML
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
    async function enrollS8() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname8").innerHTML
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
    async function enrollS9() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname9").innerHTML
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
    async function enrollS10() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname10").innerHTML
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

    async function unenrollS0() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname0").innerHTML
        console.log(classname)

        param = {
            "username": username,
            "classname": Cn
        };

        res = fetch('http://127.0.0.1:5000/unenroll', {
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function unenrollS1() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname1").innerHTML
        console.log(classname)

        param = {
            "username": username,
            "classname": Cn
        };

        res = fetch('http://127.0.0.1:5000/unenroll', {
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function unenrollS2() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname2").innerHTML
        console.log(classname)

        param = {
            "username": username,
            "classname": Cn
        };

        res = fetch('http://127.0.0.1:5000/unenroll', {
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function unenrollS3() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname3").innerHTML
        console.log(classname)

        param = {
            "username": username,
            "classname": Cn
        };

        res = fetch('http://127.0.0.1:5000/unenroll', {
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function unenrollS4() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname4").innerHTML
        console.log(classname)

        param = {
            "username": username,
            "classname": Cn
        };

        res = fetch('http://127.0.0.1:5000/unenroll', {
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function unenrollS5() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname5").innerHTML
        console.log(classname)

        param = {
            "username": username,
            "classname": Cn
        };

        res = fetch('http://127.0.0.1:5000/unenroll', {
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function unenrollS6() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname6").innerHTML
        console.log(classname)

        param = {
            "username": username,
            "classname": Cn
        };

        res = fetch('http://127.0.0.1:5000/unenroll', {
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function unenrollS7() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname7").innerHTML
        console.log(classname)

        param = {
            "username": username,
            "classname": Cn
        };

        res = fetch('http://127.0.0.1:5000/unenroll', {
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function unenrollS8() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname8").innerHTML
        console.log(classname)

        param = {
            "username": username,
            "classname": Cn
        };

        res = fetch('http://127.0.0.1:5000/unenroll', {
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function unenrollS9() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname9").innerHTML
        console.log(classname)

        param = {
            "username": username,
            "classname": Cn
        };

        res = fetch('http://127.0.0.1:5000/unenroll', {
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function unenrollS10() {
        var username, classname;
        username = document.getElementById("USER").innerHTML
        Cn = document.getElementById("classname10").innerHTML
        console.log(classname)

        param = {
            "username": username,
            "classname": Cn
        };

        res = fetch('http://127.0.0.1:5000/unenroll', {
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
$(document).ready(function(){
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