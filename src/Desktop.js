import {
    Typography,
    Layout,
    Row,
    Col,
    Affix,
    Image
} from 'antd'


import {
    motion,
} from 'framer-motion'

import {
    useContext,
} from 'react'

import { Context } from './store/Context'
import photo from './images/spine.jpg'

// props: image
function FloatImageCol(props) {
    return (
        <Col span={12}>
            <Row justify='center'>
            <motion.div 
                    initial={{y: 300, opacity: 0}} 
                    whileInView={{y: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                    viewport={{once: true}}>
                <Image height={400} preview={false} src={props.image} style={{'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}></Image>
            </motion.div>
            </Row>
        </Col>
    )
}

// props title, text
function FloatTextCol(props) {
    return (
        <Col span={12}>
            <motion.div 
                    initial={{y: 300, opacity: 0}} 
                    whileInView={{y: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                    viewport={{once: true}}>
                <Row justify='center' style={{'padding': '0px 50px'}}>
                    <Typography.Title>
                        {props.title}
                    </Typography.Title>
                </Row>
                <Row justify='center' style={{'padding': '0px 50px'}}>
                    <Typography style={{'fontSize': '16px'}}>
                        {props.text}
                    </Typography>
                </Row>
            </motion.div>
        </Col>
    )
}

// props: sectionItem, backgroundColor
// function SectionItemImageOnTheLeft(props) {
//     return (
//         <Row justify='center' align='middle' style={{'backgroundColor': props.backgroundColor, 'height': '700px', 'padding': '100px'}}>
//             <Row justify='center' align='middle' style={{'maxWidth': '2000px'}}>
//                 <FloatImageCol image={props.sectionItem.image} />
//                 <FloatTextCol title={props.sectionItem.title} text={props.sectionItem.text} />
//             </Row>
//         </Row>
//     )
// }

// props: sectionItem, backgroundColor
// function SectionItemImageOnTheRight(props) {
//     return (
//         <Row justify='center' align='middle' style={{'backgroundColor': props.backgroundColor, 'height': '700px', 'padding': '100px'}}>
//             <Row justify='center' align='middle' style={{'maxWidth': '2000px'}}>
//                 <FloatTextCol title={props.sectionItem.title} text={props.sectionItem.text} />
//                 <FloatImageCol image={props.sectionItem.image} />
//             </Row>
//         </Row>
//     )
// }

// props: sectionList
// function SectionList(props) {
//     return (
//         <>
//         {
//             props.sectionList.map((sectionItem, index) => {
//                 return (
//                     index % 2 === 0?
//                         <SectionItemImageOnTheLeft sectionItem={sectionItem} backgroundColor={'white'} />
//                         :
//                         <SectionItemImageOnTheRight sectionItem={sectionItem} backgroundColor={null} />
//                 )

//             })
//         }
//         </>
//     )
// }


function Desktop() {
    const {state, dispatch} = useContext(Context)

    return (
        <Layout style={{'minWidth': '1000px'}}>
            <Affix offsetTop={0}>
                <Layout.Header style={{'background': 'white', 'height': '70px'}}>
                    <Row justify='center' align='top' style={{'backgroundColor': 'white', 'height': '100%'}}>
                        <Row justify='start' align='top' style={{'maxWidth': '2000px', 'width': '100%', 'height': '100%', 'backgroundColor': 'white'}}>
                            <Col offset={1} style={{'cursor': 'pointer'}} onClick={() => { window.scrollTo(0, 0)}}>
                                <Row justify='center' align='bottom'>
                                    <Col>
                                        <Image height={70} preview={false} src={state.appLogo}></Image>
                                    </Col>
                        
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                </Layout.Header>
            </Affix>

            <Layout.Content>
                {/* cover headline */}
                <Row justify='center' align='middle' style={{ 'height': '1000px'}}>
                    <img src={photo} style={{position: 'absolute',backgroundSize: 'cover',width: '100%',height: '100%',minWidth: '1000px'}}/>
                <Row justify='center' align='middle' style={{'maxWidth': '2000px'}}>
                    <Col style={{'width': '100%'}}>
                        <Row justify='center' style={{'padding': '0px 50px'}}>
                            <Typography.Title >
                           
                            Курсы мануальной терапии
                            </Typography.Title>
                        </Row>

                        <Row justify='center' style={{'padding': '0px 50px'}}>
                            <Typography style={{'fontSize': '1.3rem',fontWeight: 700,textAlign: 'center',width: '70%'}}>
                                {/* {state.coverText} */}
                                Откройте для себя мир возможностей с нашими интенсивными курсами мануальной терапии. Изучите техники, которые помогут вам понять и применить глубокие методы лечения, основанные на древних принципах и современных научных исследованиях. Наши курсы предназначены для тех, кто стремится к карьере в медицинской сфере и хочет обогатить свои знания и навыки в области физического восстановления и здоровья. Получите возможность работать со специалистами в области мануальной терапии и начните свой путь к вдохновляющей и перспективной карьере в сфере здравоохранения и реабилитации. Присоединяйтесь к нам и начните своё увлекательное путешествие к пониманию исцеления тела через мощные методы мануальной терапии.
                            </Typography>
                        </Row>
                        
                   
                    </Col>

                   
                </Row>
                </Row>


                {/* endorsement list */}
                <Row justify='center' align='middle' style={{'height': '700px', 'padding': '100px'}}>
                <Row justify='center' align='middle' style={{'maxWidth': '2000px'}}>
                
                    <motion.div 
                            initial={{y: 300, opacity: 0}} 
                            whileInView={{y: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                            viewport={{once: true}}>
                        <Row justify='center'>
                            <Typography.Title style={{width: '100%',maxWidth: '525px'}}>
                            {/* {state.coverTitle} */}
                            Присоединяйтесь к нашему Telegram для увлекательных курсов мануальной терапии!
                            </Typography.Title>
                        </Row>
                        <Row justify='center'>
                            <Typography style={{'fontSize': '16px'}}>
                            {/* {state.coverText} */}
                            </Typography>
                        </Row>

                        <Row justify='center' style={{'marginTop': '50px'}}>
                            
                            {
                                    state.telegramLink &&
                                    <Col style={{'width': '200px'}}>
                                        <Row justify='center'>
                                        <a href={state.telegramLink} target='_blank' rel="noopener noreferrer">
                                            <Image height={50} preview={false} src={state.telegramBadge}></Image>
                                        </a>
                                        </Row>
                                    </Col>
                                }
                               
                            
                        </Row>
                    </motion.div>
                    
                </Row>
                </Row>



                {/* policies */}
                <Row justify='center' align='middle' style={{'backgroundColor': 'white', 'height': '250px', 'padding': '100px'}}>
                <Row justify='end' align='top' style={{'maxWidth': '2000px', 'width': '100%','backgroundColor' : 'white'}}>
                    <Col style={{'padding': '0px 20px'}}>
                        <Row justify='center' align='middle' style={{'cursor': 'pointer'}} onClick={() => { window.scrollTo(0, 0)}}>
                            <Col>
                                <Image height={70} preview={false} src={state.appLogo} ></Image>
                            </Col>
                        
                        </Row>
                      
                    </Col>

                    

                 
                </Row>                
                </Row>


            </Layout.Content>

        </Layout>
    )
}

export default Desktop
