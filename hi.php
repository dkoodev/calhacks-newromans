<html>

<?php
$name1=$_POST['destination_latitude'];
$name2=$_POST['destination_longitude'];
$name3=$_POST['depart_latitude'];
$name4=$_POST['depart_longitude'];

$x = $name1 . $name2 . $name3 . $name4 ;
echo $x;


$result = shell_exec('python py/maps.py ' . escapeshellarg($x));
// echo "<script type="text/javascript"> console.log(".$result.") </script>;";
//$resultData = json_decode($result, true);


// echo $result;
?>

</html>