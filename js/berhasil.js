        // Button active state toggle
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
        
        // Function to switch models (change content)
        function switchModel(modelId) {
            const cardContainers = document.querySelectorAll('.card-container');
            cardContainers.forEach(container => container.style.display = 'none');
        
            document.getElementById(modelId).style.display = 'flex';
        }
        
        // Initialize model1 as default visible container
        switchModel('model1');
        
        // Modal functionality
        const modal = document.getElementById("myModal");
        const modalIframe = document.getElementById("modelIframe");
        const closeModal = document.getElementsByClassName("close")[0];
        
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function() {
                const url = this.getAttribute('data-url');
                modalIframe.src = url;
                modal.style.display = "block";
            });
        });
        
        closeModal.onclick = function() {
            modal.style.display = "none";
            modalIframe.src = "";  // Clear iframe source to stop the model loading
        }
        
        // Close the modal if the user clicks outside of it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                modalIframe.src = "";
            }
        }