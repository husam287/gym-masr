export interface HeroInfo {
    name: string,
    program: string,
    startingDate: Date,
    endingDate: Date,
    activeDaysNumber?:number,
    overtimeDaysNumber?:number,
    daysLeft?: number,
    haveToPay?: boolean
}

export class Hero {
    constructor(
        private hero: HeroInfo,

    ) {
        this.hero.daysLeft = this.getDays(this.hero.startingDate, this.hero.endingDate)
        if (this.hero.daysLeft <= 0) this.hero.haveToPay = true;
        else this.hero.haveToPay = false;
    }

    getHeroInfo() {
        return this.hero;
    }

    private getDays(startDate: Date, endingDate: Date): number {
        let timeInMs = endingDate.getTime() - startDate.getTime();
        let mins = (timeInMs / (1000 * 60));
        let days = mins / (60 * 24);

        return Math.floor(+days);
    }


}