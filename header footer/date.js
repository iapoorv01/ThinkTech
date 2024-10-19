 // Get the current date
 const date = new Date();

 // Format the date (e.g., "October 4, 2024")
 const options = { year: 'numeric', month: 'long', day: 'numeric' };
 const formattedDate = date.toLocaleDateString('en-US', options);
 
 // Find the element where the date should be displayed and set its content
 document.getElementById('currentDate').textContent = formattedDate;