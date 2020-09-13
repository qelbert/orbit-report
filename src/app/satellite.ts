export class Satellite {
name: string;
orbitType: string;
type: string;
operational: boolean;
launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning (): boolean {
        return this.type.toLowerCase() === 'space debris';
    }

    count(currentCount = 0) : number {
        return currentCount += 1;
      }

    // count(countType: string) : number {
    //     if (this.type.lowercase = countType) {
    //         count

    //     }
    //   }
}

