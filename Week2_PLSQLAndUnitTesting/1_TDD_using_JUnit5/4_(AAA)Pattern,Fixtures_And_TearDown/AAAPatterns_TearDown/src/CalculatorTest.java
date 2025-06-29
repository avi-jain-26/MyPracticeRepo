import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private calculator calculator;

    // 🔧 Setup method – runs before each test
    @Before
    public void setUp() {
        calculator = new calculator(); // Arrange
        System.out.println("Setup completed");
    }

    // 🧹 Teardown method – runs after each test
    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown completed");
    }

    // ✅ Test case using AAA pattern
    @Test
    public void testAddition() {
        // Arrange
        int a = 5;
        int b = 3;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(8, result);
    }

    @Test
    public void testSubtraction() {
        // Arrange
        int a = 10;
        int b = 4;

        // Act
        int result = calculator.subtract(a, b);

        // Assert
        assertEquals(6, result);
    }
}
