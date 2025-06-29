-- Exercise 1: Control Structures

-- Scenario 2: Set IsVIP flag to TRUE for customers with balance > $10,000
BEGIN
  FOR cust_rec IN (
    SELECT CustomerID
    FROM Customers
    WHERE Balance > 10000
  ) LOOP
    UPDATE Customers
    SET IsVIP = 'TRUE'
    WHERE CustomerID = cust_rec.CustomerID;
  END LOOP;
  COMMIT;
END;
/
