package test;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import algorithm.SetZeroes;



public class SetZeroesTest {
	private SetZeroes sz = new SetZeroes();
	int[][] table1 = {
			{1,2,0,4},
			{5,0,7,8},
			{9,10,11,12},
			{13,14,15,16}
	};
	
	@Test
	public void test1() {
		int[][] table_result = sz.setZeroes(table1);
		for(int i=0; i<table_result.length; i++) {
			for(int j=0; j<table_result[0].length; j++) {
				System.out.print(table_result[i][j] + ",");
				//assertEquals("Rotates the table 90 degrees : ", table1_rotated[i][j] , table_result[i][j]);
			}
			System.out.println();
		}
	}
	
}
