package test;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import algorithm.SayString;

public class SayStringTest {
	private SayString ss = new SayString();
	@Test
	public void test1() {
		assertEquals("say string1 : ", "a2b1c8a3b1", ss.mySolution("aabccccccccaaab"));
	}
	
	@Test
	public void test2() {
		assertEquals("say string2 : ", "a2b1c8a3b2", ss.mySolution("aabccccccccaaabb"));
	}

}
