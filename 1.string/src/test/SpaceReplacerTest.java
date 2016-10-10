package test;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import algorithm.LinealCharacter;
import algorithm.SpaceReplacer;

public class SpaceReplacerTest {
	private SpaceReplacer sr = new SpaceReplacer();
	@Test
	public void test1() {
		assertEquals("replace space with '%20' : ", "Mr%20John%20Smith", sr.mySolution("Mr John Smith   "));
	}
	
	
}
