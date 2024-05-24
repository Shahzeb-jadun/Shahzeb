function removeCharacter() {
    const originalString = document.getElementById("originalString").value;
    const position = document.getElementById("position").value - 1; // Adjust for 0-based indexing
  
    // Check for valid input
    if (!originalString || position < 0 || position >= originalString.length) {
      alert("Invalid input! Please enter a string and a valid position (1 to string length)");
      return;
    }
  
    const firstPart = originalString.slice(0, position);
    const secondPart = originalString.slice(position + 1);
    const newString = firstPart + secondPart;
  
    document.getElementById("result").textContent = "New String: " + newString;
  }