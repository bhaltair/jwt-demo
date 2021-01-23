# readme

## public soap api

https://www.dataaccess.com/webservicesserver/NumberConversion.wso?op=NumberToWords

## NumberToWords

```bash
curl --location --request POST 'https://www.dataaccess.com/webservicesserver/NumberConversion.wso' \
--header 'Content-Type: text/xml; charset=utf-8' \
--data-raw '<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
      <ubiNum>500</ubiNum>
    </NumberToWords>
  </soap:Body>
</soap:Envelope>'
```

request body

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
      <ubiNum>500</ubiNum>
    </NumberToWords>
  </soap:Body>
</soap:Envelope>
```

## soap -> rest

```

step 1

npm start

step 2

Open http://127.0.0.1:3000/explorer/#!/NumberServices/numberToWords

or

try http://127.0.0.1:3000/api/NumberServices/numberToWords?ubiNum=3223

```
