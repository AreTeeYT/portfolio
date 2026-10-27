type NavbarProps = {
    selectedTab: (tab: string) => void;
}

export default function Navbar({selectedTab} : NavbarProps){

    function setNavBar(tab: string){
        selectedTab(tab);
    }


    return (
        <>
            <nav id='navbar'>
                <span>
                    <h1>RM</h1>
                </span>
                <ul>
                    <li><button onClick={() => {setNavBar("home")} }>Home</button></li>
                    <li><button onClick={() => {setNavBar("about-me")} }>About Me</button></li>
                    <li><button onClick={() => {setNavBar("projects")} }>Projects</button></li>
                    <li><button onClick={() => {setNavBar("resume")} }>Resume</button></li>
                    <li><button onClick={() => {setNavBar("contact")} }>Contact</button></li>
                </ul>
            </nav>
        </>
    )
}