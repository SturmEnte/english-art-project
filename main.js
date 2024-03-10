const foregroundElement = document.getElementById("foreground");

let i = 0;
const parts = ["What", "is", "Art?"];

setInterval(() => {
	foregroundElement.innerHTML = parts[i];
	i++;
	if (i >= parts.length) i = 0;
}, 2000);
