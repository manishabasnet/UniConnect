document.addEventListener("DOMContentLoaded", () => {
    const skillSearchInput = document.getElementById("skill-search");
    const recommendationsContainer = document.getElementById("recommendations"); // You'll need to create this container in your HTML

    skillSearchInput.addEventListener("input", () => {
        const searchQuery = skillSearchInput.value;

        // Clear previous recommendations
        recommendationsContainer.innerHTML = '';

        // Send an AJAX request to your server (replace with actual server URL)
        fetch(`/search?skill=${searchQuery}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    data.forEach((profile) => {
                        const profileCard = createProfileCard(profile);
                        recommendationsContainer.appendChild(profileCard);
                    });
                } else {
                    recommendationsContainer.innerHTML = '<p>No profiles found.</p>';
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });

    function createProfileCard(profile) {
        // Create a card to display a recommended profile
        const card = document.createElement("div");
        card.classList.add("profile-card");

        // Add profile information, e.g., name and points
        card.innerHTML = `
            <h3>${profile.name}</h3>
            <p>Points: ${profile.points}</p>
        `;

        return card;
    }
});
