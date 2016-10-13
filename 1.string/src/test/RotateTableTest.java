package test;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import algorithm.RotateTable;

public class RotateTableTest {
	private RotateTable rt = new RotateTable();
	int[][] table = {
			{1,2,3,4},
			{5,6,7,8},
			{9,10,11,12},
			{13,14,15,16}
	};
	int[][] table_rotated = {
			{13,9,5,1},
			{14,10,6,2},
			{15,11,7,3},
			{16,12,8,4}
	};
	@Test
	public void test1() {
		int[][] table_result = rt.solution(table);
		
		for(int i=0; i<table_result.length; i++) {
			for(int j=0; j<table_result.length; j++) {
				assertEquals("Rotates the table 90 degrees : ", table_rotated[i][j] , table_result[i][j]);	
			}
		}
	}
}
