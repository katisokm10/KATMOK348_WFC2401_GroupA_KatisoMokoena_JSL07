// When the DOM content is loaded, execute the following code
document.addEventListener('DOMContentLoaded', function () {
    // Get references to DOM elements
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');

    // Hide the modal initially
    modal.style.display = 'none';

    // Add event listener for form submission
    cardForm.addEventListener('submit', function (e) {
        // Prevent default form submission behavior
        e.preventDefault();

        // Get input values from the form
        const studentNameInput = document.getElementById('studentName');
        const personalMessageInput = document.getElementById('personalMessage');
        const courseNameInput = document.getElementById('courseName');

        const studentName = studentNameInput.value;
        const personalMessage = personalMessageInput.value;
        const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input provided

        // Check if required fields are filled
        if (studentName.trim() === '' || personalMessage.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        // Generate certificate content dynamically
        certificateContent.innerHTML = `
            <div class="certificate">
                <h2>Certificate of Achievement</h2>
                <p>This is to certify that</p>
                <h3>${studentName}</h3>
                <p>has almost completed the</p>
                <h4>${courseName} Course</h4>
                <p>with legendary perseverance and world-class bad-assery for never giving up 🏆</p>
                <img src="logo.png" alt="Logo" width="350" height="100">
                <p>${personalMessage}</p>
            </div>
        `;

        // Display the modal
        modal.style.display = 'block';

        // Clear the form inputs
        studentNameInput.value = '';
        personalMessageInput.value = '';
        if (courseNameInput) courseNameInput.value = '';
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});
