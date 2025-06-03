<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid request data']);
    exit;
}

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$subject = $data['subject'] ?? '';
$message = $data['message'] ?? '';

// Email headers
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: " . $email . "\r\n";

// Email content
$htmlMessage = "
<div style='font-family: Arial, sans-serif; padding: 20px; max-width: 600px;'>
    <h2 style='color: #333;'>New Contact Form Message</h2>
    <div style='margin: 20px 0;'>
        <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Subject:</strong> " . htmlspecialchars($subject) . "</p>
        <p><strong>Message:</strong></p>
        <p style='white-space: pre-wrap;'>" . htmlspecialchars($message) . "</p>
    </div>
</div>";

// Send email
$success = mail(
    "support@doingabsolutezeroeffort.com",
    "New Contact Form Message: " . $subject,
    $htmlMessage,
    $headers
);

if ($success) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to send email']);
} 