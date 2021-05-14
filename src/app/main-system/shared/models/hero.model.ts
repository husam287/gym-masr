import { DateFunctionsService } from "src/app/shared/services/date-functions.service";

export interface HeroInfo {
    _id?:string,
    name: string,
    program: string,
    startingDate: Date,
    endingDate: Date,
    attendToday?:boolean,
    activeDaysNumber?: number,
    overtimeDaysNumber?: number,
    daysLeft?: number,
    status?: string //danger _ inactive _ active
}

export class Hero {    
    constructor(
        private hero: HeroInfo,
    ) {
        //status and daysLeft number init
        this.hero.daysLeft = this.getDaysLeft(this.hero.endingDate)
        if (this.hero.daysLeft <= 0 && this.hero.overtimeDaysNumber > 0) this.hero.status = 'danger';
        else if (this.hero.daysLeft <= 0 && this.hero.overtimeDaysNumber == 0) this.hero.status = 'inactive'
        else this.hero.status = 'active';

        //active and overtime init
        if (!this.hero.activeDaysNumber) this.hero.activeDaysNumber = 0;
        if(!this.hero.overtimeDaysNumber) this.hero.overtimeDaysNumber = 0;
    }

    /**
     * Get hero info
     */
    public get getHeroInfo(): HeroInfo {
        return this.hero;
    }


    /**
     * Get a proper bootstrap class to represent the hero status
     */
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

    public markAttendance(){
        this.hero.attendToday=true;
    }

    /**
     * To calculate the remaining days till resubscript
     * @param endingDate End date
     * @returns Remaining days
     */
    private getDaysLeft(endingDate: Date): number {
        let timeInMs = endingDate.getTime() - new Date().getTime();
        let mins = (timeInMs / (1000 * 60));
        let days = mins / (60 * 24);

        return Math.ceil(+days); //get always the ceiling (3.2 days => 4 days) as the day don't finish yet
    }


}