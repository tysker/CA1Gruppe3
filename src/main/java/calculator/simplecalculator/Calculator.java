package calculator.simplecalculator;

/**
 * This class contains methos for math operations based on methods in Interface
 * ICalculator
 *
 * @author Morten
 */
public class Calculator implements ICalculator {

    @Override
    public int add(int n1, int n2) {
        int result = n1 + n2;
        return result;
    }

    @Override
    public int sub(int n1, int n2) {
        int result = n1 - n2;
        return result;
    }

    @Override
    public int mul(int n1, int n2) {
        int result = n1 * n2;
        return result;
    }

    @Override
    public int div(int n1, int n2) throws ArithmeticException {
        int result = n1 / n2;
        return result;
    }

}
