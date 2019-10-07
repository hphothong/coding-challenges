package com.hphothong.coding.challenges.problem2;

/**
 * Daily Coding Problem: #2
 * 
 * Given an array of integers, return a new array such that each element at
 * index i of the new array is the product of all the numbers in the original
 * array except the one at i. For example, if our input was [1, 2, 3, 4, 5], the
 * expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1],
 * the expected output would be [2, 3, 6].
 * 
 * Follow-up: what if you can't use division?
 * 
 * 6 October 2019
 * 
 * @author Hayden Phothong
 */
public class Problem2 {

    /**
     * Return a new array such that each element at index i of the new array is the
     * product of all the numbers in the original array except the one at i.
     * 
     * @param integers - The original array of integers
     * @return The new array of integers based on the original array of integers.
     */
    public int[] problem2WithDivision(int[] integers) {
        int product = getProductOfAllNumbers(integers);
        int[] newIntegers = new int[integers.length];
        for (int i = 0; i < integers.length; i++) {
            newIntegers[i] = product / integers[i];
        }
        return newIntegers;
    }

    /**
     * Returns the product of all numbers in the array.
     * 
     * @param numbers - The original numbers in the array.
     * @return The product of all of the numbers in the original array.
     */
    private int getProductOfAllNumbers(int[] numbers) {
        int product = 1;
        for (int number : numbers) {
            product *= number;
        }
        return product;
    }

}