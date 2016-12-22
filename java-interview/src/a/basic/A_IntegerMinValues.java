package a.basic;

import static org.junit.Assert.*;

import org.junit.Test;
/*
 * 왜 Integer.MIN_VALUES 에 대응하는 양수가 없는가?
 * - 2의 보수 표현에서 양수에 대응하는 음수는 2진수 기반의 NOT 비트연산을 적용하기 때문.
 * 
 * 128 : 1000 0000 (X)
 * 127 : 0111 1111
 *  ...
 * 2   : 0000 0010
 * 1   : 0000 0001
 * 0   : 0000 0000
 * -1  : 1111 1111
 * -2  : 1111 1110
 *  ...
 * -127: 1000 0001
 * -128: 1000 0000  
 * 
 * -128에 대응하는 양수가 없음..!
 * 하나의 2진수에 하나의 10진수만 저장가능..!
 */
public class A_IntegerMinValues {
	@Test
	public void absoluteOfMostNegativeValue() {
		final byte mostNegative = Byte.MIN_VALUE;
		System.out.println(mostNegative);
		final byte negated = (byte) Math.abs(mostNegative);
		System.out.println(negated);
		assertFalse("No positive equivalent of Integer.MIN_VALUE", negated>0);
	}
}
