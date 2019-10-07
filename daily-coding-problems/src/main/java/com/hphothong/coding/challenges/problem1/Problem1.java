package com.hphothong.coding.challenges.problem1;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

public class Problem1 {

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