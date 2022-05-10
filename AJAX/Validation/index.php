<!DOCTYPE html>
<html>
<head>
<link href="style.css" rel="stylesheet" type="text/css">
<script src="script.js"></script>

</head>
<body>
<div id="mainform">
<div class="innerdiv">
<!-- Required Div Starts Here -->
<h2>Form Validation Using AJAX</h2>
<form action='final.php' id="myForm" method='post' name="myForm">
<h3>Fill Your Information!</h3>
<table>
<tr>
<td>Username</td>
<td><input id='username1' name='username' onblur="validate('username', this.value)" type='text'></td>
<td>
<div id='username'></div>
</td>
</tr>
<tr>
<td>Password</td>
<td><input id='password1' name='password' onblur="validate('password', this.value)" type='password'></td>
<td>
<div id='password'></div>
</td>
</tr>
<tr>
<td>Email</td>
<td><input id='email1' name='email' onblur="validate('email', this.value)" type='text'></td>
<td>
<div id='email'></div>
</td>
</tr>
<tr>
<td>website</td>
<td><input id='website1' name='website' onblur="validate('website', this.value)" type='text'></td>
<td>
<div id='website'></div>
</td>
</tr>
</table>
<input onclick="checkForm()" type='button' value='Submit'>
</form>
</div>
<?php
$value = $_GET['query'];
$formfield = $_GET['field'];
// Check Valid or Invalid user name when user enters user name in username input field.
if ($formfield == "username") {
if (strlen($value) < 4) {
echo "Must be 3+ letters";
} else {
echo "<span>Valid</span>";
}
}
// Check Valid or Invalid password when user enters password in password input field.
if ($formfield == "password") {
if (strlen($value) < 6) {
echo "Password too short";
} else {
echo "<span>Strong</span>";
}
}
// Check Valid or Invalid email when user enters email in email input field.
if ($formfield == "email") {
if (!str_contains($value, "@gmail.com")) {

echo "Invalid email";
}
 else {
echo "<span>Valid</span>";
}
}
// Check Valid or Invalid website address when user enters website address in website input field.
if ($formfield == "website") {
if (!str_contains($value, ".com")) {
echo "Invalid website";
} else {
echo "<span>Valid</span>";
}
}
?>




</body>
</html>
