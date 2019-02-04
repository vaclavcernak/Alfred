<?php
// My modifications to mailer script from:
// http://blog.teamtreehouse.com/create-ajax-contact-form
// Added input sanitizing to prevent injection

// Only process POST reqeusts.
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and remove whitespace.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $phone = trim($_POST["phone"]);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Check that data was sent to the mailer.
    if ( empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo "Vyskytl se problém s odesláním formuláře. Zkuste ho, prosím, vyplnit  ještě jednou.";
        exit;
    }

    // Set the recipient email address.
    // FIXME: Update this to your desired email address.
    $recipient = "vaclav.cernak@previo.cz";

    // Set the email subject.
    $subject = "Kontakt | Alfred microsite";

    // Build the email content.
    $email_content = "Jméno: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Telefon: $phone\n\n";
    $email_content .= "Zpráva:\n$message\n";

    // Build the email headers.
    $email_headers = "From: $name <$email> \r\n";
    $email_headers .= "MIME-Version: 1.0\r\n";
    $email_headers .= "Content-type: text/plain; charset=utf-8 \r\n";
    $email_headers .= "Content-Transfer-Encoding: 8bit";

    // Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "Formulář byl úspěšně odeslán. Děkujeme";
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Je nám líto, ale formulář se nepodařilo odeslat.";
    }

} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "Vyskytl se problém s odesláním formuláře. Zkuste to, prosím, znovu.";
}

?>
