const AboutPage = () => {

    const blackBackgroundStyle = {
    backgroundColor: 'black',


    };
    const aboutStyle = { display: 'flex',
    flexDirection:'column',
    height: '100vh',
    textAlign: 'start',
    paddingLeft: '4rem',
    paddingRight: '4rem'
    };

    const headStyle = {

        color: '#FC0101',
        fontSize: "64px",
        fontFamily: 'MrRobot',
        fontWeight: '400',
        margin: "0"


    };

    const textStyle = {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '400',
        width: "16rem"


    }

    const pageno = {
        color: 'white',
        fontSize: 48,
        fontFamily: 'Poppins' ,
        fontWeight: '700',

    } 

    return (
        <>
            <div className="App" style={blackBackgroundStyle}>
                <div className='about' style={aboutStyle}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems:"center", marginTop:"100px"}}>
                        {/* <p style={{color: 'white', letterSpacing: "5px", marginBottom:"5px", fontWeight: 'bold' }}>CY<span style={{color:"red", fontWeight: 'bold'}}>S</span>COM</p> */}
                    {/* <div style={pageno}>
                        <p><span style={{textDecoration:'underline'}}>02</span><span style={{alignItems:"start", fontSize: 24, position: 'relative', top: -16}}> / 04</span></p>
                    </div> */}
                    </div>
                    <div >               
                        <p style={headStyle}>About Event</p>
                    </div>

                    <div>
                        <p style={textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                {/* <div style={{position: 'relative', width: '93%', height: 90,}}><img src={backButton} style={{position: 'absolute', width: '45px', height: '45px', bottom: 0, right: 0}} /></div> */}
                {/* <div style={{position: 'relative', width: '99%', height: 90,}}><img src={forwardButton} style={{position: 'absolute', width: '70px', height: '70px', bottom: 0, right: 0}} /></div> */}

            </div>           
        </>
    );
};

export default AboutPage;
