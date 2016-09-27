package algorithm;

public class UniqueCharacter {
	public boolean isUniqueCharacterSet (String str) {
		int length = str.length();
		boolean isUnique = true;
		for (int i = 0; i < length; i++) {
			for (int j = i + 1; j < length; j++) {
				if(str.charAt(j) == str.charAt(i)) {
					isUnique = false;
					break;
				}
			}
		}
		return isUnique;
	}
}

