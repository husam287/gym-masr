export class hero {
    constructor(
        private name: string,
        private program: string,
        private startingDate: Date,
        private endingDate: Date,
        private daysLeft?: number,
    ) {
        this.daysLeft = this.getDays(this.startingDate,this.endingDate)
    }

    private getDays(startDate: Date, endingDate: Date): number {
        let timeInMs = endingDate.getTime() - endingDate.getTime();
        let mins = (timeInMs / (1000 * 60));
        let days = mins/(60*24);

        return Math.floor(days);
    }
}