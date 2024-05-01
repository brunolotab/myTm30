import React, { useContext, useState } from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import Agada from '../../assets/Aboutimage/Directors/Dimage1_files/agada-7e7dee65.png'
import Albert from '../../assets/Aboutimage/Directors/Dimage1_files/albert-eca16837.png'
import Dosumu from '../../assets/Aboutimage/Directors/Dimage1_files/dosumu-d7b068d0.jpeg'
import Ejembi from '../../assets/Aboutimage/Directors/Dimage1_files/ejembi-19f6ee49.png'
import Niyi from '../../assets/Aboutimage/Directors/Dimage1_files/niyi-0c946aed.png'
import Saheed from '../../assets/Aboutimage/Directors/Dimage1_files/saheed-ec39c716.png'
import Titilayo from '../../assets/Aboutimage/Directors/Dimage1_files/titilayo-8b5544c6.png'
import Albertt from '../../assets/Aboutimage/Managements/Mimages_files/albert-eca16837.png'
import Saheedd from '../../assets/Aboutimage/Managements/Mimages_files/saheed-ec39c716.png'
import Niyii from '../../assets/Aboutimage/Managements/Mimages_files/niyi-0c946aed.png'

import styled from 'styled-components'
// import AgadaApo from '../../Modal/DirectorsInfo/Agada'
import AfolabiAlb from '../../Modal/DirectorsInfo/Afolabi'
import { ContextAPI } from '../../ContextAP1/ContextAPI'
import NavRoles from '../../Components/NavRoles'
// import TitilayoOlu from '../../Modal/DirectorsInfo/Titilayo'
// import EjembiEmma from '../../Modal/DirectorsInfo/Ejembi'
// import Olanyi from '../../Modal/DirectorsInfo/Olanyi'
// import Dasumu from '../../Modal/DirectorsInfo/Dasumu'
// import SaheedAlb from '../../Modal/DirectorsInfo/Saheed'

function Directors() {

    const { setOpenModal2, openModal2, setOpenModal3, openModal3,
        setOpenModal4, openModal4, setOpenModal5, openModal5, setOpenModal6, openModal6,
        setOpenModal7, openModal7,
        setOpenModal8, openModal8 } = useContext(ContextAPI)

    // const [openModal2, setOpenModal2] = useState(false);


    return (
        <Piv>
            <div className='director-wrapper'>
                <div>
                    <h3 style={{ textAlign: 'center', color: '#24b0ff', fontWeight: 'bolder' }}>Meet Our</h3>
                    <h1 style={{ textAlign: 'center', fontWeight: 900 }}>Board Of Directors</h1><br />
                    <div className='directors-image'><img src={Agada} alt='' /></div>
                    <div className='directors-name' onClick={() => setOpenModal2(true)}><div>Aganda Apoch <span></span></div>
                        <p>Chairman</p></div>
                </div>
                <div className='director-container'>
                    <div>
                        <div className='directors-image'><img src={Albert} alt='' /></div>
                        <div className='directors-name' onClick={() => setOpenModal3(true)}><div>Afolabi Albert <span style={{ fontSize: '25', color: 'white', fontWeight: 'bold', float: 'right' }}><GoArrowUpRight /></span></div>
                            <p>MD/CEO</p></div>
                    </div>
                    <div>
                        <div className='directors-image'><img src={Titilayo} alt='' /></div>
                        <div className='directors-name' onClick={() => setOpenModal4(true)}><div>Olubiyi Tititayo<span style={{ fontSize: '25', color: 'white', fontWeight: 'bold', float: 'right' }}><GoArrowUpRight /></span></div>
                            <p>Director</p></div>
                    </div>
                    <div >
                        <div className='directors-image'><img src={Ejembi} alt='' /></div>
                        <div className='directors-name' onClick={() => setOpenModal5(true)} ><div>Ejembi Emmanuel <span style={{ fontSize: '25', color: 'white', fontWeight: 'bold', float: 'right' }}><GoArrowUpRight /></span></div>
                            <p>Director</p></div>
                    </div>
                    <div>
                        <div className='directors-image'><img src={Dosumu} alt='' /></div>
                        <div className='directors-name' onClick={() => setOpenModal6(true)} ><div>Dosumu Sunday <span style={{ fontSize: '25', color: 'white', fontWeight: 'bold', float: 'right' }}><GoArrowUpRight /></span></div>
                            <p>Director</p></div>
                    </div>
                    <div>
                        <div className='directors-image'><img src={Saheed} alt='' /></div>
                        <div className='directors-name' onClick={() => setOpenModal7(true)}><div>Albert Saheed <span style={{ fontSize: '25', color: 'white', fontWeight: 'bold', float: 'right' }}><GoArrowUpRight /></span></div>
                            <p>Director</p></div>
                    </div>
                    <div>
                        <div className='directors-image'><img src={Niyi} alt='' /></div>
                        <div className='directors-name' onClick={() => setOpenModal8(true)} ><div>Olaniyi Adefabi <span style={{ fontSize: '25', color: 'white', fontWeight: 'bold', float: 'right' }}><GoArrowUpRight /></span></div>
                            <p>Director</p></div>
                    </div>

                </div>
            </div>
            <div className='management-wrapper'>
                <h1 style={{ marginTop: '2rem', color: '#24b0ff' }}>The Management Team</h1>
                <div className='management-container' style={{ marginTop: '4rem' }}>
                    <div>
                        <div className='management-image'><img src={Albertt} alt='' /></div>
                        <div className='management-name' onClick={() => setOpenModal3(true)}><div>Afolabi Albert <span style={{ fontSize: '25', color: 'white', fontWeight: 'bold', float: 'right' }}><GoArrowUpRight /></span></div>
                            <p>MD/CEO</p></div>
                    </div>
                    <div>
                        <div className='management-image' ><img src={Saheedd} alt='' /></div>
                        <div className='management-name' onClick={() => setOpenModal7(true)}><div>Albert Saheed <span style={{ fontSize: '25', color: 'white', fontWeight: 'bold', float: 'right' }}><GoArrowUpRight /></span></div>
                            <p>CTO</p></div>
                    </div>
                    <div>
                        <div className='management-image'><img src={Niyii} alt='' /></div>
                        <div className='management-name' onClick={() => setOpenModal8(true)} ><div>Olaniyi Adefabi <span style={{ fontSize: '25', color: 'white', fontWeight: 'bold', float: 'right' }}><GoArrowUpRight /></span></div>
                            <p>COO</p></div>
                    </div>

                </div>
            </div>
            <div style={{ padding: '5rem 2rem', background: '#f9fafb' }}>
                <div className='hiring'>
                    <div><h1 style={{ fontWeight: '900' }}>We're hiring!</h1></div>
                    <p style={{ fontSize: '17px', color: '#717a8e' }}>Our team is growing fast and we’re always looking for smart people.</p>
                    {/* <div style={{ padding: '8px' }}><button style={{ padding: '15px 37px', color: '#fff', border: 'none', borderRadius: '10px', background: '#0090ff' }}>View Open Roles</button></div> */}
                    <NavRoles name='/Careers'/>
                </div>
            </div>
            {openModal2 && <AfolabiAlb closemodal={setOpenModal2} description='Agada Apochi is an Organizational Psychologist & Change Leadership Specialist and also a
                            Practitioner-Scholar in diffusion of innovation and digital financial services.
                            He has over 30 years of professional experience in banking and financial technology.
                            Agada is the Chairman of the Board of Directors of TM30. Agada is the Managing Director & CEO of Nigeria’s premier financial technology company,
                            UP (Unified Payments), which is a group of companies with services including Banking, Payment Scheme, Financial Technology, Digital Commerce, Value Added Service, Payment Solutions, Software Solutions, etc. He is also the Founder/Director of Hope PSBank as well as the payment scheme and financial technology company,
                            Payattitude Global Limited and the telecom VAS provider, UP Digital Limited.' 
                            description2='Agada attained Doctor of Business Administration (DBA) with specialization in diffusion of
                            innovation and digital financial services as well as Master Degree in Applied Business Research from
                            SBS Swiss Business School in Switzerland, Master Degree (MA) in Organizational Psychology with
                            specialization in Change Leadership from Columbia University in New York, Master Degree in Law (LL.M.) from Rivers State University,
                            Barrister at Law (BL) from the Nigerian Law School and Bachelor Degree in Law (LL.B.) from the University of Jos.
                            He is also is an Alumnus of Lagos Business School and Cornell University. He has attended different executive learning programs including programs at Harvard Business School,
                            Insead Business School and Bank Card Business School in Cambridge. Agada holds several academic honours and awards including best graduating student. He was called to the Nigerian Bar in 1992 and
                            has since worked and gained experience in company law & practice, banking and financial services, electronic transactions, retail business, administration, strategy, execution and change leadership.'
                            description3='Agada is currently the President of Lagos Business School Alumni Association and a Life Member of the Governing Council of the association.
                            Agada is an Organizational Psychologist, Innovator and Entrepreneur. He is a Fellow, Chartered Institute of Bankers of Nigeria, Fellow, International Academy of Cards & Payments, Fellow, Institute of Credit Administration, Certified International.
                            Cards & Payments Professional (CICPP), Certified Associate of Capability Maturity Model Institute, Chartered Mediator & Conciliator, Barrister & Solicitor. He has to his credit, different professional and technical papers.
                            Agada is married with children.'
                            propics={Agada}
                            />}
            {openModal3 && <AfolabiAlb closemodal={setOpenModal3} name='Albert Afolabi' propics={Albert} description=' is a seasoned Business and Product Manager with over 14years in IT and Telecoms (VAS), mobile advertising, Product /business strategy and product development. 
            Albert has managed several deployment across 10 African countries.'/>}
            {openModal4 && <AfolabiAlb closemodal={setOpenModal4} name={'Olubiyi Titilayo '} propics={Titilayo} description='is the Director Financial Institutions at Unified Payment Services Limited.
                            She is the pioneering Group Head for PayAttitude, a novel mobile payment solution that is a value innovation by Unified Payment Services Nigeria Limited.
                            Titilayo has over two decades hands on experience in Marketing, Sales, Channel management and General management.
                            Prior to joining Unified Payments Services in year 2012, she has been in the FMCG and telecommunications industry, where she worked with UAC of Nigeria PLC on several brands eg Mr Biggs, Meat Mart and Pharmaceuticals & Personal Products division. Titilayo is one of the start up team of MTN Sales and Distribution department.
                            She also has an excellent track record working with Nokia West Africa with several performance awards and Samsung Electronics West Africa.
                            She has an MBA in Marketing and B A Hons English from Obafemi Awolowo University.
                            She’s is an Affiliate member of Chartered Institute of Marketing (UK) , Member of Nigeria Institute of Marketing and a Member of Association for Counsellors, Matchmaking & Psychotherapy of Nigeria (ACMPN).
                            She has attended several notable trainings within and outside the country that has impacted and sharpen her
                            skills and competencies eg Harvard Business School, Drakes University, Cornell University, Lagos Business School, IESE Business School , Barcelona etc She is also a member of the Governing Council of the prestigious Lagos Business School.
                            Titi is a self-motivated, determined, energetic individual and her interpersonal skills has been a major contributing factor to her achievement so far while her main goal is to strive for excellence in whatever she does.
                            She also enjoys travelling as it creates the culture of adventure and curiosity in the workplace as it helps her gain new perspectives.'
                         />}
            {openModal5 && <AfolabiAlb closemodal={setOpenModal5} name='Emmanuel Ejembi ' propics={Ejembi} description='is the Director/Group Chief Technology Officer. 
                        He was the Group Head of Information Technology and Operations for UP. 
                        He is a seasoned technology professional with deep implementation and technology management experience. 
                        A Certified Expert in IT Infrastructure Library (ITIL), and Expert Oracle Database Administrator with vast exposure to Information Technology (IT) infrastructure, Databases, Data Center Management, Electronic Payment Systems and Solutions and IT Services Management. 
                        Emmanuel joined the services of Unified Payments in 2005 and worked in several roles – as Systems Administrator, Database Administrator, Data Center Manager, Head of Department –Issuing, Group Head Information Technology and Operations. Prior to joining the services of Unified Payments, Emmanuel worked with First Foundation Medical Engineering, and Bentel Networks Ltd as an Engineer.
                        He holds a B.Eng. degree in Electrical/Electronic Engineering from the Federal University of Agriculture, Makurdi - Benue State, Master of Business Administration (MBA) from Obafemi Awolowo University, Ile-Ife and M.Sc. in Information Systems Management from Roehampton University, London. He is also an alumnus of Cornel University, USA and the famous Lagos Business School. Emmanuel is member of the Nigeria Society of Engineers (NSE).'
                         />}
          
            {openModal6 && <AfolabiAlb closemodal={setOpenModal6} name={'Dasumu Sunday '} propics={Dosumu} description='is the Director/Group Chief Technology Officer. 
                        He was the Group Head of Information Technology and Operations for UP. 
                        He is a seasoned technology professional with deep implementation and technology management experience. 
                        A Certified Expert in IT Infrastructure Library (ITIL), and Expert Oracle Database Administrator with vast exposure to Information Technology (IT) infrastructure, Databases, Data Center Management, Electronic Payment Systems and Solutions and IT Services Management. 
                        Emmanuel joined the services of Unified Payments in 2005 and worked in several roles – as Systems Administrator, Database Administrator, Data Center Manager, Head of Department –Issuing, Group Head Information Technology and Operations. Prior to joining the services of Unified Payments, Emmanuel worked with First Foundation Medical Engineering, and Bentel Networks Ltd as an Engineer.
                        He holds a B.Eng. degree in Electrical/Electronic Engineering from the Federal University of Agriculture, Makurdi - Benue State, Master of Business Administration (MBA) from Obafemi Awolowo University, Ile-Ife and M.Sc. in Information Systems Management from Roehampton University, London. He is also an alumnus of Cornel University, USA and the famous Lagos Business School. Emmanuel is member of the Nigeria Society of Engineers (NSE).' 
                        />}
            {openModal7 && <AfolabiAlb closemodal={setOpenModal7} name='Albert Saheed  ' propics={Saheedd} description='is a seasoned Technology consultant with over 14 years experience in building and managing Enterprise Software Solutions, 
                        Mobile Application Services and Voice Based Solutions (IVR) across Africa.' />}
            {openModal8 && <AfolabiAlb closemodal={setOpenModal8} name='Olannyi Adefabi ' propics={Niyii} description='is a high-performing digital Products professional with 17 years of extensive experience covering IT, Telecoms, Business Development and Mobile advertising. 
                            Olaniyi has developed and scaled up several digital businesses as well as numerous large scale telco integrations across Africa.'
                         />}



        </Piv>
    )
}

export default Directors

const Piv = styled.div`
    .director-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 3rem 2rem;
        
    }
    .director-container, .management-container {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 30px;
        grid-auto-rows: 350px;
    }
    .directors-image, .management-image {
        width: 250px;
        height: 300px;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .directors-name, .management-name {
        position: relative;
        top: -105px;
        padding: 12px;
        border: 1px solid #dddd;
        width: 200px;
        margin: 0px 10px 10px 10px;
        height: 60px;
        font-weight: bolder;
        font-size: 19px;
        color: #fff;
        /* background-color: rgba(9, 9, 9, 0.473); */
        background-color: #aaaa;
        cursor: pointer;
    }
    .management-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        background: #fff;
        margin-top: 2rem;
    }
    .hiring  {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 0.2;
    }
`