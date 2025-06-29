-- Exercise 1: Control Structures

-- Scenario 1: Apply 1% discount to loan interest rates for customers above 60
BEGIN
  FOR cust_rec IN (
    SELECT c.CustomerID, l.LoanID, l.InterestRate
    FROM Customers c
    JOIN Loans l ON c.CustomerID = l.CustomerID
    WHERE c.Age > 60
  ) LOOP
    UPDATE Loans
    SET InterestRate = InterestRate - 1
    WHERE LoanID = cust_rec.LoanID;
  END LOOP;
  COMMIT;
END;
/
