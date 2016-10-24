package algorithm;

public class SetZeroes {
	public int[][] setZeroes(int[][] matrix) {
		int rowCnt = matrix.length;
		int columnCnt = matrix[0].length;
		boolean[] row = new boolean[rowCnt];
		boolean[] column = new boolean[columnCnt];
		
		for(int i=0; i<rowCnt; i++) {
			for(int j=0; j<columnCnt; j++) {
				if(matrix[i][j] == 0) {
					row[i] = true;
					column[j] = true;
				}
			}
		}
		
		for(int i=0; i<rowCnt; i++) {
			for(int j=0; j<columnCnt; j++) {
				if(row[i] == true || column[j] == true) {
					matrix[i][j] = 0;
				}
			}
		}
		return matrix;
	}
}
