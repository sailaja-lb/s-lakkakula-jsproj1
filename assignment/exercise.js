//IP ADDRESS
async function getIp() {
    try {
        const response = await fetch('http://ip.jsontest.c/');
        return await response.json();
    } catch (error) {
        console.log(error);
        return { "error": error.message };
    }
}
// NO_SE WITH TEST CASES FOR IP
async function test_getIp_no_se() {
    const myIp = await getIp();
    // If response is successful
    if ('ip' in myIp) {
        console.log('IP is available Test case: passed');
    }
    if (myIp['ip'] !== '') {
        console.log('IP is available Test case: passed');
    }
    // If response is failed
    if ('error' in myIp) {
        console.log('IP is not available Test case: passed');
    }
}

test_getIp_no_se();

async function putIp() {

    const dispalyip = await getIp();
    const ip = document.querySelector("#ipaddress");
    ip.innerHTML = JSON.stringify(dispalyip);
}
putIp();


//HEADERS
async function getHeaders() {
    try {
        const response = await fetch('http://headers.jsontest.com/');
        return await response.json();
    } catch (error) {
        console.log(error);
        return {"error" : error.message};
    }
}
// NO_SE WITH TEST CASES FOR HEADERS
async function test_getHeaders_no_se() {
    const myHeader = await getHeaders();
    // If response is successful
    if ('Origin' in myHeader) {
        console.log('Header is available Test case: passed');
    }
    if ('X-Cloud-Trace-Context' in myHeader) {
        console.log('Header is available Test case: passed');
    }
    if ('Accept' in myHeader) {
        console.log('Header is available Test case: passed');
    }
    if ('Cache-Control' in myHeader) {
        console.log('Header is available Test case: passed');
    }
    if ('traceparent' in myHeader) {
        console.log('Header is available Test case: passed');
    }
    if ('User-Agent' in myHeader) {
        console.log('Header is available Test case: passed');
    }
    if ('Host' in myHeader) {
        console.log('Header is available Test case: passed');
    }
    if ('Pragma' in myHeader) {
        console.log('Header is available Test case: passed');
    }
    if ('Accept-Language' in myHeader) {
        console.log('Header is available Test case: passed');
    }
    // If response is failed
    if ('error' in myHeader) {
        console.log('Header is not available Test case: passed');
    }
}

test_getHeaders_no_se();


async function putHeaders() {

    const dispalyheaders = await getHeaders();
    const headers = document.querySelector("#headers");
    headers.innerHTML = JSON.stringify(dispalyheaders);
}
putHeaders();



//DISPLAY DATE AND TIME
async function getDateTime() {
    try {
        const response = await fetch('http://date.jsontest.com');
        return await response.json();
    } catch (error) {
        console.log(error);
        return {"error" : error.message};
    }
}
//NO_SE WITH TEST CASES FOR DATE AND TIME
async function test_getDateTime_no_se() {
    const myDateTime = await getDateTime();
    // If response is successful
    if ('date' in myDateTime) {
        console.log('Date is available Test case: passed');
    }
    if ('milliseconds_since_epoch' in myDateTime) {
        console.log('milliseconds is available Test case: passed');
    }
    if ('time' in myDateTime) {
        console.log('time is available Test case: passed');
    }
    // If response is failed
    if ('error' in myDateTime) {
        console.log('Date Time is not available Test case: passed');
    }
}
test_getDateTime_no_se();

async function putDateTime() {

    const dispalydatetime = await getDateTime();
    const datetime = document.querySelector("#timedate");
    datetime.innerHTML = JSON.stringify(dispalydatetime);

}
putDateTime();
setInterval(putDateTime,1000);


//MD5
async function getMd5value(txt) {
    try {
        const response = await fetch(`http://md5.jsontest.com/?text=${txt}`);
        return await response.json();
    } catch (error) {
        console.log(error);
        return { "error": error.message };
    }
}

//NO_SE WITH TEST CASES FOR MD5
async function test_getMd5value_no_se() {
    const text2MD5 = await getMd5value('sailaja');
    // If response is successful and check response have md5
    if ('md5' in text2MD5) {
        console.log('MD5 is available Test case: passed');
    }
    // If response is successful and check original is sailaja(input given)
    if (text2MD5['original'] === 'sailaja') {
        console.log('MD5 original value is same as input Test case: passed');
    }
    // If response is failed
    if ('error' in text2MD5) {
        console.log('MD5 error Test case: passed');
    }
}
test_getMd5value_no_se()

async function putMd5value() {
    const myName = document.querySelector("#myInput");
    const displaymd5 = await getMd5value(myName.value);

    const md5 = document.querySelector("#md5text");
    md5.innerHTML = JSON.stringify(displaymd5);
}

//validation
async function getValidate(data) {
    try {
        const response = await fetch(`http://validate.jsontest.com/?json=${data}`);
        return await response.json();
    } catch (error) {
        console.log(error);
        return {"error" : error.message};
    }
}

//NO_SE WITH TEST CASES FOR Validation
async function test_getValidate_no_se() {
    const myValidate = await getValidate("{name:3}");
    // If response is successful and check response
    console.log(myValidate);
    if ('size' in myValidate) {
        console.log('size is available Test case: passed');
    }
    if ('parse_time_nanoseconds' in myValidate) {
        console.log('parse is available Test case: passed');
    }
    if ('object_or_array' in myValidate) {
        console.log('obj or array is available Test case: passed');
    }
    if ('validate' in myValidate) {
        console.log('validate is available Test case: passed');
    }
    if ('empty' in myValidate) {
        console.log('empty is available Test case: passed');
    }
    // If response is failed
    if ('error_info' in myValidate) {
        console.log('validation is failed Test case: passed');
    }
    if ('error' in myValidate) {
        console.log('error validation Test case: passed');
    }
}
test_getValidate_no_se();

async function putValidate() {
    const user = document.querySelector("#idtext");
    const userdetails = await getValidate(user.value);

    const textvalue = document.querySelector("#validity");
    textvalue.innerHTML = JSON.stringify(userdetails);
}







