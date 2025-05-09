<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"] ?? "");
    $email = htmlspecialchars($_POST["email"] ?? "");
    $phone = htmlspecialchars($_POST["phone"] ?? "");
    $message = htmlspecialchars($_POST["message"] ?? "");

    // Email sending example (you can customize this)
    $to = "info@bookpublishersus.com";  // Replace with your receiving email
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        http_response_code(500);
        echo "Failed to send message.";
    }
} else {
    http_response_code(403);
    echo "Access Denied";
}
?>