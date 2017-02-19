<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<link rel="stylesheet" href="../css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="../css/style.css">
</head>
<body>
	<?php

	header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
	header("Cache-Control: no-store, no-cache, must-revalidate"); // HTTP/1.1
	header("Cache-Control: post-check=0, pre-check=0", false);
	header("Pragma: no-cache"); // HTTP/1.0
	header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");

	$host = 'localhost';
	$user = 'root';
	$pass = '';
	$db = 'AllStars';

	$con = mysqli_connect($host,$user,$pass,$db);

	/*if(!$con){
		 die("Connection Error... ".mysqli_connect_error());
	}
	else{
		echo "<h3>Connection success!</h3><br>";
	}*/
	?>
<div>
	<nav class="navbar navbar-default" role="navigation">
	<div class="container">
  <!-- Brand and toggle get grouped for better mobile display -->
  <div class="navbar-header col-md-2">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="index.php">FactSource</a>
  </div>

  <!-- Collect the nav links, forms, and other content for toggling -->
  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <div class="col-sm-5 col-md-5">
        <form class="navbar-form" role="search">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" name="q">
            <div class="input-group-btn">
                <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
            </div>
        </div>
        </form>
    </div>
    <div>
	    <ul class="nav navbar-nav navbar-right">
	      <li class="dropdown">
	        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Notifications<b class="caret"></b></a>
	        <ul class="dropdown-menu">
	          <li>asghdkfasjhdfgjaskhfgjakhsgfjkasdhgfjkashgfjkashgfjkashfgjkashgfjaskhfg</li>
	          <li><a href="#">Another action</a></li>
	          <li><a href="#">Something else here</a></li>
	          <li class="divider"></li>
	          <li><a href="#">Separated link</a></li>
	        </ul>
	      </li>
	      <li>
	        <a href="#" data-toggle="modal" data-target=".bs-register-modal-sm">Register</a>
	      </li>
		  <li>
	        <a href="#" data-toggle="modal" data-target=".bs-login-modal-sm">Login</a>
	      </li>
	    </ul>
		<div class="modal fade bs-register-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
			<div class="modal-dialog modal-sm" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel">Register</h4>
					</div>
					<div class="modal-body">
						<form role="form">
			    			<div class="row">
			    				<div class="col-xs-6 col-sm-6 col-md-6">
			    					<div class="form-group">
										<input type="text" name="first_name" id="first_name" class="form-control input-sm" placeholder="First Name">
			    					</div>
			    				</div>
			    				<div class="col-xs-6 col-sm-6 col-md-6">
			    					<div class="form-group">
			    						<input type="text" name="last_name" id="last_name" class="form-control input-sm" placeholder="Last Name">
			    					</div>
			    				</div>
			    			</div>

			    			<div class="form-group">
			    				<input type="email" name="email" id="email" class="form-control input-sm" placeholder="Email Address">
			    			</div>

			    			<div class="row">
			    				<div class="col-xs-6 col-sm-6 col-md-6">
			    					<div class="form-group">
			    						<input type="password" name="password" id="password" class="form-control input-sm" placeholder="Password">
			    					</div>
			    				</div>
			    				<div class="col-xs-6 col-sm-6 col-md-6">
			    					<div class="form-group">
			    						<input type="password" name="password_confirmation" id="password_confirmation" class="form-control input-sm" placeholder="Confirm Password">
			    					</div>
			    				</div>
			    			</div>
			    			
			    			<input type="submit" value="Register" class="btn btn-info btn-block">
			    		
			    		</form>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade bs-login-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
			<div class="modal-dialog modal-sm" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel">Login</h4>
					</div>
					<div class="modal-body">
						<form role="form">
			    			<div class="form-group">
			    				<input type="text" name="user" id="user" class="form-control input-sm" placeholder="Username">
			    			</div>
							<div class="form-group">
			    				<input type="password" name="password" id="password" class="form-control input-sm" placeholder="Password">
			    			</div>
			    			<input type="submit" value="Login" class="btn btn-info btn-block">
			    		</form>
					</div>
				</div>
			</div>
		</div>
	  </div>
  </div><!-- /.navbar-collapse -->
</div>
</div>
</nav>
	<script src="../js/jquery-3.1.1.js"></script>
	<script src="../js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../js/scripts.js"></script>
</body>
</html>