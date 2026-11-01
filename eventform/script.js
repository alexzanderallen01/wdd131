const form = document.querySelector("#eventForm");
const type = document.querySelector("#type");
const eventDate = document.querySelector("#eventDate");
const studentField = document.querySelector("#studentField");
const studentId = document.querySelector("#studentId");
const guestField = document.querySelector("#guestField");
const accessCode = document.querySelector("#accessCode");
const formMessage = document.querySelector("#formMessage");
const ticketResult = document.querySelector("#ticketResult");

// Set the earliest selectable date to tomorrow.
function getLocalDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
eventDate.min = getLocalDateString(tomorrow);

// Show the correct extra field when Student or Guest is selected.
function updateTypeField() {
    studentField.hidden = true;
    guestField.hidden = true;

    studentId.required = false;
    accessCode.required = false;

    studentId.value = "";
    accessCode.value = "";

    if (type.value === "student") {
        studentField.hidden = false;
        studentId.required = true;
    } else if (type.value === "guest") {
        guestField.hidden = false;
        accessCode.required = true;
    }
}
type.addEventListener("change", updateTypeField);

// Add a line of text to the successful ticket using textContent.
function addTicketLine(elementId, text) {
    document.querySelector(elementId).textContent = text;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent = "";
    ticketResult.hidden = true;

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const selectedType = type.value;
    const selectedDate = eventDate.value;

    // Check that the chosen date is later than today.
    const today = getLocalDateString(new Date());

    if (selectedDate && selectedDate <= today) {
        formMessage.textContent = "Please choose an event date later than today.";
        return;
    }
    // Check required fields, email format, and the conditional input pattern.
    if (!form.checkValidity()) {
        if (selectedType === "student" && !studentId.validity.valid) {
            formMessage.textContent = "Student I# must be exactly 9 digits.";
        } else if (selectedType === "guest" && !accessCode.validity.valid) {
            formMessage.textContent = "Access Code must be EVENT131.";
        } else {
            formMessage.textContent = "Please complete all required fields with valid information.";
        }
        return;
    }
    // Show the ticket information after a successful submission.
    addTicketLine("#resultName", `${firstName} ${lastName}`);
    addTicketLine("#resultType", selectedType);
    addTicketLine("#resultDate", selectedDate);

    ticketResult.hidden = false;

    form.reset();
    updateTypeField();
});