package calculator.simplecalculator;

import calculator.simplecalculator.Calculator;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 * This test class is used for JUnit test of methods from class Calculator
 *
 * @author Morten
 */
public class CalculatorTest {

    Calculator calc = new Calculator();

    int testMinus4 = -4;
    int test0 = 0;
    int test4 = 4;
    int test12 = 12;
    int test44 = 44;
    int test678 = 678;
    int test1699 = 1699;
    int test87754 = 87754;

    int result16 = 16;
    int resultMinus674 = -674;
    int result74756 = 74756;
    int result56 = 56;

    public CalculatorTest() {
    }

    @Test
    public void addTest() {
        int actual = calc.add(test4, test12);
        int expected = result16;
        assertEquals(expected, actual);
    }

    @Test
    public void subTest() {
        int actual = calc.sub(test4, test678);
        int expected = resultMinus674;
        assertEquals(expected, actual);
    }

    @Test
    public void mulTest() {
        int actual = calc.mul(test44, test1699);
        int expected = result74756;
        assertEquals(expected, actual);
    }

    @Test
    public void divTest() {
        int actual = calc.div(test678, test12);
        int expected = result56;
        assertEquals(expected, actual);
    }

    @Test(expected = ArithmeticException.class)
    public void divZeroTest() {
        int actual = calc.div(test678, test0);
        int expected = calc.div(678, 0);
    }

}
