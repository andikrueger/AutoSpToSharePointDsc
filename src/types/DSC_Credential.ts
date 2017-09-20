export class DSC_Credential {
	private userName: string;
	private password: string;
	private domainName?: string;

	constructor(userName: string, password: string, domainName?: string) {
		this.userName = userName;
		this.password = password;
		this.domainName = domainName;
	}

	public toString = (): string => {
		return "DSC_Credential";
	}
}