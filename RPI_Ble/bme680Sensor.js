'use strict';

const { BME680 } = require('jvsbme680');

const bme680 = new BME680();



/**
 *  * Measures the gas resistance (Ohms), humidity (%RH), pressure (hPa) and temperature (degrees C).
 *   * The measurement is performed simultaneously and then logged to the console.
 *
 *
 *   @async
 */

async function measureAll() {
	try {
		const { gasResistance, humidity, pressure, temperature } = await bme680.read();
		console.log(`Gas resistance (Ohms): ${gasResistance}`);
		console.log(`Humidity (%RH): ${humidity}`);
		console.log(`Pressure (hPa): ${pressure}`);
		console.log(`Temp (C): ${temperature}`);
		return { gasResistance, humidity, pressure, temperature };
	} catch(err){
		consloe.error(`failed to read data: ${err}`);
	
	}

}








exports.measureAll = measureAll;

