import {
    Typography,
    Layout,
    Row,
    Col,
    Affix,
    Image,
    Button,
    Tooltip,
    Popover,
} from 'antd'

import {
    DownloadOutlined,
} from '@ant-design/icons'

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
function SectionItemImageOnTheLeft(props) {
    return (
        <Row justify='center' align='middle' style={{'backgroundColor': props.backgroundColor, 'height': '700px', 'padding': '100px'}}>
            <Row justify='center' align='middle' style={{'maxWidth': '2000px'}}>
                <FloatImageCol image={props.sectionItem.image} />
                <FloatTextCol title={props.sectionItem.title} text={props.sectionItem.text} />
            </Row>
        </Row>
    )
}

// props: sectionItem, backgroundColor
function SectionItemImageOnTheRight(props) {
    return (
        <Row justify='center' align='middle' style={{'backgroundColor': props.backgroundColor, 'height': '700px', 'padding': '100px'}}>
            <Row justify='center' align='middle' style={{'maxWidth': '2000px'}}>
                <FloatTextCol title={props.sectionItem.title} text={props.sectionItem.text} />
                <FloatImageCol image={props.sectionItem.image} />
            </Row>
        </Row>
    )
}

// props: sectionList
function SectionList(props) {
    return (
        <>
        {
            props.sectionList.map((sectionItem, index) => {
                return (
                    index % 2 === 0?
                        <SectionItemImageOnTheLeft sectionItem={sectionItem} backgroundColor={'white'} />
                        :
                        <SectionItemImageOnTheRight sectionItem={sectionItem} backgroundColor={null} />
                )

            })
        }
        </>
    )
}
// function VideoLesson (props)  {
//     return (
//       <div className="video-lesson">
//         <h2>{props.title}</h2>
//         <div className="video-container">
//           <iframe
//             width="560"
//             height="315"
//             src={props.videoUrl}
//             title={props.title}
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
//           ></iframe>
//         </div>
//       </div>
//     );
//   };

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
                                    {/* <Col>
                                        <Typography.Title level={3} style={{'color': 'black', 'marginLeft': '10px'}}>{state.appName}</Typography.Title>
                                    </Col> */}
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
                                {/* {state.coverTitle} */}
                            Курсы мануальной терапии
                            </Typography.Title>
                        </Row>

                        <Row justify='center' style={{'padding': '0px 50px'}}>
                            <Typography style={{'fontSize': '1.3rem',fontWeight: 700,textAlign: 'center',width: '70%'}}>
                                {/* {state.coverText} */}
                                Откройте для себя мир возможностей с нашими интенсивными курсами мануальной терапии. Изучите техники, которые помогут вам понять и применить глубокие методы лечения, основанные на древних принципах и современных научных исследованиях. Наши курсы предназначены для тех, кто стремится к карьере в медицинской сфере и хочет обогатить свои знания и навыки в области физического восстановления и здоровья. Получите возможность работать со специалистами в области мануальной терапии и начните свой путь к вдохновляющей и перспективной карьере в сфере здравоохранения и реабилитации. Присоединяйтесь к нам и начните своё увлекательное путешествие к пониманию исцеления тела через мощные методы мануальной терапии.
                            </Typography>
                        </Row>
                        {/* <Row justify='center' style={{'padding': '0px 50px'}}>
                            <Typography style={{'fontSize': '1.3rem',fontWeight: 500,textAlign: 'center'}}>
                  
                                Если вы желаете записаться на курс<br />
                                то переходите ниже по странице
                            </Typography>
                        </Row> */}
                   
                    </Col>

                    {/* <Col style={{'width': '60%'}}>
                        <Row justify='center'>
                        <Image width={800} height={700} preview={false} src={state.doctorImage}></Image>
                        </Row>
                    </Col> */}
                     {/* <div className="video-lesson-list">
                        <h1>Онлайн курсы по массажу</h1>
                    
                     <Vide title={state.title} videoUrl={state.videoUrl} />
                    
                    </div> */}
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

                {/* section list */}
                {/* <SectionList sectionList={state.sectionList} /> */}


                {/* policies */}
                <Row justify='center' align='middle' style={{'backgroundColor': 'white', 'height': '250px', 'padding': '100px'}}>
                <Row justify='end' align='top' style={{'maxWidth': '2000px', 'width': '100%','backgroundColor' : 'white'}}>
                    <Col style={{'padding': '0px 20px'}}>
                        <Row justify='center' align='middle' style={{'cursor': 'pointer'}} onClick={() => { window.scrollTo(0, 0)}}>
                            <Col>
                                <Image height={70} preview={false} src={state.appLogo} ></Image>
                            </Col>
                            {/* <Col>
                                <Typography.Title level={3} style={{'color': 'gray', 'marginLeft': '10px'}}>{state.appName}</Typography.Title>
                            </Col> */}
                        </Row>
                        {/* <Row justify='start' align='middle' style={{'marginTop': '125px'}}>
                            <Col>
                                <Button type="primary" shape="round" icon={<DownloadOutlined />} size='large' danger onClick={() => { window.scrollTo(0, 0)}}>Download</Button>
                            </Col>

                        </Row> */}
                    </Col>

                    {/* <Col style={{'padding': '0px 20px'}}>
                        <Row justify='start' align='middle' style={{'margin': '20px 0'}}>
                            <Typography>
                                Who we are
                            </Typography>
                        </Row>
                        <Row justify='start' align='middle'>
                        <a href={state.appURL + '/policy/cookies'} target='_blank' rel="noopener noreferrer">
                            <Typography.Title level={5}>
                                Cookies Policy
                            </Typography.Title>
                        </a>
                        </Row>
                        <Row justify='start' align='middle'>
                        <a href={state.appURL + '/policy/privacy'} target='_blank' rel="noopener noreferrer">
                            <Typography.Title  level={5}>
                                Privacy Policy
                            </Typography.Title>
                        </a>
                        </Row>
                        <Row justify='start' align='middle'>
                        <a href={state.appURL + '/policy/terms'} target='_blank' rel="noopener noreferrer">
                            <Typography.Title level={5}>
                                Terms of Service
                            </Typography.Title>
                        </a>
                        </Row>
                    </Col> */}

                    {/* <Col style={{'padding': '0px 20px'}}>
                        <Row justify='start' align='middle' style={{'margin': '20px 0'}}>
                            <Typography>
                                Need help?
                            </Typography>
                        </Row>
                        <Row justify='start' align='middle' style={{'cursor': 'pointer'}}>
                            <Popover placement='top' title='Contact Us' content={

                                <a href={state.discordLink} target='_blank' rel="noopener noreferrer">
                                    <Row justify='start' align='middle'>
                                        <Col>
                                            <Image height={40} preview={false} src={state.discordImage}></Image>
                                        </Col>
                                        <Col style={{'marginLeft': '5px'}}>
                                            <Typography>Join our Discord</Typography>  
                                        </Col>
                                    </Row>

                                </a>
                            } trigger='click'>
                                <Typography.Title level={5}>
                                    Contact Us
                                </Typography.Title>
                            </Popover>
                        </Row>
                    </Col> */}
                </Row>                
                </Row>

                {/* <Row justify="center" align='middle' style={{'backgroundColor': 'white', 'padding': '0 0 40px 0'}}>
                    <Col>
                        <Typography.Text type="secondary" style={{'fontSize': 12}}>
                            {state.appName} © {new Date().getFullYear()}
                        </Typography.Text>
                    </Col>
                </Row> */}

            </Layout.Content>

        </Layout>
    )
}

export default Desktop
