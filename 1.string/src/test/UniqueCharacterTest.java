package test;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

import algorithm.UniqueCharacter;

public class UniqueCharacterTest {
	@Test
	public void test1() {
		UniqueCharacter uc = new UniqueCharacter();
		assertEquals("is not unique character set : ", false, uc.isUniqueCharset_answer("123111"));
	}
	
	@Test
	public void test2() {
		UniqueCharacter uc = new UniqueCharacter();
		assertEquals("is unique character set : ", true, uc.isUniqueCharset_answer("123456"));
	}

}
