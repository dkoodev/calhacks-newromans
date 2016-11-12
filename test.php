<html>
	<head>
		
	</head>

	<body>
		<?php
			$command = escapeshellcmd('python py/functions.py');
			$output = shell_exec($command);
			echo $output;
		?>

	</body>
</html>