package a.string.test;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

import a.string.algorithm.UniqueCharacter;

public class UniqueCharacterTest {
	@Test
	public void test1() {
		UniqueCharacter uc = new UniqueCharacter();
		assertEquals("is not unique character set : ", false, uc.isUniqueCharacterSet("123111"));
	}
	
	@Test
	public void test2() {
		UniqueCharacter uc = new UniqueCharacter();
		assertEquals("is unique character set : ", true, uc.isUniqueCharacterSet("123456"));
	}

}
