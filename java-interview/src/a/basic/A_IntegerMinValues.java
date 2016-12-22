package a.basic;

import static org.junit.Assert.*;

import org.junit.Test;
/*
 * �� Integer.MIN_VALUES �� �����ϴ� ����� ���°�?
 * - 2�� ���� ǥ������ ����� �����ϴ� ������ 2���� ����� NOT ��Ʈ������ �����ϱ� ����.
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
 * -128�� �����ϴ� ����� ����..!
 * �ϳ��� 2������ �ϳ��� 10������ ���尡��..!
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
