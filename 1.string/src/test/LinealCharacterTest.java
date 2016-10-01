package test;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import algorithm.LinealCharacter;

public class LinealCharacterTest {
	private LinealCharacter lc = new LinealCharacter();
	@Test
	public void test1() {
		assertEquals("is lineal character set : ", false, lc.isLinealChars("Dog  ", "goD"));
	}
	
	@Test
	public void test2() {
		assertEquals("is lineal character set : ", true, lc.isLinealChars("Dog", "goD"));
	}
	
	@Test
	public void test3() {
		assertEquals("is lineal character set : ", false, lc.isLinealChars("Dog", "god"));
	}
	
	@Test
	public void test4() {
		assertEquals("permutation 1 :", true, lc.permutation1("dog", "god"));
	}
	
	@Test
	public void test5() {
		assertEquals("permutation 2 :", true, lc.permutation2("dog", "god"));
	}
}
