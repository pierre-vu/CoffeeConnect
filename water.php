<!DOCTYPE html>
<html>
<head>
  <title>Store form data in .txt file</title>
</head>
<body>
  <form method="post">
    Enter Your Text Here:<br>
    <input type="text" name="textdata"><br>
    <input type="submit" name="submit">
    
  </form>
    <div><p><iframe src="data.txt" width=200 height=400 frameborder=0 ></iframe></p></div>
</body>
</html>
<?php
              
if(isset($_POST['textdata']))
{
$data=$_POST['textdata'];
$fp = fopen('data.txt', 'a');
fwrite($fp, $data);
$datanew = $data . "\n";
fwrite($fp, $datanew);
fclose($fp);
}
?>