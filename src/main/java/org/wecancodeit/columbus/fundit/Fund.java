package org.wecancodeit.columbus.fundit;

public class Fund {

	private String fundName;

	public String getFundName() {
		return fundName;
	}

	public Fund(String fundName) {
		this.fundName = fundName;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((fundName == null) ? 0 : fundName.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Fund other = (Fund) obj;
		if (fundName == null) {
			if (other.fundName != null)
				return false;
		} else if (!fundName.equals(other.fundName))
			return false;
		return true;
	}

	public Fund() {
	}

}
