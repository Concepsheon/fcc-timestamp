# fcc-timestamp

A timestamp microservice project for FreeCodeCamp made with Nodejs

Pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date 

Example Input: (771292800 or June%2011%201994).

If it does, it returns both the Unix timestamp and the natural language form of that date. 

Example Output: {"unix": "771292800", "natural": "11 Jun 1994"}

If it does not contain a date or Unix timestamp, it returns null to home page.



### Clone project 
```
git clone https://github.com/Concepsheon/fcc-timestamp.git
```

```npm install``` and run app with ```node app```
