package integrationtests;

import utils.HttpClient;
import java.io.IOException;
import static org.junit.Assert.assertEquals;
import org.junit.Test;

/**
 * This is used for integrationtests with HttpClient class to make URL to test
 * on localhost Tomcat server
 *
 * @author Morten
 */
public class WebCalculatorTest {

    HttpClient client = new HttpClient("http://localhost:7777/CA1/calculator");

    @Test
    public void addTest() throws IOException {
        String res = client.makeHttpRequest("?operation=add&n1=3&n2=3");
        String expected = "Result of: 3+3= 6";
        assertEquals(expected, res);
    }

    @Test
    public void subTest() throws IOException {
        String res = client.makeHttpRequest("?operation=sub&n1=3&n2=3");
        String expected = "Result of: 3-3= 0";
        assertEquals(expected, res);
    }

    @Test
    public void mulTest() throws IOException {
        String res = client.makeHttpRequest("?operation=mul&n1=3&n2=3");
        String expected = "Result of: 3*3= 9";
        assertEquals(expected, res);
    }

    @Test
    public void divTest() throws IOException {
        String res = client.makeHttpRequest("?operation=div&n1=3&n2=3");
        String expected = "Result of: 3/3= 1";
        assertEquals(expected, res);
    }

    @Test(expected = IOException.class)
    public void divTestByZero() throws IOException {
        String res = client.makeHttpRequest("?operation=div&n1=3&n2=0");
    }

}
