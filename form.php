<?php
    if (count($_POST) > 0) {
        $name = trim($_POST['name']);
        $phone = trim($_POST['phone']);
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
        else {
//        mail("email", "My Subject", "Line\n Line 2\n Line 3");
            file_put_contents('apps.txt', "$dt $name $phone\n", FILE_APPEND);
            $msg = 'We accepted your request';
        }
    }
    else {
        $name = '';
        $phone = '';
        $msg = 'Please, input data in the fields';
    }
 ?>
 <form method="post">
    Name<br>
    <input type="text" name="name"><br>
    Phone<br>
    <input type="text" name="phone"><br>
    <input type="submit" value="Send">
 </form>
 <?php
    echo $msg;
 ?>
