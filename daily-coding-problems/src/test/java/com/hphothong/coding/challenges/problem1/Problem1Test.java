package com.hphothong.coding.challenges.problem1;

import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.junit.Before;
import java.util.List;
import com.google.common.collect.Lists;

public class Problem1Test {

    private Problem1 instance;

    @Before
    public void setUp() {
        instance = new Problem1();
    }

    @Test
    public void testProblem1() {
        // Given a number list and number k
        List<Integer> numberList = Lists.newArrayList(10, 15, 3, 7);
        int k = 17;

        // When testing if two of the values in the list equal the value k
        boolean actualResult = instance.problem1(numberList, k);

        // Then 'true' should be returned
        assertTrue(actualResult);
    }
}