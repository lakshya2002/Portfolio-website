<?php
$name = $_POST['Name'];
$visitors_mail = $_POST['Email'];
$message = $_POST['Message'];

$email_from = "lakshya29.verma@gmail.com";
$email_subject = "New Form Submission";
$email_body = "User_name: $name.\n".
              "user_email: $visitors_mail.\n".
              "user Message: $message.\n";

$to = "heoraj634@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-to: $visitors_mail \r\n"; // Use the concatenation operator (.=) to append headers

mail($to, $email_subject, $email_body, $headers); // Added the missing semicolon

header("Location: index.html"); // Also removed the space after "Location" in the header function call
?>
