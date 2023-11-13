import React from 'react'

// import appLogo from '../images/amplichat.png'
import appLogo from '../images/jsk.png'
import telegramBadge from '../images/telegramButton.svg'

import doctorImage from '../images/doctor3.jpg'
// endorsement images
import dreamhub_filled from '../images/dreamhub_filled.png'
import voiceqna_filled from '../images/voiceqna_fill_v2_gradient.png'
import voicemirror_filled from '../images/voice_mirror_v_1024.png'
import bazipaipai_unfilled from '../images/bazipaipai_64.png'
import spindrifthome_filled from '../images/sh_unfill_1024.png'


// section images
import guitar from '../images/guitar.jpg'
import event_phones from '../images/event_phones.jpeg'
import foggy_blue from '../images/foggy_blue.jpg'
import purple_phones from '../images/purple_phones.png'
import purple_light from '../images/purple_light.jpg'
import concert_classic from '../images/concert_classic.jpg'

import discordImage from '../images/discord.png'

export const initialState = {


    appLogo: appLogo,
    appName: 'Manual',

    coverTitle: 'Курсы мануальной терапии',
    coverText: 'Откройте для себя мир возможностей с нашими интенсивными курсами мануальной терапии. Изучите техники, которые помогут вам понять и применить глубокие методы лечения, основанные на древних принципах и современных научных исследованиях. Наши курсы предназначены для тех, кто стремится к карьере в медицинской сфере и хочет обогатить свои знания и навыки в области физического восстановления и здоровья. Получите возможность работать со специалистами в области мануальной терапии и начните свой путь к вдохновляющей и перспективной карьере в сфере здравоохранения и реабилитации. Присоединяйтесь к нам и начните своё увлекательное путешествие к пониманию исцеления тела через мощные методы мануальной терапии.',
    telegramBadge: telegramBadge,
    telegramLink: 'https://t.me/+yODoda5DI4wzMWIy',
    videoTitle: 'Урок 1: Введение в массаж',
    videoUrl: 'https://www.youtube.com/watch?v=lc5ZwAyX6WM',
   
        
}

const initialContext = {
    state: initialState,
    dispatch: () => null,
}

export const Context = React.createContext(initialContext)
