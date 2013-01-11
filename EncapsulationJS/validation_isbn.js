var validate_isbn = function(isbn) {
	if(isbn == undefined || typeof isbn != 'string') {
		return false;
	}
	isbn = isbn.replace(/-/g, '');
	
	if(isbn.length != 10 && isbn.length != 13) {
		return false;
	}
	

	var sum = 0;
	if(isbn.length === 10) { // 10 digit
		if(!isbn.match(/^\d{9}/)) {
			return false;
		}

		for(var i=0; i<9; i++) {
			sum += isbn.charAt(i) * (i+1);
		}
		var checksum = sum%11;
		
		if(checksum === 10) checksum = 'X';
		
		if(isbn.charAt(9) != checksum) {
			return false;
		}
	}
	else { // 13 digit
		if(!isbn.match(/^\d{12}/)) {
			return false;
		}
		
		for(var i=0; i<12; i++) {
			sum += isbn.charAt(i) * ((i%2===0)?1:3);
		}
		var checksum = sum%10;
		if(checksum) checksum = 10-checksum;
		if(isbn.charAt(12) != checksum) {
			return false;
		}
	}
	return true;
}

module.exports = validate_isbn;