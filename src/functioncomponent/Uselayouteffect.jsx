import React, { useLayoutEffect, useState } from 'react';

const App = () => {
	const [value, setValue] = useState('hello');

	useLayoutEffect(() => {
		if (value === 'hello') {
		
			setValue('hello ankita');
		}
      
		console.log('UseLayoutEffect is called with the value of ', value);
	}, [value]);

	return <div>{value} is the greatest portal for geeks!</div>;
};

export default App;
