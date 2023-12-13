import { FC, useRef, useState } from 'react';
import styles from './index.module.scss';
import { IHistoryDate } from '../../types/historyDate';
import { nanoid } from 'nanoid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './swiper.scss';
import gsap from 'gsap';
import ChangeYears from '../ChangeYears';
import useIsMobile from '../../hooks/useIsMobile';


interface PropsHistoryDates {
    data: IHistoryDate[];
}


const HistoryDates: FC<PropsHistoryDates> = function HistoryDates({ data }) {
    const [numberDate, setNumberDate] = useState<number>(0);
    const circleRef = useRef(null);
    const swiperRef = useRef(null);
    const dateNameRef = useRef(null);
    const [dateBlockRotate, setDateBlockRotate] = useState<number>(0);
    const isMobile = useIsMobile(1100);

    const rotateCircle = (s: '+' | '-') => {
        gsap.to(circleRef.current, { rotation: `${s}=${360 / data.length}`, duration: 0.7 })
        setDateBlockRotate(prev => s === '+' ? prev + (360 / data.length) : prev - (360 / data.length))
        // gsap.to(swiperRef.current, { opacity: '0', duration: 0.4 })
        gsap.from(swiperRef.current, { opacity: '0', top: "15px", duration: 0.3, delay: 0.7 })
        // gsap.to(dateNameRef.current, { opacity: '0', duration: 0.4 })
        gsap.from(dateNameRef.current, { opacity: '0', top: "15px", duration: 0.3, delay: 0.7 })
    }
    const rotateCircleByIndex = (index: number) => {
        gsap.to(circleRef.current, { rotation: `-=${360 / data.length * (Math.abs(index - numberDate) < Math.ceil(data.length / 2) ? index - numberDate : index - numberDate > 0 ? index - numberDate - data.length : index - numberDate + data.length)}`, duration: 0.7 })
        setDateBlockRotate(prev => prev - (360 / data.length * (index - numberDate)))
    }


    return (
        <div className={styles.block}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <h2 className={styles.title}>Исторические даты</h2>
            <div className={styles.blockMain}>
                <div className={styles.circle}>
                    <div className={styles.dates} ref={circleRef}>
                        {data.map((item, index) =>
                            <div
                                key={nanoid(6)}
                                onClick={() => { setNumberDate(index); rotateCircleByIndex(index) }}
                                style={{ transform: `rotate(${360 / data.length * (index + 1) - 3}deg)` }}
                                className={styles.date}
                            >
                                <div
                                    className={`${styles.dateBlock} ${numberDate === index ? styles.activeDate : ''}`}
                                    style={{ transform: `rotate(${360 / data.length * -(index + 1) + 3 - dateBlockRotate}deg)` }}
                                >
                                    <div className={styles.number}><span>{index + 1}</span></div>
                                    <p className={styles.text}>{item.name}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.numberDates}>
                    <ChangeYears data={data} numberDate={numberDate} />
                </div>
                {!isMobile &&
                    <div className={styles.navigation}>
                        <p className={styles.navigationText}>
                            <span>0{numberDate + 1}</span>
                            /
                            <span>0{data.length}</span>
                        </p>
                        <div className={styles.arrows}>
                            <button
                                disabled={numberDate === 0} className={styles.arrow}
                                onClick={() => { setNumberDate(prev => prev - 1); rotateCircle('+') }}
                            >
                                <img src='../icons/arrowRight.png' alt="arrowRight" />
                            </button>
                            <button
                                disabled={numberDate === data.length - 1} className={styles.arrow}
                                onClick={() => { setNumberDate(prev => prev + 1); rotateCircle('-') }}
                            >
                                <img src='../icons/arrowRight.png' alt="arrowRight" />
                            </button>
                        </div>
                    </div>
                }
                {isMobile &&
                    <div ref={dateNameRef} className={styles.lineAndName}>
                        <p className={styles.name}>{data[numberDate].name}</p>
                        <div className={styles.line}></div>
                    </div>
                }
            </div>
            <div className={styles.blockDates} ref={swiperRef}>
                <div className={styles.filler}></div>
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    slidesPerView={'auto'}
                    spaceBetween={!isMobile ? 80 : 25}
                >
                    {data[numberDate].dates.map((item, index) =>
                        <SwiperSlide key={nanoid(6)}>
                            <div key={index} className={styles.date}>
                                <div className={styles.year}>{item.year}</div>
                                <p className={styles.text}>{item.text}</p>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className={styles.filler}></div>
            </div>
            {isMobile &&
                <div className={styles.NavAndPag}>
                    <div className={styles.navigation}>
                        <p className={styles.navigationText}>
                            <span>0{numberDate + 1}</span>
                            /
                            <span>0{data.length}</span>
                        </p>
                        <div className={styles.arrows}>
                            <button
                                disabled={numberDate === 0} className={styles.arrow}
                                onClick={() => { setNumberDate(prev => prev - 1); rotateCircle('+') }}
                            >
                                <img src='../icons/arrowRight.png' alt="arrowRight" />
                            </button>
                            <button
                                disabled={numberDate === data.length - 1} className={styles.arrow}
                                onClick={() => { setNumberDate(prev => prev + 1); rotateCircle('-') }}
                            >
                                <img src='../icons/arrowRight.png' alt="arrowRight" />
                            </button>
                        </div>
                    </div>
                    <div className={styles.pagination}>
                        {data.map((i, index) =>
                            <div key={nanoid(6)} className={`${styles.dot} ${numberDate === index ? styles.active : ''}`}></div>
                        )}
                    </div>
                </div>
            }
        </div>
    )
}

export default HistoryDates;