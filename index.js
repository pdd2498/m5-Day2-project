    
    
    
    
    
    const h1 = React.createElement('h1' , {} , 'Preyesh Dhar Diwan')
    const p1 = React.createElement( 'p' , {} , 'Front End Developer')
    const p2 = React.createElement('p' , {} , 'Enthusiastic and dedicated recent graduate with a Bachelor s degree in Computer Science, specializing in frontend development. Proficient in HTML, CSS, and JavaScript, with a passion for creating responsive and visually appealing user interfaces. Eager to leverage academic knowledge and hands-on experience to contribute effectively as a Frontend Developer. Strong problem-solving skills, attention to detail, and a commitment to staying updated with the latest web development trends.')
    const a1 = React.createElement( 'a' ,{href: "https://github.com/pdd2498" ,  style: {margin:"10px"}}, 'GitHub')
    const a2 = React.createElement('a' ,{href: "https://www.linkedin.com/in/preyesh-dhar-diwan-8324b3194/"}, 'Linkedin')
    const p3 = React.createElement('p' , {} , 'Connect me')
    const p4 = React.createElement('p' , {} , 'Thanks For Visit')

    
    const divp = React.createElement('div' , {} , [p2])
    const div1 = React.createElement( 'div', {} , [h1,p1])
    const div2 = React.createElement('div' , {} ,[p3,a1,a2])
    const div3 = React.createElement('div' , {} , [p4])
    const div4 = React.createElement('div' , { style: { textAlign: "center"} } , [div1,divp,div2,div3])


ReactDOM.render( div4 , document.querySelector("#root"))