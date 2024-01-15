function validateIPv4(ip) {
    const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  
    if (!ipv4Regex.test(ip)) {
      return false;
    }
  
    const octets = ip.split('.');
  
    for (let i = 0; i < 4; i++) {
      const octet = parseInt(octets[i], 10);
  
      if (octet < 0 || octet > 255 || isNaN(octet)) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const ipAddress = '192.168.1.1';
  const isValidIPv4 = validateIPv4(ipAddress);
  
  console.log('isValidIP',ipAddress,('→'),isValidIPv4); // Output: true
  