export function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const currentSum = numbers[left] + numbers[right];
        
        if (currentSum === target) {
            // Adding 1 to convert to 1-based indexing
            return [left + 1, right + 1];
        }
        
        if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return []; // Should never reach here given problem constraints
}
