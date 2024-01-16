# Water Jug Challenge Test
**Name:** Prince Ibewiro  
**Date:** 01/10/2024  

## Algorithmic Approach
Breadth-First Search (BFS) approach was employed for this challenge. BFS explores all possible states, checking all combinations of water levels in the buckets. It guarantees that the first solution found is the shortest path, showing the result with the least amount of steps. If there is a solution, BFS will find it.

## Test Case: Passing Case
- Bucket X = 18
- Bucket Y = 3
- Target Bucket = 12

| Action                                | Bucket X Amount     | Bucket Y Amount   |
| ------------------------------------- | ------------------- | ------------------ |
| Fill Bucket X                         | 18 (Full)           | 0 (Empty)          |
| Transfer from Bucket X to Bucket Y    | 15 (Partially Full) | 3 (Full)           |
| Empty Bucket Y                        | 15 (Partially Full) | 0 (Empty)          |
| Transfer from Bucket X to Bucket Y    | 12 (Partially Full) | 3 (Full)           |

**Solution:**
- The greatest common denominator of 18 and 3 is 3.
- (12 % 3) is 0, indicating there is a solution.

## Test Case: Passing Case
- Bucket X = 14
- Bucket Y = 49
- Target Bucket = 21

| Action                                | Bucket X Amount        | Bucket Y Amount        |
| ------------------------------------- | ---------------------- | ---------------------- |
| Fill Bucket Y                         | 0 (Empty)              | 49 (Full)              |
| Transfer from Bucket Y to Bucket X    | 14 (Full)              | 3 (Partially Full)     |
| Empty Bucket X                        | 0 (Empty)              | 0 (Partially Full)     |
| Transfer from Bucket Y to Bucket X    | 14 (Full)              | 3 (Partially Full)     |

**Solution:**
- The greatest common denominator of 14 and 49 is 7.
- (49 % 7) is 0, indicating there is a solution.

## Test Case: Passing Case
- Bucket X = 5
- Bucket Y = 40
- Target Bucket = 20

| Action                                | Bucket X Amount       | Bucket Y Amount       |
| ------------------------------------- | --------------------- | --------------------- |
| Fill Bucket X                         | 5 (Full)              | 0 (Empty)             |
| Transfer from Bucket X to Bucket Y    | 0 (Empty)             | 5 (Partially Full)    |
| Fill Bucket X                         | 5 (Full)              | 5 (Partially Full)    |
| Transfer from Bucket X to Bucket Y    | 0 (Empty)             | 10 (Partially Full)   |
| Fill Bucket X                         | 5 (Full)              | 10 (Partially Full)  |
| Transfer from Bucket X to Bucket Y    | 0 (Empty)             | 15 (Partially Full)  |
| Fill Bucket X                         | 5 (Full)              | 15 (Partially Full)  |
| Transfer from Bucket X to Bucket Y    | 0 (Empty)             | 20 (Partially Full)  |

**Solution:**
- The greatest common denominator of 5 and 40 is 5.
- (20 % 5) is 0, indicating there is a solution.

## Test Case: Failing Case
- Bucket X = 4
- Bucket Y = 10
- Target Bucket = 5 

**No Solution:**
- The greatest common denominator of 4 and 10 is 2.
- (5 % 2) is 1, which needs to be 0, indicating there is no solution.

## Test Case: Failing Case
- Bucket X = 5
- Bucket Y = 40
- Target Bucket = 22

**No Solution:**
- The greatest common denominator of 5 and 40 is 5.
- (22 % 5) is 2, which needs to be 0, indicating there is no solution.

## Test Case: Failing Case
- Bucket X = 10
- Bucket Y = 20
- Target Bucket = 40

**No Solution:**
- Invalid because both Bucket X and Bucket Y are bigger than the Target Bucket.

## Instructions to Run App:
- Run "npm install" to install dependencies.
- Run "npm run dev" to start the app on your browser.

## Instructions to Test App:
- Run "npm run test" to test the app.

The app will run on port 3000.
