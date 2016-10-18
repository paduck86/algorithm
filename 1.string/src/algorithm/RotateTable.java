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
	
	public int[][] rotate(int[][] matrix, int n) {
		int [][] matrix2 = new int[n][n];
		for (int layer = 0; layer < n/2; layer++) {
			int first = layer;
			int last = n - 1 - layer;
			for(int i = first; i < last; i++) {
				int offset = i - first;
				
				//위쪽을 저장
				int top = matrix[first][i];
				
				//왼쪽 -> 위쪽
				matrix[first][i] = matrix[last-offset][first];
				
				//아래 -> 왼쪽
				matrix[last-offset][first] = matrix[last][last - offset];
				
				//오른쪽 -> 아래
				matrix[last][last - offset] = matrix[i][last];
				
				//위 -> 오른쪽
				matrix[i][last] = top;
			}
		}
		System.out.println(matrix.toString());
		return matrix;
	}
}
