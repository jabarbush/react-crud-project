export const validateRequiredFields = (name: string, dob: string, phone: string, email: string): boolean => {
    if (!name || !dob || !phone || !email) {
        alert('Please fill in all required fields.');
        return false;
    }
    return true;
};
  
export const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\d{10}$/;
    if (!phone.match(phoneRegex)) {
        alert('Please enter a valid phone number.');
        return false;
    }
    return true;
};

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
};

export const validateDateOfBirth = (dob: string): boolean => {
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (!dob.match(dateRegex)) {
        alert('Please enter a valid date in the format MM/DD/YYYY.');
        return false;
    }
    return true;
};
