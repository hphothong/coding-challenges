package com.hphothong.coding.challenges.problem1;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

/**
 * Daily Coding Problem #1
 * 
 * Given a list of numbers and a number k, return whether any two numbers from
 * the list add up to k. For example, given [10, 15, 3, 7] and k of 17, return
 * true since 10 + 7 is 17.
 * 
 * Bonus: Can you do this in one pass?
 * 
 * 6 October 2019
 * 
 * @author Hayden Phothong
 */
public class Problem1 {

    /**
     * Return true if two values in the numberList add up to k.
     * 
     * @param numberList - List of number to check for combined value of k.
     * @param k          - The target sum.
     * @return true if two values add up to k, else false.
     */
    public boolean problem1(List<Integer> numberList, int k) {
        Map<Integer, Integer> differenceToNumberMap = new HashMap<>();
        for (Integer number : numberList) {
            if (number != null) {
                if (differenceToNumberMap.containsKey(number)) {
                    return true;
                } else {
                    differenceToNumberMap.put(k - number, number);
                }
            }
        }
        return false;
    }

}