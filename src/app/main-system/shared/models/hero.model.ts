export interface HeroInfo {
    name: string,
    program: string,
    startingDate: Date,
    endingDate: Date,
    activeDaysNumber?: number,
    overtimeDaysNumber?: number,
    daysLeft?: number,
    status?: string //danger _ inactive _ active
}

export class Hero {
    constructor(
        private hero: HeroInfo,

    ) {
        this.hero.daysLeft = this.getDaysLeft(this.hero.endingDate)
        if (this.hero.daysLeft <= 0 && this.hero.overtimeDaysNumber > 0) this.hero.status = 'danger';
        else if (this.hero.daysLeft <= 0 && this.hero.overtimeDaysNumber == 0) this.hero.status = 'inactive'
        else this.hero.status = 'active';
    }

    public get getHeroInfo(): HeroInfo {
        return this.hero;
    }


    public get getStatusClass(): string {
        switch (this.hero.status) {
            case 'inactive':
                return 'alert-secondary'
            case 'danger':
                return 'alert-danger'
            default:
                return '';
        }
    }


    private getDaysLeft(endingDate: Date): number {
        let timeInMs = endingDate.getTime() - new Date().getTime();
        let mins = (timeInMs / (1000 * 60));
        let days = mins / (60 * 24);

        return Math.floor(+days);
    }


}