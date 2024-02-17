let stopLoop = false;

// Function to perform loop iteration
function loopIteration() {
	// Do something

	// Check if 5 seconds have passed
	if (!stopLoop) {
		setTimeout(loopIteration, 0); // Schedule the next iteration
	} else {
		console.log("Loop stopped after 5 seconds");
	}
}

// Start the loop
function startLoop() {
	stopLoop = false;
	console.log("Loop started");
	setTimeout(() => {
		stopLoop = true; // Stop the loop after 5 seconds
	}, 5000);
	loopIteration(); // Start the first iteration
}

// Start the loop
startLoop();
