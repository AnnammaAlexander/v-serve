import baseURL from "../axios";

export const register = async (values) => {
    try {
        
      const response = await baseURL.post('/signup', { values });
      return response.data;
    } catch (error) {
      console.error('Registration Error:', error);
      return 'Registration failed. Please try again.'; // Return a custom error message
    }
  };
  