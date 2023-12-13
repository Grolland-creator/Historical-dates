import { FC, useEffect, memo, useState } from 'react';
import styles from './index.module.scss';
import { IHistoryDate } from '../../types/historyDate';

interface Props {
    data: IHistoryDate[],
    numberDate: number,
}

const ChangeYears: FC<Props> = ({ data, numberDate}) => {
    const [firstYear, setFirstYear] = useState<number>(2000);
    const [secondYear, setSecondYear] = useState<number>(2000);

    useEffect(() => {
        let t = 300 / Math.abs(data[numberDate].dates[0].year - firstYear)
        firstYear < data[numberDate].dates[0].year ? setTimeout(setFirstYear, t, firstYear + 1) : firstYear > data[numberDate].dates[0].year && setTimeout(setFirstYear, t, firstYear - 1)
        let k = 300 / Math.abs(data[numberDate].dates[data[numberDate].dates.length - 1].year - secondYear)
        secondYear < data[numberDate].dates[data[numberDate].dates.length - 1].year ? setTimeout(setSecondYear, k, secondYear + 1) : secondYear > data[numberDate].dates[data[numberDate].dates.length - 1].year && setTimeout(setSecondYear, k, secondYear - 1)
    }, [firstYear, secondYear, numberDate, data]);

    return (
        <>
            <span className={styles.year}>{firstYear}</span>
            <span className={styles.year}>{secondYear}</span>
        </>
    )
}

export default memo(ChangeYears);