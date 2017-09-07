<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cafe</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css?family=Tangerine" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link href="css/materialdesignicons.min.css" media="all" rel="stylesheet" type="text/css" />
    <link href="css/materialdesignicons.min.css.map" media="all" type="text/css" />
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<?php
    if (count($_POST) > 0) {
        $name = trim($_POST['name']);
        $phone = trim($_POST['phone']);
        $email = trim($_POST['email']);
        $number = trim($_POST['number']);
        $dt = date("Y-m-d H:i:s");

        if(strlen($name) < 2) {
            $msg = 'Please, input a bigger name';
        }
        elseif(strlen($phone) < 7) {
            $msg = 'We do not know how call on phone number which have length less seven numeral';
        }
        elseif(!is_numeric($phone)) {
            $msg = 'You can input only numeral';
        }
        elseif(strlen($number) < 1 || strlen($number) > 2) {
            $msg = 'You can input only one or two numerals';
        }
        elseif(!preg_match("/^[^@\s]+@([-a-z0-9]+\.)+[a-z]{2,}$/i")) {
            $msg = 'Your mailing address is incorrect';
        }
        else {
//        mail("email", "My Subject", "Line\n Line 2\n Line 3");
            file_put_contents('apps.txt', "$dt-|-$name-|-$phone-|-$email-|-$number\n", FILE_APPEND);
            $msg = 'We accepted your request';
        }
    }
    else {
        $name = '';
        $phone = '';
        $email = '';
        $number = '';
        $msg = 'Please, input data in the fields';
    }
 ?>
 <div class="navigation">
        <div class="container">
            <div class="container-flex">
                <div class="logo">
                    <a href="index.html">Gustoso</a>
                </div>
                <div class="topMenu">
                    <a href="index.html">WELCOME</a><p>~</p><a href="ourMenu.html">MENU</a><p>~</p><a href="form.php">RESERVATIONS</a><p>~</p><a href="index.html">NEWS</a><p>~</p><a href="contact.html">CONTACT</a>
                </div>
                <div class="logoOfSocialNetwork container-flex">
                    <a href=""><i class="mdi mdi-twitter"></i></a>
                    <a href=""><i class="mdi mdi-facebook"></i></a>
                    <a href=""><i class="mdi mdi-instagram"></i></a>
                </div>
            </div>
        </div>
 </div>
 <div id="main">
   <p>Select a table suitable for you and book it</p>
 </div>
 <div id="container-flex">
     <div id="back-img">
         <div id="secondContainer">

         </div>
     </div>
     <div id="backForForm">
         <form id="reservations" method="post">
             <p>Your name<br></p>
             <input type="text" name="name"><br>
             <p>Your phone<br></p>
             <input type="text" name="phone"><br>
             <p>Your email<br></p>
             <input type="text" name="email"><br>
             <p>Table number<br></p>
             <input type="text" name="number"><br>
             <input id="send" type="submit" value="Send"><br>
             <?=$msg?>
         </form>
     </div>
 </div>
 <footer>
        <div class="container">
            <div class="container-flex">
                <div class="left-block">
                    <a href="ourMenu.html">OUR MENU</a><p>~</p><a href="gallery.html">GALLERY</a><p>~</p><a href="index.html">NEWS</a>
                </div>
                <div class="logo-block">
                    <a href="index.html">Gustoso</a>
                </div>
                <div class="right-block">
                    <a href="events.html">EVENTS</a><p>~</p><a href="form.php">RESERVATIONS</a><p>~</p><a href="contact.html">VISIT US</a>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>
