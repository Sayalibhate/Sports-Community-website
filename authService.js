const authService = {
    login: (email, password) => {
      // Replace with actual API call
      if (email === "test@example.com" && password === "password") {
        localStorage.setItem("isAuthenticated", "true"); // Set authentication
        return true;
      }
      return false;
    },
    logout: () => {
      localStorage.removeItem("isAuthenticated"); // Clear authentication
    },
    isAuthenticated: () => {
      return !!localStorage.getItem("isAuthenticated"); // Check if authenticated
    },
  };
  
  export default authService;
  