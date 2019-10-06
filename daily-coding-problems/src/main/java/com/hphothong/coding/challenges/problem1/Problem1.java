package com.hphothong.coding.challenges.problem1;

import java.util.HashMap;
import java.util.List;

public class Problem1 {

    public boolean problem1(List<Integer> numberList, int k) {
        HashMap<Integer, Integer> differenceToNumberMap = new HashMap<>();

        for (Integer number : numberList) {
            if (number != null) {
                int difference = k - number;
                if (differenceToNumberMap.containsKey(difference)) {
                    return true;
                } else {
                    differenceToNumberMap.put(difference, number);
                }
            }
        }

        return false;
    }

}