import fetch from 'node-fetch';

async function getPhoneNumbers(country, phoneNumber) {
    let response = await fetch('https://jsonmock.hackerrank.com/api/countries?name=' + country);
    
    let filter_response = await response.json();
    //console.log(filter_response.data[0].callingCodes[filter_response.data[0].callingCodes.length -1]);

    return filter_response.data[0].callingCodes[filter_response.data[0].callingCodes.length -1];
    
}

async function main() {
  console.log(await getPhoneNumbers('Brazil','981602270'));
}

main();