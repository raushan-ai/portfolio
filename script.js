// Function to open modal and display project details
function openModal(projectId) {
    var modal = document.getElementById('modal');
    var modalContent = document.querySelector('.modal-content');
    var project = document.getElementById(projectId);

    // Display the selected project details in the modal
    project.style.display = 'block';
    modal.style.display = 'block';

    // Close the modal if user clicks outside the modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById('modal');
    var modalContent = document.querySelector('.modal-content');
    var modalProjects = document.querySelectorAll('.modal-project');

    // Hide all modal projects
    modalProjects.forEach(function(project) {
        project.style.display = 'none';
    });

    // Close the modal
    modal.style.display = 'none';
}
