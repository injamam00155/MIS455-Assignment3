function show_tuition_fee() {

    var total_courses = parseInt(document.getElementById("studentcgpa").value);
    var tuition_fees_per_course = parseInt(document.getElementById("creditcompleted").value);

    var total_fees = total_courses * tuition_fees_per_course;
    var total_payable_fees;

    if (total_fees > 60000 || total_courses > 5) {
        total_payable_fees = ((total_fees / 100) * 20) + 1000;
    } else if (total_fees > 50000 || total_courses > 4) {
        total_payable_fees = ((total_fees / 100) * 15) + 2000;
    } else if (total_fees > 40000 || total_courses > 3) {
        total_payable_fees = ((total_fees / 100) * 10) + 3000;
    } else {
        total_payable_fees = ((total_fees / 100) * 5) + 4000;
    }

    document.getElementById("tuitionfee").innerText = "Total payable tuition fees amount: " + total_payable_fees + " " + " taka.";
}