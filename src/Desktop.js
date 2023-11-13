import React from 'react'

// import appLogo from '../images/amplichat.png'
import appLogo from '../images/jsk.png'
import telegramBadge from '../images/telegramButton.svg'

import doctorImage from '../images/doctor3.jpg'
// endorsement images

export const initialState = {


    appLogo: appLogo,
    appName: 'Manual',

    coverTitle: 'Курсы мануальной терапии',
    coverText: 'Откройте для себя мир возможностей с нашими интенсивными курсами мануальной терапии. Изучите техники, которые помогут вам понять и применить глубокие методы лечения, основанные на древних принципах и современных научных исследованиях. Наши курсы предназначены для тех, кто стремится к карьере в медицинской сфере и хочет обогатить свои знания и навыки в области физического восстановления и здоровья. Получите возможность работать со специалистами в области мануальной терапии и начните свой путь к вдохновляющей и перспективной карьере в сфере здравоохранения и реабилитации. Присоединяйтесь к нам и начните своё увлекательное путешествие к пониманию исцеления тела через мощные методы мануальной терапии.',
    telegramBadge: telegramBadge,
    telegramLink: 'https://t.me/+yODoda5DI4wzMWIy',
    doctorImage: doctorImage,
    videoTitle: 'Урок 1: Введение в массаж',
    videoUrl: 'https://www.youtube.com/watch?v=lc5ZwAyX6WM',
   
        
}

const initialContext = {
    state: initialState,
    dispatch: () => null,
}

export const Context = React.createContext(initialContext)
