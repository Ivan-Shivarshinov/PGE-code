<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recaptcha_secret = "6LeqQD4qAAAAAOOW6FGRW6VBt4V4yDyaiDBBMVgc";
    $response = $_POST["g-recaptcha-response"];
    $verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$recaptcha_secret}&response={$response}");
    $captcha_success = json_decode($verify);

    if ($captcha_success->success == false) {
        http_response_code(400);
        echo "Пожалуйста, пройдите проверку reCAPTCHA.";
        exit;
    }

    $firstName = $_POST['firstName'] ?? 'Не указано';
    $lastName = $_POST['lastName'] ?? 'Не указано';
    $email = $_POST['email'] ?? 'Не указано';
    $phone = $_POST['phone'] ?? 'Не указано';
    $company = $_POST['company'] ?? 'Не указано';
    $task = $_POST['task'] ?? 'Не указано';
    
    $to = "zakaz@pge.su";
    $subject = "Новая заявка с сайта";
    
    $message = "Имя: $firstName\n";
    $message .= "Фамилия: $lastName\n";
    $message .= "Email: $email\n";
    $message .= "Номер телефона: $phone\n";
    $message .= "Название компании: $company\n";
    $message .= "Описание задачи:\n$task";
    
    $headers = "From: info@pge.su\r\n"; 
    $headers .= "Reply-To: $email\r\n";
    
    if(mail($to, $subject, $message, $headers)) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
} else {
    http_response_code(405);
}