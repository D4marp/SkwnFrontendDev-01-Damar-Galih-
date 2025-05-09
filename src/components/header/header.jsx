import { Button } from "../buttons/button";
import "./style.css";
import { Link } from "react-scroll";

export const Header = () => {
    const handleSignUpClick = () => {
        alert("Sign Up button clicked!");
    };

    const handleShoppingBagClick = () => {
        alert("Shopping Bag button clicked!");
    };

    return (
        <div className={`header title_16`}>
            <div className="logo">
                <img
                    src="/logo.svg"
                    alt="logo"
                    style={{ width: "3rem", height: "3rem" }}
                />
                <img
                    src="/Dekoor.svg"
                    alt="logo"
                    style={{ width: "6.22rem", height: "1.417rem" }}
                />
            </div>
            <div className="menu">
                <Link 
                    to="hero" 
                    smooth={true} 
                    duration={500} 
                    offset={-70}
                >
                    Home
                </Link>
                <Link 
                    to="hero" 
                    smooth={true} 
                    duration={500} 
                    offset={-70}
                >
                    About Us
                </Link>
                <Link 
                    to="category" 
                    smooth={true} 
                    duration={500} 
                    offset={-70}
                >
                    Furniture
                </Link>
                <Link 
                    to="why" 
                    smooth={true} 
                    duration={500} 
                    offset={-70}
                >
                    Partnerships
                </Link>
                <Link 
                    to="limited" 
                    smooth={true} 
                    duration={500} 
                    offset={-70}
                >
                    Contact
                </Link>
            </div>
            <div className="signup">
                <Button bg="var(--color-sour)" p="0.75rem 1.5rem" onClick={handleSignUpClick}>
                    Sign Up
                </Button>
                <Button bg="var(--color-brightBrown)" onClick={handleShoppingBagClick}>
                    <img src="/button/shopping_bag.svg" alt="" />
                </Button>
            </div>
        </div>
    );
};
