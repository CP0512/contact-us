Note: I've not hosted the webpage on any domain. Please verify Python is installed on machine using python --version. It should produce the installed version of Python

Prerequisites:
Please execute the following commands:
1. curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
2. sudo apt-get install -y nodejs
3. npm install

To run the test cases please use following steps:
1. Go to, contactus-project/contactus-project/contact_us and execute following command:
    python3 -m http.server
2. Go to, contactus-project/contactus-project and execute following command:
    npm test

If preceding steps are followed correctly the following test suit should get executed:

  Phone Validations
    ✓ Verify the empty value in Phone field (1417 ms)
    ✓ Verify the wrong value in Phone field (1423 ms)
    ✓ Verify the lower boundary length in Phone field (1474 ms)
    ✓ Verify the higher boundary length in Phone field (1577 ms)
    ✓ Verify the wrong data type in Phone field (1393 ms)
    ✓ Verify the correct value in Phone field (1381 ms)

  First Name Validations
    ✓ Verify the empty value in firstname field (1394 ms)
    ✓ Verify the wrong value in firstname field (1398 ms)
    ✓ Verify the lower boundary value in firstname field (1486 ms)
    ✓ Verify the correct value in firstname field (1384 ms)

  Last name Validations
    ✓ Verify the empty value in lastname field (1367 ms)
    ✓ Verify the wrong value in lastname field (1370 ms)
    ✓ Verify the lower boundary value in lastname field (1385 ms)
    ✓ Verify the correct value in lastname field (1361 ms)

  Zip Validations
    ✓ Verify the empty value in zip field (1491 ms)
    ✓ Verify the wrong value in zip field (1473 ms)
    ✓ Verify the correct value in zip field (1521 ms)

  Zip Validations
    ✓ Verify the empty value in address field (1390 ms)
    ✓ Verify the invalid value in address field (1401 ms)
    ✓ Verify the correct value in address field (1465 ms)

Test Suites: 5 passed, 5 total
Tests:       20 passed, 20 total