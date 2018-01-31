<?php
 

    // Gather the posted form variables into local PHP variables
    $senderName = $_REQUEST["username"];
    $senderEmail = $_REQUEST["email"];
    $senderTelno = $_REQUEST["telno"];
    $senderMsg = $_REQUEST["msg"];
    $senderCheckbox = $_REQUEST["horb[]"];
    $senderTimeofday = $_REQUEST["TofD"];
    // Make sure certain vars are present or else we do not send email yet
    if (!isset($_REQUEST["email"])) {
    header ( "Location: carscratchrepaircontact.html" );
    }
    elseif (empty($senderName) || empty($senderEmail)) {
 	header( "Location: error.html" );
          
    } else { 

        // Run any filtering here
        $senderName = strip_tags($senderName);
        $senderName = stripslashes($senderName);
        $senderEmail = strip_tags($senderEmail);
        $senderEmail = stripslashes($senderEmail);
        $senderMessage = strip_tags($senderMessage);
        $senderMessage = stripslashes($senderMessage);
        // End Filtering
        $email_to = "info@carrepairpreston.co.uk";         
        $email_from = "website@carrepairpreston.co.uk";
        $subject = "You have a message from your website";
        // Begin Email Message Body
        $message = "
        $senderName
        $senderEmail
        $senderTelno
        $senderMsg
        $senderCheckbox
        $senderTimeofday
        ";
        // Set headers configurations
        $headers  = "MIME-Version: 1.0" . "\r\n";
        $headers  = "Content-type: text/html;charset=iso-8859-1 .\r\n";
        $headers  = "Name: $senderName\r\n";	
        $headers  = "Email: $senderEmail\r\n";
        $headers  = "Message: $senderMessage\r\n";	
// Mail it now using PHP's mail function
        ini_set("sendmail_from", $email_from);
	mail ($email_to, $subject, $message, $headers,"-f". $email_from);
               header( "Location: thankyou.html" );
    } // close the else condition
?>