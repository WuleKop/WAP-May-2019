/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wule;

/**
 *
 * @author wule
 */
public class Quiz {
     private static  String[] questions={
        "3,1,4,1,5",
        "1,1,2,3,5",
        "1,4,9,16,25",
        "2,3,5,7,11",
        "1,2,4,8,16"
    };
    private static int[] answers={9,8,36,13,32};
    private static int i=1;
    private static int j=0;
    
    public String getQuestion(int k){
        return questions[k];
    }
    public int getAnswers(int m){
        return answers[m];
    }
    public int getI(){
        return i;
    }
    public int rightAnswer(String ans){
            
             if(ans.equals(Integer.toString(answers[i-1]))){
                 j++;
             }
            i++;
            
        return j;
    }
    public void reset(){
        i=1;
        j=0;
    }
    
}