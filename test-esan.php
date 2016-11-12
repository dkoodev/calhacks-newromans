<html>
	<head>
		
	</head>

	<body>
		<?php
			$command = escapeshellcmd ('python esan-functions.py');
			$output = shell_exec($command);
			echo $output;

			$resultData = json_decode($output, true);

			var_dump($resultData); 
		?>
	</body>
</html>