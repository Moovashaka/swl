<?php
$emailSubject = 'Message from Ribble Valley Tyre and Auto';
$mailto = 'mrmoovashaka@gmail.com';

$nameField = $_POST ['inputName'];
$emailField = $_POST['inputEmail'];
$phoneField = $_POST ['inputPhone'];
$selectField = $_POST ['select'];
$messageField = $_POST ['message'];

$body = <<<EOD
<br><hr><br>
Name: $name <br>
Email: $email <br>
Phone: $phone <br>
Selector: $select <br>
Message: $message <br>
EOD;
$headers = "From: $emailField\r\n";
$headers .= "Content-type: text/html\r\n";

$success = mail($mailto, $emailSubject, $body, $headers);

?>
