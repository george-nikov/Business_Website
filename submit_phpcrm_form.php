<?php
if(ISSET($_POST))
{
	$name=$_POST['name'];
  $email=$_POST['email'];
	$phone=$_POST['phone'];
  $date=$_POST['date'];
  $time=$_POST['time'];
  $dob=$_POST['dob'];
   $surgery=$_POST['surgery'];
   $visited=$_POST['visited'];
   $exp=$_POST['exp'];
  
  

  $field1="<b>Date of appointment:</b> ".$date;
  $field2="<b>Time:</b> ".$time;
  $field3="<b>Do you require dental surgery?:</b> ".$surgery."<br>"."<b>Have you visited our dental clinic before?:</b> ".$visited."<br>"."<b>Have you experienced dental illnesses/surgeries in the past?:</b> ".$exp;
  $field4="<b>Date of Birth:</b> ".$dob;
  

}
else
{
echo "Thanks";	
exit();	
}
$Token_Key="http://127.0.0.1:5500/crm-folder"; // Located in admin section under setup
$WebURL='http://127.0.0.1:5500/crm-folder'; // CRM Url like https://www.abc.com/crm-folder
//Lead Fields
$post_data=array('name'=>$name,'phone'=>$phone,'email'=>$email, 'field_1'=>$field1."<br>".$field2."<br>".$field3."<br>".$field4);
$PHPCRM = curl_init();
curl_setopt_array($PHPCRM, array(
  CURLOPT_URL=>$WebURL.'/index.php/crm_api/leads/add_lead/'.$Token_Key,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => $post_data,
));

$response = curl_exec($PHPCRM);
curl_close($PHPCRM);
header("Location:thanks.php");
exit();
//echo $response;
?>