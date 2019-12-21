# Kris Kringle

Randomly allocates KKs and notifies by SMS given a list of players and mobile phone numbers.

For example, given input file `kk.json`:

```json
{
    "spend": 100,
    "players": [
        {
            "name": "foo",
            "number": "+6111111111"
        },
        {
            "name": "bar",
            "number": "+6122222222"
        },
        {
            "name": "baz",
            "number": "+6133333333"
        }
    ]
}
```

Run `kris-kringle kk.json` to send notifications similar to:

- Hey foo! Your KK is baz. The spend is $100. Merry Christmas! 🎅🏻🎄
- Hey bar! Your KK is foo. The spend is $100. Merry Christmas! 🎅🏻🎄
- Hey baz! Your KK is bar. The spend is $100. Merry Christmas! 🎅🏻🎄

SMS notifications are sent using AWS SNS and requires an AWS profile to be configured.
