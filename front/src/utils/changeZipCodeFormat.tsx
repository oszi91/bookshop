const changeZipCodeFormat = (zipcode: string) =>
	zipcode.slice(0, 2) + '-' + zipcode.slice(2);

export default changeZipCodeFormat;
