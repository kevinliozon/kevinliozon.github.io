function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kevinliozonpro@gmail.com",
        Password : "F40AE6F5275E51807EAE386673651A49FF36",
        To : 'kevinliozonpro@gmail.com',
        From : "kevinliozonperso@gmail.com",
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
      message => alert(message)
    );
    }