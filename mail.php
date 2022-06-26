<?php  
 
if(isset($_POST['submit'])) {
 $mailto = "mateusz.uranowski@onet.pl";  //My email address
 //getting customer data
 $name = $_POST['contact-name']; //getting customer name
 $fromEmail = $_POST['contact-email']; //getting customer email
 $subject = $_POST['contact-message']; //getting subject line from client
 
 //Email body I will receive
 $message = "Autor: " . $name . "\n"
 . "Treść wiadomości: " . "\n" . $_POST['contact-message'];
 
 //Email headers
 $headers = "From: " . $fromEmail; // Client email, I will receive
 
 //PHP mailer function
 
  $result1 = mail($mailto, $subject, $message, $headers); // This email sent to My address
  echo '<script>';
  echo 'console.log('. json_encode( $result1 ) .')';
  echo '</script>';
  //Checking if Mails sent successfully
 
  if ($result1) {
    $success = "Your Message was sent Successfully!";
  } else {
    $failed = "Sorry! Message was not sent, Try again Later.";
  }
 
}
 
?>