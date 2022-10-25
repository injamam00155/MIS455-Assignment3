function show_discount_amount() {

    var name = document.getElementById("studentname").value;
    var cgpa = parseInt(document.getElementById("studentcgpa").value);
    var credits_completed = parseFloat(document.getElementById("creditcompleted").value);

    var discounted_amount;

    if (cgpa > 3.5 && credits_completed > 50) {
        discounted_amount = credits_completed * 200;
    } else if (cgpa > 3.2 && credits_completed > 40) {
        discounted_amount = credits_completed * 150;
    } else if (cgpa > 3 && credits_completed > 25) {
        discounted_amount = credits_completed * 100;
    } else {
        discounted_amount = 0;
    }

    document.getElementById("discount").innerText = "Name: " + name + " " + "CGPA: " + cgpa + " " + "Discount: " + discounted_amount + " taka.";
}