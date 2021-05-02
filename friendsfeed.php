<!DOCTYPE html>
<html>
<head>
    <script type = "text/javascript" src="friendsfeed.js"></script>  
	<title>Coffee Shops Feed</title>
	<link href="friendsfeed.css" rel="stylesheet" type = "text/css">
    
</head>
<body>
    <div>
        <!-- Title of Page -->
        <header>
            <div class = "container">
                <h1>Friends feed</h1>
            </div>
        </header>

        <!-- Profile logo -->
        <div class="dropdown" style="float:right; padding-right: 3vw; margin-top: -8vh;">
            <img src="pictures/profile.png" class="profileLogo">
            <div class="dropdown-content">
              <a href="profile.html">Profile</a>
              <a href="welcome.html">Sign Out</a>
            </div>
          </div>

        <!-- Navigation bar -->
        <div class="navbar">
            <div>
                <img src= "pictures/logo.png" class="logo">
            </div>
		    <div class = "explore">
                <a href="home.html" style= "text-decoration: none; color: #EFE0BB;">explore</a>
            </div>
            <div class = "friends">
                <a href="friendsfeed.html" style= "text-decoration: none; color: #C7934E;">friends</a>
            </div>
            
        </div>

        <!--Create post Button-->
        <!-- <button class="open-button" onclick="openForm()">Open Form</button> -->
        <div class = "post-creation">
            <img src="pictures/post-creation-icon.png" onclick="openForm()">
        </div>

        <div class="form-popup" id="myForm">
            <form method="post" class="form-container">
                <h1>Post Creation</h1>

                <!-- <label for="email"><b>Visibility: All friends</b></label> -->
                <input type="text" placeholder="Write here..." name="textdata" required>

                <button type="submit" class="btn">Send</button>
                <button type="button" class="btn cancel" onclick="closeForm()">Cancel</button>
            </form>
        </div>

        <script>
            function openForm() {
            document.getElementById("myForm").style.display = "block";
            }

            function closeForm() {
            document.getElementById("myForm").style.display = "none";
            }
        </script>

        <!-- Post 1 -->
        
        <div class = "container">
            <div class = "post">
                
<html>
<body>

<div id="result"></div>

    

</body>
</html>

                <div>
                    <a href = "profile.html" style = "text-decoration: none;">
                        <h2>Nicholas Soliman</h2>
                    </a>
                    <span>10 minutes ago...</span>
                </div>
                <div>
                    <p>Just visited Carport and the coffee was soooo good! It was also reasonably priced. I hate spending $7+ dollars on coffee, but I got a wonderful house brew for only $3! I highly recommend to anyone in the area :)</p>
                    <div><p style="text-decoration: none; color: #EFE0BB;"><iframe src="data.txt" frameborder=0 ></iframe></p></div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
<?php
              
if(isset($_POST['textdata']))
{
$data=$_POST['textdata'];
$fp = fopen('data.txt', 'a');
$datanew = $data . "\n";
fwrite($fp, $datanew);
fclose($fp);
}
?>
