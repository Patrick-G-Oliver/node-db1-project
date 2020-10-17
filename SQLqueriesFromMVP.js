/* 
See the read me file (to be performed on SQL Try Editor at W3Schools.com)

- find all customers with postal code 1010. Returns 3 records.

SELECT * FROM Customers WHERE PostalCode = 1010;

- find the phone number for the supplier with the id 11. Should be (010) 9984510.

SELECT Phone FROM Suppliers WHERE SupplierId = 11;

- list first 10 orders placed, sorted descending by the order date. The order with date 1997-02-12 should be at the top.

SELECT * FROM Orders ORDER BY OrderDate DESC LIMIT 10;

- find all customers that live in London, Madrid, or Brazil. Returns 18 records.

SELECT * FROM Customers WHERE City = "London" OR City = "Madrid" OR Country = "Brazil";

- add a customer record for _"The Shire"_, the contact name is _"Bilbo Baggins"_ the address is _"1 Hobbit-Hole"_ in _"Bag End"_, postal code _"111"_ and the country is _"Middle Earth"_.

INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth');

- update _Bilbo Baggins_ record so that the postal code changes to _"11122"_.

UPDATE Customers SET PostalCode = '11122' WHERE ContactName = 'Bilbo Baggins';

*/