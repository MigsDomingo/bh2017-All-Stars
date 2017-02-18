<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<body>
<?php include("header.php"); ?>
<div class="row jumbotron">
	<div class="container padding">
		<center><h2>The metaphysics of memes is a growing field.</h2>
			<p><a href="http://memes.com">http://memes.com</a></p></center>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<!--LEFT-->
			<div class="col-sm-6 no-padding-left content-left">
				<div class="row">
					<div class="col-sm-8 col-sm-offset-4">
						<center><button class="btn-block btn-main btn-agree" style="padding:40px;">
							<h1 class="btn-txt-agree"><b>50%</b></h1>
							<p>420 People Agree</p>
						</button></center>
					</div>
				</div>
				<br><br>
				<div class="row">
					<div class="col-sm-11 col-sm-offset-1">
						<?php include("comments.php"); ?>
					</div>
				</div>	
			</div>
			<!--RIGHT-->
			<div class="col-sm-6 no-padding-right">
				<div class="row">
					<div class="col-sm-8">
						<center><button class="btn-block btn-main btn-disagree" style="padding:40px;">
							<h1 class="btn-txt-disagree"><b>50%</b></h1>
							<p>420 People Agree</p>
						</button></center>
					</div>
				</div>
				<br><br>
				<div class="row">
					<div class="col-sm-11">
						<?php include("comments.php"); ?>
					</div>
				</div>	
			</div>
		</div>
	</div>
</body>
</html>