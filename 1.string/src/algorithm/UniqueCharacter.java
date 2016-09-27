package algorithm;

public class UniqueCharacter {
	public boolean isUniqueCharacterSet (String str) {
		int length = str.length();
		boolean isUnique = true;
		for (int i = 0; i < length; i++) {
			for (int j = i + 1; j < length; j++) {
				int k = str.charAt(i);
				if(str.charAt(j) == str.charAt(i)) {
					isUnique = false;
					break;
				}
			}
		}
		return isUnique;
	}
	
	public boolean isUniqueCharset_answer (String str) {
		int length = str.length();
		if(length > 256) return false;
		boolean[] char_set = new boolean[256];
		
		for(int i = 0; i < length; i++) {
			int val = str.charAt(i);
			if(char_set[val]) {
				return false;
			}
			char_set[val] = true;
		}
		return true;
	}
}

