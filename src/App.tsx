import { FC } from 'react';
import './App.scss';
import HistoryDates from './components/HistoryDates';
import { IHistoryDate } from './types/historyDate';

const dates: IHistoryDate[] = [
    {
        name: 'Lorem',
        dates: [
            {
                year: 1992,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 1993,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 1994,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 1995,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 1996,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 1998,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
        ]
    },
    {
        name: 'Кино',
        dates: [
            {
                year: 2019,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 2022,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
        ]
    },
    {
        name: 'Литература',
        dates: [
            {
                year: 1995,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 1996,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 1998,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 2004,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 2009,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 2021,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
        ]
    },
    {
        name: 'Lorem',
        dates: [
            {
                year: 1987,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 1992,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 1994,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 2002,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 2009,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 2018,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
        ]
    },
    {
        name: 'Lorem',
        dates: [
            {
                year: 1983,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 1991,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 1998,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 2001,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 2003,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 2015,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
        ]
    },
    {
        name: 'Наука',
        dates: [
            {
                year: 2003,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 2005,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 2006,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 2008,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 2009,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
            {
                year: 2013,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae voluptates itaque animi quisquam saepe facilis aliquam voluptatibus ipsam dignissimos sapiente, voluptate, numquam quam consequatur magnam et quia inventore laborum!'
            },
        ]
    }
]

const App: FC = () => {
    return (
        <div className="App">
            <HistoryDates data={dates}/>
        </div>
    )
}

export default App;
