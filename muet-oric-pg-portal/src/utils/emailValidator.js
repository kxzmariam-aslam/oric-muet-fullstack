export const validatePGEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, role: null, message: "❌ Invalid email format" };
  }

  const [localPart, domain] = email.toLowerCase().split('@');

  if (domain === 'students.muet.edu.pk') {
    
    // Master's Student Pattern: YYmeXX123
    if (localPart.includes('me')) {
      const match = localPart.match(/^(\d{2})me([a-z]{2})(\d{3})$/);
      if (match) {
        return { 
          valid: true, 
          role: 'masters', 
          roleName: "Master's Student",
          year: match[1],
          department: match[2],
          id: match[3],
          message: "✅ Valid Master's student email" 
        };
      }
    } 
    
    // PhD Student Pattern: YYphdXX123
    else if (localPart.includes('phd')) {
      const match = localPart.match(/^(\d{2})phd([a-z]{2})(\d{3})$/);
      if (match) {
        return { 
          valid: true, 
          role: 'phd', 
          roleName: 'PhD Student',
          year: match[1],
          department: match[2],
          id: match[3],
          message: "✅ Valid PhD student email" 
        };
      }
    }
    
    return { 
      valid: false, 
      role: null, 
      message: "❌ Invalid PG student email.\n\n📝 VALID FORMATS:\n• Master's: 23meCS008@students.muet.edu.pk\n• PhD: 24phdCS012@students.muet.edu.pk" 
    };
  }

  return { 
    valid: false, 
    role: null, 
    message: "❌ Only @students.muet.edu.pk domain is allowed." 
  };
};

export const getNameFromEmail = (email) => {
  const [localPart] = email.split('@');
  if (localPart.includes('.')) {
    return localPart.split('.').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }
  return localPart;
};