<?php

	$Password = 'nhswest1'; // Set your password here

	/******************************************************************************/
	   if (isset($_POST['submit_pwd'])){
	      $pass = isset($_POST['passwd']) ? $_POST['passwd'] : '';
	      
	      if ($pass != $Password) {
	         showForm("Wrong password");
	         exit();     
	      }
	   } else {
	      showForm();
	      exit();
	   }
	   
	function showForm($error="LOGIN"){
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">
<html>
<head>
   <title>Micro Protector</title>
   <link href="style/style.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <div id="main">
      <div class="caption"><?php echo $error; ?></div>
      <div id="icon">&nbsp;</div>
      <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" name="pwd">
        Password:
        <table>
          <tr><td><input class="text" name="passwd" type="password"/></td></tr>
          <tr><td align="center"><br/>
             <input class="text" type="submit" name="submit_pwd" value="Login"/>
          </td></tr>
        </table>  
      </form>
   </div>
</body>       

<?php   
}
?>

------
Name: this is a test
Mobile: this is a test
Address: this is a test
Email: this is a test
------
Name: testing
Mobile: testing
Address: testing
Email: testing
------
Name: test
Mobile: test
Address: test
Email: test
------
Name: testing
<br />Mobile: testing
<br />Address: testing
Email: testing
------
Name: testing
<br />Mobile: testing
<br />Address: testing
<br />Email: testing
<br />------
<br />Name: this is last test
<br />Mobile: this is last test
<br />Address: this is last test
<br />Email: this is last test
<br />------
<br />