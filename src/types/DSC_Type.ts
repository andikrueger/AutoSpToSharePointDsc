import { Helpers } from '../helpers';
import { DSC_Credential } from './index';

export abstract class DSC_Type {

    dependsOn: string;
    psDscRunAsCredential: DSC_Credential;

    private _dscResourceId: string = '';
    private _dscResourceType: string = '';

    constructor() {
        var _self = this;
        var classObject = Object.getPrototypeOf(_self);
        var dscResource = classObject.constructor.name.replace('MSFT_', '');
        this._dscResourceType = dscResource;

        this._dscResourceId = Helpers.generateGuid();
    }

    public get Name(): string {
        return `${this._dscResourceType} ${this._dscResourceId}`;
    }

    public get DependanceName(): string {
        return `[${this._dscResourceType}]${this._dscResourceId}`;
    }

    public toString = (): string => {
        var _self = this;

        var propertyValues = '';
        for (var key in _self) {
            if (_self.hasOwnProperty(key) && !key.startsWith('_dsc')) {
                var val = _self[key];
                var name = `${key.toString().substring(0, 1).toUpperCase()}${key.toString().substring(1)}`;
                switch (typeof val) {
                    case 'function':
                        break;
                    case 'object':
                        var subClassObject = Object.getPrototypeOf(val);
                        var subVal = val as {};
                        if (subClassObject.constructor.name === 'DSC_Credential') {
                            propertyValues += `
                            ${name}   =   ${subVal.toString()}`;
                        }
                        if (subClassObject.constructor.name === 'DSC_Ensure') {
                            propertyValues += `
                            ${name}   =   ${subVal.toString()}`;
                        }
                        break;
                    case 'boolean':
                        propertyValues += `
                            ${name}   =   ${val ? '$true' : '$false'}`;
                        break;
                    default:
                        if (name === 'DependsOn' && (val as string).startsWith('@')) {
                            propertyValues += `
                            ${name}   =   ${val}`;
                        } else {
                            propertyValues += `
                            ${name}   =   "${val}"`;
                        }
                        break;
                }
            }
        }

        var configurationValue = `
                ${this.Name}
                {
                    ${propertyValues}
                }
            `;
        return configurationValue;
    }
}