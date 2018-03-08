import { DscType } from '../../Dsc';

export class SharePointNode {
    public serverName: string;
    public installSteps: DscType[] = new Array<DscType>();

    constructor($serverName: string) {
        this.serverName = $serverName;
    }

    public addStep = (installStep: DscType, dependsOn?: string): void => {
        let steps: number = this.installSteps.length;
        if (steps > 0) {
            installStep.dependsOn = this.installSteps[steps - 1].DependanceName;
            if (dependsOn !== undefined) {
                if (installStep.dependsOn !== dependsOn) {
                    installStep.dependsOn = `@("${this.installSteps[steps - 1].DependanceName}","${dependsOn}")`;
                }
            }
        }
        this.installSteps.push(installStep);
    }

    public toString = (): string => {
        let val: string = `

            Node ${this.serverName}
            {
        `;
        for (let i: number = 0; i < this.installSteps.length; i++) {
            let currentStep: DscType = this.installSteps[i];
            val += currentStep.toString();
        }
        val += `
            }`;
        return val;
    }
}
