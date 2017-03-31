<?php
  // We have POST request
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST["name"];
    $mobile = $_POST["mobile"];
    $address = $_POST["address"];
    $email = $_POST["email"];
    
    $txt = "Name: $name\nMobile: $mobile\nAddress: $address\nEmail: $email\n------\n";
    echo "Saved";
    file_put_contents('results.txt', $txt, FILE_APPEND | LOCK_EX);
    
    die();
  }
?>

<!DOCTYPE HTML>

<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>	NHS Leeds</title>
		<link rel="stylesheet" type="text/css" href="assets/css/styles.css">
	</head>
	<body>
		<a href="https://www.nhs.uk/oneyou/how-are-you/" class="skip"> Skip </a>
		<section class="quiz">
			<h1>Take the quiz! </h1>		
		    <form method="post" id="quiz" name="quiz">
		        <fieldset>
		        	<legend>  Keep in touch </legend>

		        	<span>
			            <label for="name" class="firstRow">Name:</label>
			            <input type="text" id="name" name="name" placeholder="Enter your full name" />

			            <label for="mobile" class="mobile secondRow">Mobile:</label>
			            <input type="text" id="mobile" name="mobile" placeholder="Enter your mobile" />
			        </span>
			        <span>
			        	<label for="address" class="firstRow">Address:</label>
			            <textarea id="address" name="address" placeholder="Type your address" cols="40" rows="3"></textarea>

			            <label for="email" class="secondRow">Email:</label>
			            <input type="email" id="email" name="email" placeholder="Enter your email address" />	           
			        </span>   

			        <span class="confirmation"> 
			        	<p> Thanks! We’ll be in touch soon. </p>
			        </span>
		            <input type="submit" value="Start" class="submit" />
		        </fieldset>
		    </form>
		
			<article>
				<p> The NHS in Leeds would like to keep in touch with you so that we can provide the latest news and give you a chance to have a say on the way we plan and fund (commission) services.  </p>
				<p> Your information will be held securely by the NHS according to the latest data protection laws and our own information governance policies. We will not share your details with any third parties. </p>
			</article>
			<img src="assets/images/oneyou.png" title="" class="oneYou" />
			<img src="assets/images/screensaver/Leeds-West-CCG-Logo.png" title="" class="logo-leeds-index" />	
		</section>
		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/jquery.validate.min.js"></script>		
		<script src="assets/js/validation.js"></script>
	</body>
</html>