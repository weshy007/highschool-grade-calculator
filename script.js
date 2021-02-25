function getmarks() {

    var maths = Number(document.getElementById("maths").value);
    var english = Number(document.getElementById("english").value);
    var kiswahili = Number(document.getElementById("kiswahili").value);
    var chemistry = Number(document.getElementById("chemistry").value);
    var biology = Number(document.getElementById("biology").value);
    var geography = Number(document.getElementById("geography").value);
    var cre = Number(document.getElementById("religion").value);
    var business = Number(document.getElementById("business").value);

    var totalMarks = 800;
    var MarksObtained = maths + english + kiswahili + chemistry + biology + geography + cre + business;
    var percentage = (MarksObtained / totalMarks) * 100;
    var grade = "";
    document.getElementById("percentage").innerHTML = percentage + "%"

    if (percentage > 80) {
        grade = "A";
    } 
    else if (percentage < 79.99 && percentage > 75) {
        grade = "A-";
    } 
    else if (percentage < 74.99 && percentage > 70) {
        grade = "B+";
    } 
    else if (percentage < 69.99 && percentage > 65) {
        grade = "B";
    } 
    else if (percentage < 64.99 && percentage > 60) {
        grade = "B-";
    }
    else if (percentage < 59.99 && percentage > 55) {
        grade = "C+";
    }
    else if (percentage < 54.99 && percentage > 50) {
        grade = "C";
    }
    else if (percentage < 49.99 && percentage > 45) {
        grade = "C-";
    }
    else if (percentage < 44.99 && percentage > 40) {
        grade = "D+";
    }
    else if (percentage < 39.99 && percentage > 35) {
        grade = "D";
    }
    else if (percentage < 34.99 && percentage > 30) {
        grade = "D-";
        }
    else if (percentage < 29.99) {
        grade = "E";
    }

    document.getElementById("grade").innerHTML = grade;
    if (percentage < 29.99) {
        document.getElementById("pass").innerHTML = "Sorry! you failed! Please try next time";
    }
    else if (percentage > 30 && percentage < 49.99) {
        document.getElementById("pass").innerHTML = "You have to put more effort next time";
    }
    else if ( percentage > 50 && percentage < 74.99) {
    document.getElementById("pass").innerHTML = "You have passed! Keep pushing";
    }
    else if ( percentage > 75){
        document.getElementById("pass").innerHTML = "Congratulations! you have passed with flying colors!";
    }

}