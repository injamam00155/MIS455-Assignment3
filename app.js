function show_grade() {

    var name = document.getElementById("studentname").value;
    var total_mark = parseInt(document.getElementById("totalmark").value);

    var grade;

    if (total_mark >= 90) {
        grade = "A";
    } else if (total_mark >= 85 && total_mark < 90) {
        grade = "A-";
    } else if (total_mark >= 80 && total_mark < 85) {
        grade = "B+";
    } else if (total_mark >= 75 && total_mark < 80) {
        grade = "B";
    } else if (total_mark >= 70 && total_mark < 75) {
        grade = "B-";
    } else if (total_mark >= 65 && total_mark < 70) {
        grade = "C+"
    } else if (total_mark >= 60 && total_mark < 65) {
        grade = "C";
    } else if (total_mark >= 55 && total_mark < 60) {
        grade = "C-";
    } else if (total_mark >= 50 && total_mark < 55) {
        grade = "D+";
    } else if (total_mark >= 45 && total_mark < 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById("result").innerText = "Name: " + name + " " + "Grade: " + grade;
}