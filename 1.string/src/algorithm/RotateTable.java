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
				
				//������ ����
				int top = matrix[first][i];
				
				//���� -> ����
				matrix[first][i] = matrix[last-offset][first];
				
				//�Ʒ� -> ����
				matrix[last-offset][first] = matrix[last][last - offset];
				
				//������ -> �Ʒ�
				matrix[last][last - offset] = matrix[i][last];
				
				//�� -> ������
				matrix[i][last] = top;
			}
		}
		System.out.println(matrix.toString());
		return matrix;
	}
}
