<?php


    // Gather the posted form variables into local PHP variables
    $senderName = $_REQUEST["inputName"];
    $senderEmail = $_REQUEST["inputEmail"];
    $senderTelno = $_REQUEST["inputPhone"];
    $senderCheckbox = $_REQUEST["select"];
    $senderMessage = $_REQUEST["message"];

    // Make sure certain vars are present or else we do not send email yet
    if (!isset($_REQUEST["email"])) {
    header ( "Location: index.html" );
    }
    elseif (empty($senderName) || empty($senderEmail)) {
 	header( "Location: index.html" );

    } else {

        // Run any filtering here
        $senderName = strip_tags($senderName);
        $senderName = stripslashes($senderName);
        $senderTelno = strip_tags($senderTelno);
        $senderTelno = stripslashes($senderTelno);
        $senderEmail = strip_tags($senderEmail);
        $senderEmail = stripslashes($senderEmail);
        $senderMessage = strip_tags($senderMessage);
        $senderMessage = stripslashes($senderMessage);
        // End Filtering
        $email_to = "ribblevalleytyres@outlook.com";
        $email_from = "website@ribblevalleytyreandautoservices.co.uk";
        $subject = "You have a message from your website";
        // Begin Email Message Body
        $message = "
        $senderName
        $senderEmail
        $senderTelno
        $senderMessage
        $senderCheckbox
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

    } // close the else condition
?>
