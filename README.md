# send_iban_oneliner
utility used to encode exchange deposit requests

usage:

```bash
node app.js -a "0x3cd384102468a37aa06544058b43063234a4debf" -i "GAVOFYORK"
```

where

- `0x3cd384102468a37aa06544058b43063234a4debf` is exchange address
- `GAVOFYORK` is client identifier

result:

```json
{
  "method": "eth_sendTransaction",
  "params": [
    {
      "to": "0x3cd384102468a37aa06544058b43063234a4debf",
      "data": "0xb214faa54741564f46594f524b0000000000000000000000000000000000000000000000"
    }
  ]
}
```
