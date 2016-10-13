package algorithm;

public class RotateTable {
	public int[][] solution(int[][] table) {
		int length = table.length;
		int[][] matrix = new int[length][length];
		
		for(int i = 0; i < length; i++) {
			for(int j = 0; j < length; j++) {
				matrix[length-i-1][length-1-j] = table[j][length-1-i];
			}
		}
		
		return matrix;
	}
}
