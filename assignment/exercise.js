////////////////////////////                  IP ADDRESS            ////////////////////////////////
async function getIp(_fet = fetch) {
    try {
        const response = await _fet('http://ip.jsontest.com/');
        if (response.ok === false)
            return false
        return await response.json();
    } catch (error) {
        console.log(error);
        return { "error": error.message };
    }
}
async function putIp() {

    const dispalyip = await getIp();
    const ip = document.querySelector("#ipaddress");
    ip.innerHTML = JSON.stringify(dispalyip);
}
putIp();
///////////////////////////                IP UNIT TESTING                  ////////////////////////
async function test_ip_fetch() {
    const _fetch_not_ok = (url) => {
        return new Promise(((resolve, reject) => {
            resolve({
                ok: false
            })
        }))
    }
    let result = await getIp(_fetch_not_ok)

    if (result === false)
        console.log("IP _fetch_not_ok test Passed")
    else
        console.log("IP _fetch_not_ok test Failed", result)

    const _fetch_ok = (url) => {
        return new Promise((resolve) => {
            return resolve({
                ok: true,
                json: () => {
                    return new Promise((resolve) => {
                        resolve({ip: "127.0.0.1"})
                    })
                }
            })
        })
    }
    result = await getIp(_fetch_ok)
    if(result?.ip === '127.0.0.1')
        console.log("Ip _fetch_ok Test Passed");
    else
        console.log("Ip _fetch_ok Test Failed", result);
}
test_ip_fetch();

////////////////////                        HTTP Headers             ////////////////////////////////
async function getHeaders(_fet = fetch) {
    try {
        const response = await _fet('http://headers.jsontest.com/');
        if (response.ok === false)
            return false
        return await response.json();
    } catch (error) {
        console.log(error);
        return { "error": error.message };
    }
}
async function putHeaders() {

    const dispalyheaders = await getHeaders();
    const headers = document.querySelector("#headers");
    headers.innerHTML = JSON.stringify(dispalyheaders);
}
putHeaders();

////////////////////////////////        HTTP Headers Unit Testing            /////////////////////////
async function test_Headers_fetch() {
    const _fetch_not_ok = (url) => {
        return new Promise(((resolve, reject) => {
            resolve({
                ok: false
            })
        }))
    }
    let result = await getHeaders(_fetch_not_ok)

    if (result === false)
        console.log("Headers _fetch_not_ok test Passed")
    else
        console.log("Headers _fetch_not_ok test Failed", result)

    const _fetch_ok = (url) => {
        return new Promise((resolve) => {
            return resolve({
                ok: true,
                json: () => {
                    return new Promise((resolve) => {
                        resolve({
                                Accept_Language: "en-US,en;q=0.8",
                                Host: "headers.jsontest.com",
                                Accept_Charset: "ISO-8859-1,utf-8;q=0.7,*;q=0.3",
                                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
                            }
                        )
                    })
                }
            })
        })
    }
    result = await getHeaders(_fetch_ok)
    if(result["Accept_Language"] === "en-US,en;q=0.8" &&
        result["Host"] === "headers.jsontest.com" &&
        result["Accept_Charset"] === "ISO-8859-1,utf-8;q=0.7,*;q=0.3" &&
        result["Accept"] === "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")

        console.log("Headers _fetch_ok Test Passed");
    else
        console.log("Headers _fetch_ok Test Failed", result);
}
test_Headers_fetch();

///////////////////////////////       DISPLAY DATE AND TIME               /////////////////////////
async function getDateTime(_fet = fetch) {
    try {
        const response = await _fet('http://date.jsontest.com');
        if (response.ok === false)
            return false
        return await response.json();
    } catch (error) {
        console.log(error);
        return { "error": error.message };
    }
}
async function putDateTime() {

    const dispalydatetime = await getDateTime();
    const datetime = document.querySelector("#timedate");
    datetime.innerHTML = JSON.stringify(dispalydatetime);

}
putDateTime();
setInterval(putDateTime,1000);


///////////////////                   DATE and TIME UNIT TESTING              //////////////////////
async function test_Datetime_fetch() {
    const _fetch_not_ok = (url) => {
        return new Promise(((resolve, reject) => {
            resolve({
                ok: false
            })
        }))
    }
    let result = await getDateTime(_fetch_not_ok)

    if (result === false)
        console.log("DateTime _fetch_not_ok test Passed")
    else
        console.log("DateTime _fetch_not_ok test Failed", result)

    const _fetch_ok = (url) => {
        return new Promise((resolve) => {
            return resolve({
                ok: true,
                json: () => {
                    return new Promise((resolve) => {
                        resolve({
                                time: "03:53:25 AM",
                                milliseconds_since_epoch: 1362196405309,
                                date: "03-02-2013"
                            }
                        )
                    })
                }
            })
        })
    }
    result = await getDateTime(_fetch_ok)
    if(result["time"] === "03:53:25 AM" &&
        result["milliseconds_since_epoch"] === 1362196405309 &&
        result["date"] === "03-02-2013")

        console.log("DateTime _fetch_ok Test Passed");
    else
        console.log("DateTime _fetch_ok Test Failed", result);
}
test_Datetime_fetch();

////////////////////////                         MD5                        ///////////////////////
async function getInputMd5() {
    return document.querySelector("#myInput").value;
}
async function getMd5value(_fet = fetch) {
    const text = await getInputMd5();
    try {
        const response = await _fet(`http://md5.jsontest.com/?text=${text}`);
        if (response.ok === false)
            return false
        return await response.json();
    } catch (error) {
        console.log(error);
        return { "error": error.message };
    }
}
async function putMd5value() {
    // const myName = document.querySelector("#myInput");
    // const displaymd5 = await getMd5value(myName.value);
    let input = await getMd5value();
    const md5 = document.querySelector("#md5text");
    md5.innerHTML = JSON.stringify(input);
}

/////////////////////                   MD5 UNIT TESTING                    /////////////////////////
async function test_Md5_fetch() {
    const _fetch_not_ok = (url) => {
        return new Promise(((resolve, reject) => {
            resolve({
                ok: false
            })
        }))
    }
    let result = await getMd5value(_fetch_not_ok)

    if (result === false)
        console.log("Md5 _fetch_not_ok test Passed")
    else
        console.log("Md5 _fetch_not_ok test Failed", result)

    const _fetch_ok = (url) => {
        return new Promise((resolve) => {
            return resolve({
                ok: true,
                json: () => {
                    return new Promise((resolve) => {
                        resolve({
                                md5: "fa4c6baa0812e5b5c80ed8885e55a8a6",
                                original: "example_text"
                            }
                        )
                    })
                }
            })
        })
    }
    result = await getMd5value(_fetch_ok)
    if(result["md5"] === "fa4c6baa0812e5b5c80ed8885e55a8a6" &&
        result["original"] === "example_text")

        console.log("Md5 _fetch_ok Test Passed");
    else
        console.log("Md5 _fetch_ok Test Failed", result);
}
test_Md5_fetch();

///////////////////////                        validation        ///////////////////////////////////
async function getInputValidate() {
    return document.querySelector("#idtext").value;
}
async function getValidate(_fet = fetch) {
    const txt = await getInputValidate();
    try {
        const response = await _fet(`http://validate.jsontest.com/?json=${txt}`);
        if (response.ok === false)
            return false
        return await response.json();
    } catch (error) {
        console.log(error);
        return { "error": error.message };
    }
}
async function putValidate() {
    // const user = document.querySelector("#idtext");
    // const userdetails = await getValidate(user.value);
    let userdetails = await getValidate();
    const textvalue = document.querySelector("#validity");
    textvalue.innerHTML = JSON.stringify(userdetails);
}
//////////////////////                   VALIDATION UNIT TESTING                 ////////////////////
async function test_valid_fetch() {
    const _fetch_not_ok = (url) => {
        return new Promise(((resolve, reject) => {
            resolve({
                ok: false
            })
        }))
    }
    let result = await getValidate(_fetch_not_ok)

    if (result === false)
        console.log("Validation _fetch_not_ok test Passed")
    else
        console.log("Validation _fetch_not_ok test Failed", result)

    const _fetch_ok = (url) => {
        return new Promise((resolve) => {
            return resolve({
                ok: true,
                json: () => {
                    return new Promise((resolve) => {
                        resolve({
                                object_or_array: "object",
                                empty: "false",
                                parse_time_nanoseconds: 19608,
                                validate: "true",
                                size: 1
                            }
                        )
                    })
                }
            })
        })
    }
    result = await getValidate(_fetch_ok)
    if(result["object_or_array"] === "object" &&
        result["empty"] === "false" &&
        result["parse_time_nanoseconds"] === 19608 &&
        result["validate"] === "true" &&
        result["size"] === 1)

        console.log("Validation _fetch_ok Test Passed");
    else
        console.log("Validation _fetch_ok Test Failed", result);
}
test_valid_fetch();


/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////                  INTEGRATION TESTING               //////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
// NO_SE WITH TEST CASES FOR IP
// async function test_getIp_no_se() {
//     const myIp = await getIp();
//     // If response is successful
//     if ('ip' in myIp) {
//         console.log('IP is available Test case: passed');
//     }
//     if (myIp['ip'] !== '') {
//         console.log('IP is available Test case: passed');
//     }
//     // If response is failed
//     if ('error' in myIp) {
//         console.log('IP is not available Test case: passed');
//     }
// }
//
// test_getIp_no_se();
// // NO_SE WITH TEST CASES FOR HEADERS
// async function test_getHeaders_no_se() {
//     const myHeader = await getHeaders();
//     // If response is successful
//     if ('Origin' in myHeader) {
//         console.log('Header is available Test case: passed');
//     }
//     if ('X-Cloud-Trace-Context' in myHeader) {
//         console.log('Header is available Test case: passed');
//     }
//     if ('Accept' in myHeader) {
//         console.log('Header is available Test case: passed');
//     }
//     if ('Cache-Control' in myHeader) {
//         console.log('Header is available Test case: passed');
//     }
//     if ('traceparent' in myHeader) {
//         console.log('Header is available Test case: passed');
//     }
//     if ('User-Agent' in myHeader) {
//         console.log('Header is available Test case: passed');
//     }
//     if ('Host' in myHeader) {
//         console.log('Header is available Test case: passed');
//     }
//     if ('Pragma' in myHeader) {
//         console.log('Header is available Test case: passed');
//     }
//     if ('Accept-Language' in myHeader) {
//         console.log('Header is available Test case: passed');
//     }
//     // If response is failed
//     if ('error' in myHeader) {
//         console.log('Header is not available Test case: passed');
//     }
// }
//
// test_getHeaders_no_se();
//
// //NO_SE WITH TEST CASES FOR DATE AND TIME
// async function test_getDateTime_no_se() {
//     const myDateTime = await getDateTime();
//     // If response is successful
//     if ('date' in myDateTime) {
//         console.log('Date is available Test case: passed');
//     }
//     if ('milliseconds_since_epoch' in myDateTime) {
//         console.log('milliseconds is available Test case: passed');
//     }
//     if ('time' in myDateTime) {
//         console.log('time is available Test case: passed');
//     }
//     // If response is failed
//     if ('error' in myDateTime) {
//         console.log('Date Time is not available Test case: passed');
//     }
// }
// test_getDateTime_no_se();
//
// //NO_SE WITH TEST CASES FOR MD5
// async function test_getMd5value_no_se() {
//     const text2MD5 = await getMd5value('sailaja');
//     // If response is successful and check response have md5
//     if ('md5' in text2MD5) {
//         console.log('MD5 is available Test case: passed');
//     }
//     // If response is successful and check original is sailaja(input given)
//     if (text2MD5['original'] === 'sailaja') {
//         console.log('MD5 original value is same as input Test case: passed');
//     }
//     // If response is failed
//     if ('error' in text2MD5) {
//         console.log('MD5 error Test case: passed');
//     }
// }
// test_getMd5value_no_se()
//
// //NO_SE WITH TEST CASES FOR Validation
// async function test_getValidate_no_se() {
//     const myValidate = await getValidate("{name:3}");
//     // If response is successful and check response
//     console.log(myValidate);
//     if ('size' in myValidate) {
//         console.log('size is available Test case: passed');
//     }
//     if ('parse_time_nanoseconds' in myValidate) {
//         console.log('parse is available Test case: passed');
//     }
//     if ('object_or_array' in myValidate) {
//         console.log('obj or array is available Test case: passed');
//     }
//     if ('validate' in myValidate) {
//         console.log('validate is available Test case: passed');
//     }
//     if ('empty' in myValidate) {
//         console.log('empty is available Test case: passed');
//     }
//     // If response is failed
//     if ('error_info' in myValidate) {
//         console.log('validation is failed Test case: passed');
//     }
//     if ('error' in myValidate) {
//         console.log('error validation Test case: passed');
//     }
// }
// test_getValidate_no_se();
//


