package a.basic;
/*
 * [자바에서 객체란 무엇인가?]
 * 객체는 변수들의 컬렉션으로 정의할 수 있다. 
 * 개체와 개체들에 관련된 연산을 제공하는 메서드들의 모음.
 * 객체에는 상태와 행위가 있다고 생각하면 이해가 쉽다.
 * 
 * 객체는 여러 가지 의미에서 원시 타입과 다르며 가장 중요한 차이점은 
 * 빈 객체를 의미하는 표현인 null이 존재한다는 것이다.
 * 즉, 변수들은 null로 설정될 수 있으며 메서드 또한 null을 반환할 수 있다.
 */

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

public class B_Object {
	@Test(expected = NullPointerException.class)
	public void expectNullPointerExceptionToBeThrown() {
		final String s = null;
		final int stringLength = s.length();
	}
	
	/*
	 * 객체는 '참조 타입이다'라는 말이 정확히 무슨 의미인지 살펴보자.
	 * 예를들어 원시 타입은 int i = 42로 변수가 선언되었을 때 42라는 값이 메모리에 할당된다.
	 * 그러면 프로그램은 나중에 int j = i라는 형식으로 i에 의해 표현되는 값이 할당되었을 때
	 * 메모리의 다른 위치에 같은 값을 할당한다. 
	 * 일단 할당되고 나면 i는 j의 값에 영향을 미칠 수 없다.
	 * 
	 * 자바에서 new ArrayList(20) 같은 구문의 데이터를 저장하는 데 필요한 메모리에 요구한다.
	 * 즉, List myList = new ArrayList(20) 구문으로 생성된 객체를 변수에 할당할 때 myList는 
	 * 할당된 메모리 위치를 가리킨다.
	 * 표면적으로는 원시 타입의 메모리 할당과 객체의 메모리 할당은 같은 방식으로 동작하는
	 * 것처럼 보이지만 실제로는 그렇지 않다. 
	 * 왜냐하면 몇 개의 변수가 동일한 속성으로 생성된 객체에 할당될 경우 같은 메모리 위치를 가리키기 때문이다.
	 * 
	 * 즉, 한 인스턴스에 변경이 생기면 다른 인스턴스가 접근했을 때 영향을 미치게 된다.
	 *  
	 */
	
	@Test
	public void ObjectMemoryAssignment() {
		List<String> list1 = new ArrayList<>(20);
		
		list1.add("entry in list1");
		assertTrue(list1.size() == 1);
		
		List list2 = list1;
		list2.add("entry in list2");
		assertTrue(list1.size() == 2);
	}
}
