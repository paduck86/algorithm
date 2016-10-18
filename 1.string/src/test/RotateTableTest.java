package test;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import algorithm.RotateTable;

public class RotateTableTest {
	private RotateTable rt = new RotateTable();
	int[][] table1 = {
			{1,2,3,4},
			{5,6,7,8},
			{9,10,11,12},
			{13,14,15,16}
	};
	int[][] table1_rotated = {
			{13,9,5,1},
			{14,10,6,2},
			{15,11,7,3},
			{16,12,8,4}
	};
	int[][] table2 = {
			{1,2,3},
			{4,5,6},
			{7,8,9}
	};
	int[][] table2_rotated = {
			{7,4,1},
			{8,5,2},
			{9,6,3}
	};
	/*@Test
	public void test1() {
		int[][] table_result = rt.solution(table1);
		
		for(int i=0; i<table_result.length; i++) {
			for(int j=0; j<table_result.length; j++) {
				assertEquals("Rotates the table 90 degrees : ", table1_rotated[i][j] , table_result[i][j]);	
			}
		}
	}*/
	@Test public void test2() {
		int[][] table_result = rt.rotate(table1, 4);
		for(int i=0; i<table_result.length; i++) {
			for(int j=0; j<table_result.length; j++) {
				System.out.print(table_result[i][j] + ",");
				//assertEquals("Rotates the table 90 degrees : ", table1_rotated[i][j] , table_result[i][j]);
			}
			System.out.println();
		}
	}
	@Test public void test3() {
		System.out.println(table2.toString());
		int[][] table_result = rt.rotate(table2, 3);
		for(int i=0; i<table_result.length; i++) {
			for(int j=0; j<table_result.length; j++) {
				System.out.print(table_result[i][j] + ",");
				//assertEquals("Rotates the table 90 degrees : ", table2_rotated[i][j] , table_result[i][j]);	
			}
			System.out.println();
		}
	}
}
