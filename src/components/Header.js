import { LOGO } from "../config/config";

export default function Header() {
    
    return (
        <header>
            <img src={LOGO} alt="logo" className="logo"/>
        </header>
    )
}
