import java.util.*;

public class FinancialForecast {

    public static double futureValueRecursive(double pv, double r, int n) {
        if (n == 0) {
            return pv;
        }
        return (1 + r) * futureValueRecursive(pv, r, n - 1);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter present value (PV): ");
        double presentValue = scanner.nextDouble();

        System.out.print("Enter yearly growth rate (eg. 5 for 5%): ");
        double ratePercent = scanner.nextDouble();
        double rate = ratePercent / 100.0;

        System.out.print("Enter number of years: ");
        int years = scanner.nextInt();

        // Calculations
        double resultRecursive = futureValueRecursive(presentValue, rate, years);

        System.out.printf("Future Value after %d years: %.2f\n", years, resultRecursive);
        scanner.close();
    }
}
