const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit
  
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert('User registered successfully!');
        setFormData({ name: "", email: "", number: "" }); // Clear form
        setOrderPopup(false); // Close the popup
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      alert('An error occurred while submitting the form');
      console.error(error);
    }
  };
  