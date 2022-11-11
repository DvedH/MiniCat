$.ajax({
            url: "whatever you want here",
            success: function (data){
                const blockOfText = JSON.stringify(data, null, 4);
                $("#gradeTable tbody tr").remove();
                console.log(Object.keys(data));
                console.log(Object.values(data));
                var student = '';
                $.each(data, function(key, value){
                    //Initialize a new row
                    student += '<tr>'
                    student += '<td>' + key + '</td>';
                    student += '<td>' + value + '</td>';
                    student +=  '<\tr>'
                });
                $('#gradeTable').append(student);
            }
        });
/*async function loadIntoTable(url, table) {
    tableHead = table.querySelector("thead");
    tableBody = table.querySelector("tbody");    

    response = await fetch(url);
    const { headers, rows} = await response.json();

}

loadIntoTable("./classes.json", document.querySelector("table"));*/