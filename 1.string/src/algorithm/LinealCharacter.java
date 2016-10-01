package algorithm;

public class LinealCharacter {
	public boolean isLinealChars (String str1, String str2) {
		if(str1.length() != str2.length()) {
			return false;
		}
		int length = str1.length();
		for (int i = 0; i < length; i++) {
			if(str1.charAt(i) != str2.charAt(length - 1 - i)) {
				return false;
			}
		}
		return true;
	}
	
	public boolean permutation1 (String s, String t) {
		if(s.length() != t.length()) {
			return false;
		}
		return sort(s).equals(sort(t));
	}
	
	private String sort (String str) {
		char[] content = str.toCharArray();
		java.util.Arrays.sort(content);
		return new String(content);
	}
	
	public boolean permutation2 (String s, String t) {
		if(s.length() != t.length()) {
			return false;
		}
		int[] letters = new int[256];
		char[] sArray = s.toCharArray();
		
		for (int c: sArray) {
			letters[c]++;
		}
		
		for (int i = 0; i < t.length(); i++) {
			int d = (int)t.charAt(i);
			if(letters[d] <=0) {
				return false;
			}
		}
		
		return true;
	}
}
