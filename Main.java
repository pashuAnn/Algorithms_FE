public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
    }
    //1. Palindrome Number
    //    Given an integer x, return true if x is a palindrome, and false otherwise.
    public boolean isPalindrome(int x) {
        int reversed = 0;
        int temp = x;
        while (temp > 0) {
            reversed = reversed * 10 + temp % 10;
            temp /= 10;
        }
        return x == reversed;
    }
//2. Find the element that appears once in a sorted array
//Given a sorted array in which all elements occur twice (one after the other) and one element appears only once.
    // code solution
    public int findSingle(int arr[])
    {
        int n = arr.length;
        int res = arr[0];
        for (int i = 1; i < n; i++)
            res = res ^ arr[i];
        return res;
    }
}
