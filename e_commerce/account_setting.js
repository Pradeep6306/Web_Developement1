
let settingsForm = document.getElementById('settings-form');


settingsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    const notifications = document.getElementById('notifications').value;
    const privacy = document.getElementById('privacy').value;

    
    console.log("Settings saved:", {
        name,
        email,
        password,
        address,
        notifications,
        privacy
    });


    alert('Your settings have been saved successfully!');
});
