function calculateCost() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const costPerSquareMeter = parseFloat(document.getElementById('costPerSquareMeter').value);
    const wastage = parseFloat(document.getElementById('wastage').value);
    // Check if all inputs are valid numbers
    if (isNaN(length) || isNaN(width) || isNaN(costPerSquareMeter)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }
   // Calculate the area of the fabric
   const area = length * width;
   const wastagefactor = 1 + (wastage / 100);


   // Calculate the total cost
   const totalCost = area * costPerSquareMeter *wastagefactor ;

   // Display the result
   document.getElementById('result').innerText = `Total Cost: ${totalCost.toFixed(2)} currency`;
}