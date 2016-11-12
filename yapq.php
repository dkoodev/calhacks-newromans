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
			//$result = json_decode(exec('python myscript.py'), true);
			//echo $result['foo'];
		?>

		<script type = "text/javascript">
		var arr = <?php echo json_decode($resultData); ?>

		</script>
	</body>
</html>