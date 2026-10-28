<?php

const TO_EMAIL = 'info@tolema.pl';
const FROM_EMAIL = 'info@tolema.pl';
const FROM_NAME = 'Formularz kontaktowy TOLEMA';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $code, string $status, string $message): void
{
    http_response_code($code);
    echo json_encode(['status' => $status, 'message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

function field(string $key): string
{
    return trim((string) ($_POST[$key] ?? ''));
}

function oneLine(string $value): string
{
    return trim(preg_replace('/[\r\n\t]+/', ' ', $value));
}

function encodeHeader(string $value): string
{
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, 'error', 'Niedozwolona metoda.');
}

if (field('company') !== '') {
    respond(200, 'success', 'Wiadomość została wysłana.');
}

$name = oneLine(field('name'));
$email = oneLine(field('email'));
$phone = oneLine(field('phone'));
$topic = oneLine(field('topic'));
$message = field('message');

if ($name === '' || $email === '' || $message === '') {
    respond(400, 'error', 'Uzupełnij imię, adres e-mail oraz treść wiadomości.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, 'error', 'Podaj poprawny adres e-mail.');
}

if (mb_strlen($name) > 200 || mb_strlen($phone) > 50 || mb_strlen($topic) > 200 || mb_strlen($message) > 10000) {
    respond(400, 'error', 'Wiadomość jest zbyt długa.');
}

$subject = $topic !== ''
    ? "[TOLEMA] Nowa wiadomość - $topic"
    : '[TOLEMA] Nowa wiadomość ze strony kontaktowej';

$lines = ["Imię i nazwisko: $name", "E-mail: $email"];
if ($phone !== '') {
    $lines[] = "Telefon: $phone";
}
if ($topic !== '') {
    $lines[] = "Temat: $topic";
}
$lines[] = '';
$lines[] = $message;
$body = str_replace(["\r\n", "\r"], "\n", implode("\n", $lines));

$headers = implode("\r\n", [
    'From: ' . encodeHeader(FROM_NAME) . ' <' . FROM_EMAIL . '>',
    'Reply-To: ' . encodeHeader($name) . " <$email>",
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

$sent = mail(TO_EMAIL, encodeHeader($subject), $body, $headers, '-f' . FROM_EMAIL);

if (!$sent) {
    error_log('kontakt.php: mail() failed');
    respond(500, 'error', 'Nie udało się wysłać wiadomości. Spróbuj ponownie później.');
}

respond(200, 'success', 'Dziękujemy! Wiadomość została wysłana - odezwiemy się wkrótce.');
