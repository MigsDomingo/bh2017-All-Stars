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
			<div style="display:none"class="move2 col-sm-10 col-sm-offset-1">
				<button class="move-back btn btn-default col-sm-10 col-sm-offset-2">back</button>

									<br>
									<br>
									<br>
				<form class="form-horizontal">
				  <div class="form-group">
				    <label class="control-label col-sm-2">Password</label>
				    <div class="col-sm-10">
				    	<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
				    </div>
				  </div>
				  <div class="col-sm-offset-2">
				  	<button type="submit" class="btn btn-primary">Submit</button>
				  </div>
				</form>
			</div>
		</div>
		
		<div class="row">
			<!--LEFT-->
			<div class="col-sm-6 no-padding-left content-left">
				<div class="row move">
					<div class="col-sm-8 col-sm-offset-4">
						<center><button class="btn-block btn-main btn-agree" data-toggle="modal" data-target="#insertComment" style="padding:40px;">
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
				<div class="row move">
					<div class="col-sm-8">
						<center><button class="btn-block btn-main btn-disagree" style="padding:40px;">
							<h1 class="btn-txt-disagree"><b>50%</b></h1>
							<p>420 People Disagree</p>
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
	<script type="text/javascript">
	$(document).ready(function () {
    	$('.move2').hide();
		$('.btn-main').click(function(){
			$('.move').slideUp();
			$('.move2').slideDown();
		});
		$('.move-back').click(function(){
			$('.move2').slideUp();
			$('.move').slideDown();
		});
	});
			

	</script>
</body>
</html>