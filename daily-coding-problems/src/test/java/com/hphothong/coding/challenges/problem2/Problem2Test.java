package com.hphothong.coding.challenges.problem2;

import static org.junit.Assert.assertArrayEquals;

import org.junit.Test;
import org.junit.Before;

public class Problem2Test {

    private Problem2 instance;

    @Before
    public void setUp() {
        instance = new Problem2();
    }

    @Test
    public void testProblem2() {
        // Given an array of integers
        int[] integers = { 1, 2, 3, 4, 5 };
        int[] integers2 = { 3, 2, 1 };

        // When creating a new array of integers from the product of the
        // original array numbers
        int[] actualResults = instance.problem2WithDivision(integers);
        int[] actualResults2 = instance.problem2WithDivision(integers2);

        // Then the resulting array should have the product of each number in
        // the original array except for the number at that particular index.
        int[] expectedResults = { 120, 60, 40, 30, 24 };
        assertArrayEquals(expectedResults, actualResults);
        int[] expectedResults2 = { 2, 3, 6 };
        assertArrayEquals(expectedResults2, actualResults2);
    }

}