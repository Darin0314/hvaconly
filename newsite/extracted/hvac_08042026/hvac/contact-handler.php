<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$name    = trim(strip_tags($_POST['contact_name']    ?? ''));
$company = trim(strip_tags($_POST['contact_company'] ?? ''));
$email   = trim(strip_tags($_POST['contact_email']   ?? ''));
$phone   = trim(strip_tags($_POST['contact_phone']   ?? ''));
$message = trim(strip_tags($_POST['contact_message'] ?? ''));

if (empty($name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Required fields missing']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

$to      = 'info@hvaconly.com';
$subject = 'New Contact Form Submission — HVAC Only';

$body  = "Name:    {$name}\n";
$body .= "Company: {$company}\n";
$body .= "Email:   {$email}\n";
$body .= "Phone:   {$phone}\n\n";
$body .= "Message:\n{$message}\n";

$headers  = "From: noreply@hvaconly.com\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail send failed']);
}
