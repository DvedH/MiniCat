
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
        res = fetch('http://127.0.0.1:5000/'+username+'/teacherClass', {
            method:'GET',
        })
            .then((response) => response.json())
            .then((data) => fillTableP(data))
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
                    <td><input class=contentBTT type='image' src='https://www.freeiconspng.com/thumbs/checkmark-png/checkmark-png-5.png'></td>
                </tr>`;
            i++;

        }
        tracker = i;
        placeholder.innerHTML = out;
    }
    function fillTableP(data) {
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
                "<tr>"
                    +"<td id=classname"+ i + '>' +  data[items]["classID"]+ "</td>"
                    +"<td>" + data[items]["teacherName"] + "</td>"
                    +"<td>" + data[items]["classTime"] + "</td>"
                    +"<td>" + data[items]["enrolledNum"] + "/"+ data[items]["maxEnrollment"] + "</td>"
                    +"<td><button id=roster"+i+ " onclick=getRoster" +i+ "()" +">Look At Roster</button></td>"
                +"</tr>";
            i++;

        }
        tracker = i;
        placeholder.innerHTML = out;
    }
    function fillTableG(data) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
          out +=
                `<tr>
                    <td style='font-weight: bold;'>Class</td>
                    <td style='font-weight: bold;'>Student</td>
                    <td style='font-weight: bold;'>Grade</td>
                    <td style='font-weight: bold;'>Change</td>
                </tr>`;
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
                    <td id=username`+ i+ '>'  + data[items]["userID"] + `</td>
                    <td contenteditable="true" id=grades` + i+'>'  + data[items]["grade"] + ` </td>
                    <td>` + "<input class=contentBTT type='image' src=https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Button_Icon_Violet.svg/1200px-Button_Icon_Violet.svg.png onclick=changeGrade"+ i+ "()>"+` </td>
                </tr>`;
            i++;

        }
        tracker = i;
        placeholder.innerHTML = out;
    }

    async function getRoster0() {
        var Cn
        Cn = document.getElementById("classname0").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster1() {
        var Cn
        Cn = document.getElementById("classname1").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster2() {
        var Cn
        Cn = document.getElementById("classname2").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster3() {
        var Cn
        Cn = document.getElementById("classname3").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster4() {
        var Cn
        Cn = document.getElementById("classname4").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster5() {
        var Cn
        Cn = document.getElementById("classname5").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster6() {
        var Cn
        Cn = document.getElementById("classname6").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster7() {
        var Cn
        Cn = document.getElementById("classname7").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster8() {
        var Cn
        Cn = document.getElementById("classname8").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster9() {
        var Cn
        Cn = document.getElementById("classname9").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster10() {
        var Cn
        Cn = document.getElementById("classname10").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster11() {
        var Cn
        Cn = document.getElementById("classname11").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster12() {
        var Cn
        Cn = document.getElementById("classname12").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster13() {
        var Cn
        Cn = document.getElementById("classname13").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster14() {
        var Cn
        Cn = document.getElementById("classname14").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster15() {
        var Cn
        Cn = document.getElementById("classname15").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster16() {
        var Cn
        Cn = document.getElementById("classname16").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster17() {
        var Cn
        Cn = document.getElementById("classname17").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster18() {
        var Cn
        Cn = document.getElementById("classname18").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster19() {
        var Cn
        Cn = document.getElementById("classname19").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster20() {
        var Cn
        Cn = document.getElementById("classname20").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster21() {
        var Cn
        Cn = document.getElementById("classname21").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster22() {
            var Cn
            Cn = document.getElementById("classname22").innerHTML

            param = {
                "classname": Cn
            };
            res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(param)
            })

                .then((response) => response.json())
                .then((data) => fillTableG(data))
        }
    async function getRoster23() {
            var Cn
            Cn = document.getElementById("classname23").innerHTML

            param = {
                "classname": Cn
            };
            res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(param)
            })

                .then((response) => response.json())
                .then((data) => fillTableG(data))
        }
    async function getRoster24() {
            var Cn
            Cn = document.getElementById("classname24").innerHTML

            param = {
                "classname": Cn
            };
            res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(param)
            })

                .then((response) => response.json())
                .then((data) => fillTableG(data))
        }
    async function getRoster25() {
            var Cn
            Cn = document.getElementById("classname25").innerHTML

            param = {
                "classname": Cn
            };
            res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(param)
            })

                .then((response) => response.json())
                .then((data) => fillTableG(data))
        }
    async function getRoster26() {
            var Cn
            Cn = document.getElementById("classname26").innerHTML

            param = {
                "classname": Cn
            };
            res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(param)
            })

                .then((response) => response.json())
                .then((data) => fillTableG(data))
        }
    async function getRoster27() {
            var Cn
            Cn = document.getElementById("classname27").innerHTML

            param = {
                "classname": Cn
            };
            res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(param)
            })

                .then((response) => response.json())
                .then((data) => fillTableG(data))
        }
    async function getRoster28() {
            var Cn
            Cn = document.getElementById("classname28").innerHTML

            param = {
                "classname": Cn
            };
            res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(param)
            })

                .then((response) => response.json())
                .then((data) => fillTableG(data))
        }
    async function getRoster29() {
            var Cn
            Cn = document.getElementById("classname29").innerHTML

            param = {
                "classname": Cn
            };
            res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(param)
            })

                .then((response) => response.json())
                .then((data) => fillTableG(data))
        }
    async function getRoster30() {
            var Cn
            Cn = document.getElementById("classname30").innerHTML

            param = {
                "classname": Cn
            };
            res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(param)
            })

                .then((response) => response.json())
                .then((data) => fillTableG(data))
        }
    async function getRoster31() {
        var Cn
        Cn = document.getElementById("classname1").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster32() {
        var Cn
        Cn = document.getElementById("classname2").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster33() {
        var Cn
        Cn = document.getElementById("classname3").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster34() {
        var Cn
        Cn = document.getElementById("classname4").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster35() {
        var Cn
        Cn = document.getElementById("classname5").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster36() {
        var Cn
        Cn = document.getElementById("classname6").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster37() {
        var Cn
        Cn = document.getElementById("classname7").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster38() {
        var Cn
        Cn = document.getElementById("classname8").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster39() {
        var Cn
        Cn = document.getElementById("classname9").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster40() {
        var Cn
        Cn = document.getElementById("classname10").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster41() {
        var Cn
        Cn = document.getElementById("classname11").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster42() {
        var Cn
        Cn = document.getElementById("classname12").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster43() {
        var Cn
        Cn = document.getElementById("classname13").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster44() {
        var Cn
        Cn = document.getElementById("classname14").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster45() {
        var Cn
        Cn = document.getElementById("classname15").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster46() {
        var Cn
        Cn = document.getElementById("classname16").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster47() {
        var Cn
        Cn = document.getElementById("classname17").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster48() {
        var Cn
        Cn = document.getElementById("classname18").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }
    async function getRoster49() {
        var Cn
        Cn = document.getElementById("classname19").innerHTML

        param = {
            "classname": Cn
        };
        res = fetch('http://127.0.0.1:5000/'+Cn+'/studentGrades', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })

            .then((response) => response.json())
            .then((data) => fillTableG(data))
    }


    async function changeGrade0() {
        username = document.getElementById("username0").innerHTML
        grades= parseFloat(document.getElementById("grades0").innerHTML)
        classname = document.getElementById("classname0").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade1() {
        username = document.getElementById("username1").innerHTML
        grades= parseFloat(document.getElementById("grades1").innerHTML)
        classname = document.getElementById("classname1").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade2() {
        username = document.getElementById("username2").innerHTML
        grades= parseFloat(document.getElementById("grades2").innerHTML)
        classname = document.getElementById("classname2").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade3() {
        username = document.getElementById("username3").innerHTML
        grades= parseFloat(document.getElementById("grades3").innerHTML)
        classname = document.getElementById("classname3").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade4() {
        username = document.getElementById("username4").innerHTML
        grades= parseFloat(document.getElementById("grades4").innerHTML)
        classname = document.getElementById("classname4").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade5() {
        username = document.getElementById("username5").innerHTML
        grades= parseFloat(document.getElementById("grades5").innerHTML)
        classname = document.getElementById("classname5").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade6() {
        username = document.getElementById("username6").innerHTML
        grades= parseFloat(document.getElementById("grades6").innerHTML)
        classname = document.getElementById("classname6").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade7() {
        username = document.getElementById("username7").innerHTML
        grades= parseFloat(document.getElementById("grades7").innerHTML)
        classname = document.getElementById("classname7").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade8() {
        username = document.getElementById("username8").innerHTML
        grades= parseFloat(document.getElementById("grades8").innerHTML)
        classname = document.getElementById("classname8").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade9() {
        username = document.getElementById("username9").innerHTML
        grades= parseFloat(document.getElementById("grades9").innerHTML)
        classname = document.getElementById("classname9").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade10() {
        username = document.getElementById("username10").innerHTML
        grades= parseFloat(document.getElementById("grades10").innerHTML)
        classname = document.getElementById("classname10").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade11() {
        username = document.getElementById("username0").innerHTML
        grades= parseFloat(document.getElementById("grades0").innerHTML)
        classname = document.getElementById("classname0").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade12() {
        username = document.getElementById("username1").innerHTML
        grades= parseFloat(document.getElementById("grades1").innerHTML)
        classname = document.getElementById("classname1").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade13() {
        username = document.getElementById("username2").innerHTML
        grades= parseFloat(document.getElementById("grades2").innerHTML)
        classname = document.getElementById("classname2").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade14() {
        username = document.getElementById("username3").innerHTML
        grades= parseFloat(document.getElementById("grades3").innerHTML)
        classname = document.getElementById("classname3").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade15() {
        username = document.getElementById("username4").innerHTML
        grades= parseFloat(document.getElementById("grades4").innerHTML)
        classname = document.getElementById("classname4").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade16(){
        username = document.getElementById("username5").innerHTML
        grades= parseFloat(document.getElementById("grades5").innerHTML)
        classname = document.getElementById("classname5").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade17()  {
        username = document.getElementById("username6").innerHTML
        grades= parseFloat(document.getElementById("grades6").innerHTML)
        classname = document.getElementById("classname6").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade18() {
        username = document.getElementById("username7").innerHTML
        grades= parseFloat(document.getElementById("grades7").innerHTML)
        classname = document.getElementById("classname7").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade19() {
        username = document.getElementById("username8").innerHTML
        grades= parseFloat(document.getElementById("grades8").innerHTML)
        classname = document.getElementById("classname8").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade20() {
        username = document.getElementById("username9").innerHTML
        grades= parseFloat(document.getElementById("grades9").innerHTML)
        classname = document.getElementById("classname9").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }

    async function changeGrade21() {
        username = document.getElementById("username0").innerHTML
        grades= parseFloat(document.getElementById("grades0").innerHTML)
        classname = document.getElementById("classname0").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade22() {
        username = document.getElementById("username1").innerHTML
        grades= parseFloat(document.getElementById("grades1").innerHTML)
        classname = document.getElementById("classname1").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade23() {
        username = document.getElementById("username2").innerHTML
        grades= parseFloat(document.getElementById("grades2").innerHTML)
        classname = document.getElementById("classname2").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade24() {
        username = document.getElementById("username3").innerHTML
        grades= parseFloat(document.getElementById("grades3").innerHTML)
        classname = document.getElementById("classname3").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade25() {
        username = document.getElementById("username4").innerHTML
        grades= parseFloat(document.getElementById("grades4").innerHTML)
        classname = document.getElementById("classname4").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade26() {
        username = document.getElementById("username5").innerHTML
        grades= parseFloat(document.getElementById("grades5").innerHTML)
        classname = document.getElementById("classname5").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade27() {
        username = document.getElementById("username6").innerHTML
        grades= parseFloat(document.getElementById("grades6").innerHTML)
        classname = document.getElementById("classname6").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade28() {
        username = document.getElementById("username7").innerHTML
        grades= parseFloat(document.getElementById("grades7").innerHTML)
        classname = document.getElementById("classname7").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade29() {
        username = document.getElementById("username8").innerHTML
        grades= parseFloat(document.getElementById("grades8").innerHTML)
        classname = document.getElementById("classname8").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade30() {
        username = document.getElementById("username9").innerHTML
        grades= parseFloat(document.getElementById("grades9").innerHTML)
        classname = document.getElementById("classname9").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }


    async function changeGrade31() {
        username = document.getElementById("username1").innerHTML
        grades= parseFloat(document.getElementById("grades1").innerHTML)
        classname = document.getElementById("classname1").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade32() {
        username = document.getElementById("username2").innerHTML
        grades= parseFloat(document.getElementById("grades2").innerHTML)
        classname = document.getElementById("classname2").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade33() {
        username = document.getElementById("username3").innerHTML
        grades= parseFloat(document.getElementById("grades3").innerHTML)
        classname = document.getElementById("classname3").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade34() {
        username = document.getElementById("username4").innerHTML
        grades= parseFloat(document.getElementById("grades4").innerHTML)
        classname = document.getElementById("classname4").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade35() {
        username = document.getElementById("username5").innerHTML
        grades= parseFloat(document.getElementById("grades5").innerHTML)
        classname = document.getElementById("classname5").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade36() {
        username = document.getElementById("username6").innerHTML
        grades= parseFloat(document.getElementById("grades6").innerHTML)
        classname = document.getElementById("classname6").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade37() {
        username = document.getElementById("username7").innerHTML
        grades= parseFloat(document.getElementById("grades7").innerHTML)
        classname = document.getElementById("classname7").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade38() {
        username = document.getElementById("username8").innerHTML
        grades= parseFloat(document.getElementById("grades8").innerHTML)
        classname = document.getElementById("classname8").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade39() {
        username = document.getElementById("username9").innerHTML
        grades= parseFloat(document.getElementById("grades9").innerHTML)
        classname = document.getElementById("classname9").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade40() {
        username = document.getElementById("username10").innerHTML
        grades= parseFloat(document.getElementById("grades10").innerHTML)
        classname = document.getElementById("classname10").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }


    async function changeGrade41() {
        username = document.getElementById("username1").innerHTML
        grades= parseFloat(document.getElementById("grades1").innerHTML)
        classname = document.getElementById("classname1").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade42() {
        username = document.getElementById("username2").innerHTML
        grades= parseFloat(document.getElementById("grades2").innerHTML)
        classname = document.getElementById("classname2").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade43() {
        username = document.getElementById("username3").innerHTML
        grades= parseFloat(document.getElementById("grades3").innerHTML)
        classname = document.getElementById("classname3").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade44() {
        username = document.getElementById("username4").innerHTML
        grades= parseFloat(document.getElementById("grades4").innerHTML)
        classname = document.getElementById("classname4").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade45() {
        username = document.getElementById("username5").innerHTML
        grades= parseFloat(document.getElementById("grades5").innerHTML)
        classname = document.getElementById("classname5").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade46() {
        username = document.getElementById("username6").innerHTML
        grades= parseFloat(document.getElementById("grades6").innerHTML)
        classname = document.getElementById("classname6").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade47() {
        username = document.getElementById("username7").innerHTML
        grades= parseFloat(document.getElementById("grades7").innerHTML)
        classname = document.getElementById("classname7").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade48() {
        username = document.getElementById("username8").innerHTML
        grades= parseFloat(document.getElementById("grades8").innerHTML)
        classname = document.getElementById("classname8").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
    }
    async function changeGrade49() {
        username = document.getElementById("username9").innerHTML
        grades= parseFloat(document.getElementById("grades9").innerHTML)
        classname = document.getElementById("classname9").innerHTML
        console.log(username)
        console.log(grades)
        console.log(classname)
        param = {
            "classID": classname,
            "userID": username,
            "grade": grades
        };

        res = fetch('http://127.0.0.1:5000/editGrade', {
            method: 'PUT',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
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
    async function enrollS11() {
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
    async function enrollS12() {
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
    async function enrollS13() {
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
    async function enrollS14() {
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
    async function enrollS15() {
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
    async function enrollS16() {
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
    async function enrollS17() {
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
    async function enrollS18() {
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
    async function enrollS19() {
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
    async function enrollS20() {
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
    async function enrollS22() {
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
    async function enrollS23() {
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
    async function enrollS24() {
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
    async function enrollS25() {
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
    async function enrollS26() {
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
    async function enrollS27() {
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
    async function enrollS28() {
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
    async function enrollS29() {
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
    async function enrollS30() {
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
    async function enrollS31() {
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
    async function enrollS32() {
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
    async function enrollS33() {
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
    async function enrollS34() {
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
    async function enrollS35() {
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
    async function enrollS36() {
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
    async function enrollS37() {
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
    async function enrollS38() {
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
    async function enrollS39() {
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
    async function enrollS40() {
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
    async function enrollS41() {
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
    async function enrollS42() {
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
    async function enrollS43() {
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
    async function enrollS44() {
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
    async function enrollS45() {
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
    async function enrollS46() {
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
    async function enrollS47() {
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
    async function enrollS48() {
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
    async function enrollS49() {
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
    async function unenrollS11() {
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
    async function unenrollS12() {
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
    async function unenrollS13() {
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
    async function unenrollS14() {
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
    async function unenrollS15() {
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
    async function unenrollS16() {
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
    async function unenrollS17() {
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
    async function unenrollS18() {
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
    async function unenrollS19() {
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
    async function unenrollS20() {
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
    async function unenrollS21() {
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
    async function unenrollS22() {
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
    async function unenrollS23() {
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
    async function unenrollS24() {
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
    async function unenrollS25() {
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
    async function unenrollS26() {
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
    async function unenrollS27() {
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
    async function unenrollS28() {
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
    async function unenrollS29() {
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
    async function unenrollS30() {
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
    async function unenrollS31() {
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
    async function unenrollS32() {
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
    async function unenrollS33() {
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
    async function unenrollS34() {
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
    async function unenrollS35() {
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
    async function unenrollS36() {
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
    async function unenrollS37() {
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
    async function unenrollS38() {
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
    async function unenrollS39() {
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
    async function unenrollS40() {
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
    async function unenrollS41() {
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
    async function unenrollS42() {
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
    async function unenrollS43() {
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
    async function unenrollS44() {
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
    async function unenrollS45() {
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
    async function unenrollS46() {
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
    async function unenrollS47() {
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
    async function unenrollS48() {
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
    async function unenrollS49() {
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