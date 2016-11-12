<html>
	<head>
		
	</head>

	<body>
		<?php
			$command = escapeshellcmd ('python esan-functions.py');
			$output = shell_exec($command);
			echo $output;
		?>
	</body>
</html>