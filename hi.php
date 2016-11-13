<?php
$name1=$_POST['destination_latitude'];
$name2=$_POST['destination_longitude'];
$name3=$_POST['depart_latitude'];
$name4=$_POST['depart_longitude'];

$x = $name1 . $name2 . $name3 . $name4 ;
echo $x;

$data = array($x);
$result = shell_exec('python py/functions.py ' . escapeshellarg(json_encode($data)));
print $result;
$resultData = json_decode($result, true);

?>