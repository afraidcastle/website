const dropdown = document.getElementById("readingOption");
const displayText = document.getElementById("text");
const displayHeader = document.getElementById("textHead");
		
document.addEventListener("DOMContentLoaded", () => {
  dropdown.addEventListener("change", function() {
	  const selectedValue = dropdown.value;
		if (selectedValue == "me")
			{
				displayText.textContent = "Right now I am waiting for my placement in university, so nothing much to do but build this website, eat, sleep and repeat. Although, maybe I should exercise more though.";
				displayHeader.textContent = "Here are some stuff about me";
			}
		else if (selectedValue == "game"){
				displayText.textContent = "Games I play a lot: Terraria. That's all you get for now.";
				displayHeader.textContent = "These are games I play";
			}
		else{
				displayText.textContent = "I am a bit shy to admit I've eaten way more than what my body could handle (I weigh 53 kilos as of writing).";
				displayHeader.textContent = "I love eating food";
			}
	});
});
