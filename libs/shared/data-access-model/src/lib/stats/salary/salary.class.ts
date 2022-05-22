import { LevelDependentStat } from '../level/level.dependent.stat';

export class Salary extends LevelDependentStat {
    // eslint-disable-next-line no-magic-numbers
    private static SALARY_BOOST_PER_LEVEL = 0.06;

    public calculateValue(): number {
        const levelModifier = 1 + this._level.finalValue * Salary.SALARY_BOOST_PER_LEVEL;
        this._finalValue = this.baseValue * levelModifier;
        this.applyRawBonuses();
        this.applyFinalBonuses();
        return this._finalValue;
    }
}