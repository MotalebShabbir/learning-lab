class Solution:
    def findDegrees(self, matrix: list[list[int]]) -> list[int]:
        degree = [0] * len(matrix)
        for i in range(len(matrix)):
            degree[i] = sum(matrix[i])
        return degree

# submission link: https://leetcode.com/problems/find-the-degree-of-each-vertex/submissions/1999134611